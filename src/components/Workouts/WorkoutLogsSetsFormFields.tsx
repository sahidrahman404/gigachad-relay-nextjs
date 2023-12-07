import { ReactNode, useContext } from "react";
import {
  FieldArrayMethodProps,
  UseFieldArrayReturn,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { WorkoutLogsContext, WorkoutLogsProps } from "./WorkoutLogs";
import { Checkbox } from "../ui/checkbox";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  StartWorkoutFormSchema,
  UseFormReturnStartWorkoutFormSchema,
} from "./StartWorkoutForm";

type WorkoutLogsSetFormFieldProps = {
  label: string;
  form: UseFormReturnStartWorkoutFormSchema;
  index: number;
  setIndex: number;
  setField: Exclude<
    keyof StartWorkoutFormSchema["workoutLogs"][0]["sets"][0],
    "selected"
  >;
  type: "text" | "number";
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
  return (
    <FormField
      control={form.control}
      name={`workoutLogs.${index}.sets.${setIndex}.${setField}`}
      render={({ field }) => (
        <FormItem className={cn("col-span-1", className)}>
          <FormLabel className="text-muted-foreground">{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type WorkoutLogsSetsFieldArray = {
  fieldArray: UseFieldArrayReturn<
    StartWorkoutFormSchema,
    `workoutLogs.${number}.sets`
  >;
};

type GetIterableIteratorVal<T> = T extends IterableIterator<infer TInferredData>
  ? TInferredData
  : never;

type WorkoutLogsSetsFormFieldsProps = {
  formFields: (
    form: UseFormReturnStartWorkoutFormSchema,
    index: WorkoutLogsProps["index"],
    setIndex: number,
  ) => ReactNode;
  appendArgument: Exclude<
    GetIterableIteratorVal<
      ReturnType<
        Parameters<WorkoutLogsSetsFieldArray["fieldArray"]["append"]>["values"]
      >
    >,
    FieldArrayMethodProps | undefined
  >;
  className?: string;
};

function WorkoutLogsSetsFormFields({
  formFields,
  appendArgument,
  className,
}: WorkoutLogsSetsFormFieldsProps) {
  const [parent] = useAutoAnimate();
  const { index } = useContext(WorkoutLogsContext);
  const form = useFormContext<StartWorkoutFormSchema>();
  const fieldArray = useFieldArray({
    name: `workoutLogs.${index}.sets`,
    control: form.control,
  });

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
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      ))}

      <Button
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          fieldArray.append(appendArgument);
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
              label="Reps"
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
              label="Kg"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="kg"
              type="number"
            />

            <WorkoutLogsSetFormField
              label="Reps"
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
        kg: 0,
        reps: 0,
      }}
      className="grid-cols-[31.6fr_31.6fr_31.6fr_.5fr]"
    />
  );
}

function DurationField() {
  return (
    <WorkoutLogsSetsFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />
            <WorkoutLogsSetFormField
              label="Time"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="time"
              type="text"
            />
          </>
        );
      }}
      appendArgument={{
        time: "",
      }}
    />
  );
}

export { WeightField, BodyWeightField, DurationField };
