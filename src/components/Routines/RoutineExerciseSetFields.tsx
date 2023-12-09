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
import {
  RoutineExerciseSetContext,
  RoutineExerciseSetProps,
} from "./RoutineExerciseSetsField";
import { AddRoutineFormReturn, AddRoutineFormSchema } from "./AddRoutineForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type RoutineExerciseSetFieldArray = UseFieldArrayReturn<
  AddRoutineFormSchema,
  `routineExercises.${number}.sets`,
  "id"
>;

type SetFormFieldProps = {
  label: string;
  form: AddRoutineFormReturn;
  index: number;
  setIndex: number;
  setField: "reps" | "kg" | "time";
  type: "text" | "number";
};

function SetFormField({
  label,
  form,
  index,
  setIndex,
  setField,
  type,
}: SetFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={`routineExercises.${index}.sets.${setIndex}.${setField}`}
      render={({ field }) => (
        <FormItem className="col-span-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} />
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
      variant="destructive"
      className="col-span-1 self-end"
      onClick={(e) => {
        e.preventDefault();
        fieldArray.remove(setIndex);
      }}
    >
      Delete
    </Button>
  );
}

type GetIterableIteratorVal<T> = T extends IterableIterator<infer TInferredData>
  ? TInferredData
  : never;

type SetFormFieldsProps = {
  formFields: (
    form: AddRoutineFormReturn,
    index: RoutineExerciseSetProps["index"],
    setIndex: number
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
  const { index } = useContext(RoutineExerciseSetContext);
  const form = useFormContext<AddRoutineFormSchema>();
  const fieldArray = useFieldArray({
    name: `routineExercises.${index}.sets`,
    control: form.control,
  });

  return (
    <div className="space-y-3" ref={parent}>
      {fieldArray.fields.map((set, setIndex) => (
        <div key={set.id} className={cn("grid grid-cols-3 gap-x-2", className)}>
          {formFields(form, index, setIndex)}

          <DeleteSetButton fieldArray={fieldArray} setIndex={setIndex} />
        </div>
      ))}

      <Button
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          fieldArray.append({ ...appendArgument });
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
      <Input type="text" disabled={true} value={setIndex + 1} />
      <FormMessage />
    </FormItem>
  );
}

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
              label="Kg"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="kg"
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
        kg: 0,
        reps: 0,
      }}
      className="grid-cols-[31.6fr_31.6fr_31.6fr_0.5fr]"
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
      className="grid-cols-[47.5fr_47.5fr_0.5fr]"
    />
  );
}

export { WeightField, BodyWeightField, DurationField };
