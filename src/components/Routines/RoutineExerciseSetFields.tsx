import { ReactNode, memo, useContext, useMemo } from "react";
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
import { Button } from "../ReactAriaUI/Button";
import { cn, getNumberFieldUnitFormatOptions } from "@/lib/utils";
import {
  RoutineExerciseSetsFieldContext,
  RoutineExerciseSetsFieldProps,
} from "./RoutineExerciseSetsField";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TimeField } from "../ReactAriaUI/TimeField";
import { Time, parseTime } from "@internationalized/date";
import { FormCustomError } from "../common/FormCustomError";
import {
  RoutineFormReturn,
  RoutineFormSchema,
} from "@/lib/zod/routineFormSchema";
import { NumberField } from "../ReactAriaUI/NumberField";
import { Trash2 } from "lucide-react";

type RoutineExerciseSetFieldArray = UseFieldArrayReturn<
  RoutineFormSchema,
  `routineExercises.${number}.sets`,
  "id"
>;

type SetFormFieldProps = {
  label: string;
  form: RoutineFormReturn;
  index: number;
  setIndex: number;
  setField: keyof RoutineFormSchema["routineExercises"][0]["sets"][0];
  type?: "text" | "number";
};

function SetFormField({
  label,
  form,
  index,
  setIndex,
  setField,
}: SetFormFieldProps) {
  const { unit } = useContext(RoutineExerciseSetsFieldContext);

  const formatOptions: Intl.NumberFormatOptions = useMemo(() => {
    return getNumberFieldUnitFormatOptions(unit, label);
  }, [unit, label]);

  return (
    <FormField
      control={form.control}
      name={`routineExercises.${index}.sets.${setIndex}.${setField}`}
      render={({ field }) => (
        <FormItem className="col-span-1">
          <FormLabel>{label}</FormLabel>
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
                  }
                }}
                onBlur={field.onBlur}
              />
            ) : (
              <NumberField
                className="gap-y-0"
                onChange={field.onChange}
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

type DeleteSetButtonProps = {
  fieldArray: RoutineExerciseSetFieldArray;
  setIndex: number;
};

function DeleteSetButton({ fieldArray, setIndex }: DeleteSetButtonProps) {
  return (
    <Button
      size="icon"
      variant="destructive"
      className="col-span-1 self-end"
      type="button"
      onPress={() => {
        fieldArray.remove(setIndex);
      }}
    >
      <Trash2 size={16} />
    </Button>
  );
}

type GetIterableIteratorVal<T> =
  T extends IterableIterator<infer TInferredData> ? TInferredData : never;

type SetFormFieldsProps = {
  formFields: (
    form: RoutineFormReturn,
    index: RoutineExerciseSetsFieldProps["index"],
    setIndex: number,
  ) => ReactNode;
  appendArgument: Exclude<
    GetIterableIteratorVal<
      ReturnType<Parameters<RoutineExerciseSetFieldArray["append"]>["values"]>
    >,
    FieldArrayMethodProps | undefined
  >;
  className?: string;
};

function SetFormFields({
  formFields,
  appendArgument,
  className,
}: SetFormFieldsProps) {
  const [parent] = useAutoAnimate();
  const { index } = useContext(RoutineExerciseSetsFieldContext);
  const form = useFormContext<RoutineFormSchema>();
  const fieldArray = useFieldArray({
    name: `routineExercises.${index}.sets`,
    control: form.control,
  });

  return (
    <div className="space-y-3" ref={parent}>
      {fieldArray.fields.map((set, setIndex) => (
        <div key={set.id} className={cn("grid grid-cols-3 gap-x-2", className)}>
          {formFields(form, index, setIndex)}

          <div className="space-y-2">
            <div className="h-6" />
            <DeleteSetButton fieldArray={fieldArray} setIndex={setIndex} />
            <div className="h-[0.8rem]" />
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        type="button"
        onPress={() => {
          fieldArray.append({ ...appendArgument });
        }}
      >
        Add Set
      </Button>
      <FormCustomError name={`routineExercises.${index}.sets`} form={form} />
    </div>
  );
}

type SetFieldProps = {
  setIndex: number;
  className?: string;
};

const SetField = memo(function SetField({
  setIndex,
  className,
}: SetFieldProps) {
  return (
    <FormItem className={cn("col-span-1", className)}>
      <FormLabel className="text-muted-foreground">Set</FormLabel>
      <Input type="text" disabled={true} value={setIndex + 1} />
      <FormMessage />
    </FormItem>
  );
});

function BodyWeightField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />

            <SetFormField
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
      className="grid-cols-[47.5fr_47.5fr_0.5fr]"
    />
  );
}

function WeightField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />

            <SetFormField
              label="Weight"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="weight"
              type="number"
            />

            <SetFormField
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
        weight: 0,
        reps: 0,
      }}
      className="grid-cols-[19.5fr_40fr_40fr_0.5fr] md:grid-cols-[31.6fr_31.6fr_31.6fr_0.5fr]"
    />
  );
}

function DurationField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetField setIndex={setIndex} />

            <SetFormField
              label="Duration"
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
      className="grid-cols-[47.5fr_47.5fr_0.5fr]"
    />
  );
}

export { WeightField, BodyWeightField, DurationField };
