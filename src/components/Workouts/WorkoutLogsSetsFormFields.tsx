import { ReactNode, useContext, useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ReactAriaUI/Button";
import {
  capitalizeFirstLetter,
  cn,
  getNumberFieldUnitFormatOptions,
} from "@/lib/utils";
import { WorkoutLogsContext, WorkoutLogsProps } from "./WorkoutLogs";
import { Checkbox } from "../ui/checkbox";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  StartWorkoutFormSchema,
  UseFormReturnStartWorkoutFormSchema,
} from "./StartWorkoutForm";
import { TimeField } from "../ReactAriaUI/TimeField";
import { Time, parseTime } from "@internationalized/date";
import { WorkoutMachineContext } from "../Layout";
import { useTimer } from "../Hooks/useTimer";
import { PlayCircle } from "lucide-react";
import { NumberField } from "../ReactAriaUI/NumberField";

type SetFields = StartWorkoutFormSchema["workoutLogs"][0]["sets"][0];

type WorkoutLogsSetFormFieldProps = {
  label: keyof SetFields;
  form: UseFormReturnStartWorkoutFormSchema;
  index: number;
  setIndex: number;
  setField: Exclude<keyof SetFields, "selected">;
  type?: "text" | "number";
  className?: string;
};

function WorkoutLogsSetFormField({
  label,
  form,
  index,
  setIndex,
  setField,
  type,
  className,
}: WorkoutLogsSetFormFieldProps) {
  const workoutActor = WorkoutMachineContext.useActorRef();
  const unit = WorkoutMachineContext.useSelector((state) => state.context.unit);

  const formatOptions = useMemo(() => {
    return getNumberFieldUnitFormatOptions(unit, label);
  }, [unit, label]);
  return (
    <FormField
      control={form.control}
      name={`workoutLogs.${index}.sets.${setIndex}.${setField}`}
      render={({ field }) => (
        <FormItem className={cn("col-span-1", className)}>
          <FormLabel className="text-muted-foreground">
            {capitalizeFirstLetter(label)}
          </FormLabel>
          <FormControl>
            {setField === "duration" ? (
              <TimeField
                granularity="second"
                hourCycle={24}
                value={
                  !field?.value || field.value === ""
                    ? new Time(0, 0, 0)
                    : typeof field.value === "string"
                      ? parseTime(field.value)
                      : null
                }
                onChange={(val) => {
                  if (val) {
                    field.onChange(val.toString());
                    workoutActor.send({
                      type: "EDIT_SET_OBJECT",
                      value: {
                        label: "duration",
                        set: {
                          duration: val.toString(),
                        },
                        setIndex: setIndex,
                        workoutLogsIndex: index,
                      },
                    });
                  }
                }}
              />
            ) : (
              <NumberField
                className="gap-y-0"
                onChange={(value) => {
                  field.onChange(value);
                  workoutActor.send({
                    type: "EDIT_SET_OBJECT",
                    value: {
                      label: label,
                      set: {
                        [`${label}`]: value,
                      },
                      workoutLogsIndex: index,
                      setIndex: setIndex,
                    },
                  });
                }}
                onBlur={field.onBlur}
                value={Number(field.value)}
                formatOptions={formatOptions}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type WorkoutLogsSetsFormFieldsProps = {
  formFields: (
    form: UseFormReturnStartWorkoutFormSchema,
    index: WorkoutLogsProps["index"],
    setIndex: number,
  ) => ReactNode;
  appendArgument: SetFields;
  className?: string;
};

function WorkoutLogsSetsFormFields({
  formFields,
  appendArgument,
  className,
}: WorkoutLogsSetsFormFieldsProps) {
  const [parent] = useAutoAnimate();
  const { isTimerRunning } = useTimer();
  const { index } = useContext(WorkoutLogsContext);
  const form = useFormContext<StartWorkoutFormSchema>();
  const fieldArray = useFieldArray({
    name: `workoutLogs.${index}.sets`,
    control: form.control,
  });
  const workoutActor = WorkoutMachineContext.useActorRef();

  return (
    <div className="space-y-3" ref={parent}>
      {fieldArray.fields.map((set, setIndex) => (
        <div
          key={set.id}
          className={cn(
            "grid grid-cols-[47.5fr_47.5fr_.5fr] gap-x-2",
            className,
          )}
        >
          {formFields(form, index, setIndex)}
          <FormField
            control={form.control}
            name={`workoutLogs.${index}.sets.${setIndex}.selected`}
            render={({ field }) => (
              <FormItem className="self-end h-9 flex items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={isTimerRunning}
                    onCheckedChange={(val) => {
                      field.onChange(val);
                      workoutActor.send({
                        type: "EDIT_SET_OBJECT",
                        value: {
                          label: "selected",
                          set: {
                            selected: val as boolean,
                          },
                          setIndex: setIndex,
                          workoutLogsIndex: index,
                        },
                      });
                      if (val) {
                        workoutActor.send({ type: "TIMER_RESET" });
                        workoutActor.send({
                          type: "TIMER_DURATION_UPDATE",
                          value: { workoutLogsIndex: index },
                        });
                        workoutActor.send({ type: "TIMER_START" });
                      }
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      ))}

      <Button
        variant="outline"
        onPress={() => {
          fieldArray.append(appendArgument);
          workoutActor.send({
            type: "APPEND_WORKOUT_LOG_SET",
            value: {
              set: appendArgument,
              workoutLogsIndex: index,
            },
          });
        }}
      >
        Add Set
      </Button>
    </div>
  );
}

type SetFieldProps = {
  setIndex: number;
  className?: string;
};

function SetField({ setIndex, className }: SetFieldProps) {
  return (
    <FormItem className={cn("col-span-1", className)}>
      <FormLabel className="text-muted-foreground">Set</FormLabel>
      <FormControl>
        <Input type="text" disabled={true} defaultValue={setIndex + 1} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

function BodyWeightField() {
  return (
    <WorkoutLogsSetsFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />
            <WorkoutLogsSetFormField
              label="reps"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="reps"
              type="number"
            />
          </>
        );
      }}
      appendArgument={{
        reps: 0,
      }}
    />
  );
}
function WeightField() {
  return (
    <WorkoutLogsSetsFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />

            <WorkoutLogsSetFormField
              label="weight"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="weight"
              type="number"
            />

            <WorkoutLogsSetFormField
              label="reps"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="reps"
              type="number"
            />
          </>
        );
      }}
      appendArgument={{
        weight: 0,
        reps: 0,
      }}
      className="grid-cols-[19.5fr_40fr_40fr_0.5fr] md:grid-cols-[31.6fr_31.6fr_31.6fr_0.5fr]"
    />
  );
}

function DurationField() {
  const { isTimerRunning } = useTimer();
  const workoutActor = WorkoutMachineContext.useActorRef();
  return (
    <WorkoutLogsSetsFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />
            <div className="flex flex-col gap-y-4">
              <FormLabel className="text-muted-foreground">Timer</FormLabel>
              <Button
                className="h-9"
                variant="outline"
                isDisabled={isTimerRunning}
                onPress={() => {
                  workoutActor.send({ type: "TIMER_RESET" });
                  workoutActor.send({
                    type: "TIMER_EXERCISE_DURATION_UPDATE",
                    value: {
                      workoutLogsIndex: index,
                      setIndex: setIndex,
                    },
                  });
                  workoutActor.send({ type: "TIMER_START" });
                }}
              >
                <PlayCircle className="mr-2" />
                Start
              </Button>
            </div>
            <WorkoutLogsSetFormField
              label="duration"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="duration"
            />
          </>
        );
      }}
      appendArgument={{
        duration: "",
      }}
      className="grid-cols-[31.6fr_31.6fr_31.6fr_.5fr]"
    />
  );
}

export { WeightField, BodyWeightField, DurationField };
