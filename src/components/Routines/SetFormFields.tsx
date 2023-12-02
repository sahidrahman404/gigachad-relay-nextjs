import { ReactNode, useContext } from "react";
import { FieldArrayMethodProps } from "react-hook-form";
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
  SetFormProps,
  SetFormsContext,
} from "./RoutineExerciseSet";

type SetFormFieldProps = {
  label: string;
  form: RoutineExerciseSetProps["form"];
  index: number;
  setIndex: number;
  setField: "set" | "reps" | "kg" | "time";
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

type DeleteSetButtonProps = SetFormProps & {
  setIndex: number;
};

function DeleteSetButton({
  count,
  setCount,
  fieldArray,
  setIndex,
}: DeleteSetButtonProps) {
  const { form, index } = useContext(RoutineExerciseSetContext);
  return (
    <Button
      variant="destructive"
      className="col-span-1 self-end"
      onClick={(e) => {
        e.preventDefault();
        const decreasedCount = count - 1;
        setCount(decreasedCount);
        if (decreasedCount > 0) {
          const newArr = Array.from(
            Array(fieldArray.fields.length),
            (_, index) => index,
          ).filter((val) => val !== setIndex);
          newArr.forEach((val, i) => {
            form.setValue(`routineExercises.${index}.sets.${val}.set`, i + 1);
          });
        }
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
    form: RoutineExerciseSetProps["form"],
    index: RoutineExerciseSetProps["index"],
    setIndex: number,
  ) => ReactNode;
  appendArgument: Exclude<
    GetIterableIteratorVal<
      ReturnType<Parameters<SetFormProps["fieldArray"]["append"]>["values"]>
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
  const { form, index } = useContext(RoutineExerciseSetContext);
  const { fieldArray, setCount, count } = useContext(SetFormsContext);

  return (
    <div className="space-y-3">
      {fieldArray.fields.map((set, setIndex) => (
        <div key={set.id} className={cn("grid grid-cols-3 gap-x-2", className)}>
          {formFields(form, index, setIndex)}

          <DeleteSetButton
            fieldArray={fieldArray}
            count={count}
            setCount={setCount}
            setIndex={setIndex}
          />
        </div>
      ))}

      <Button
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          const increasedCount = count + 1;
          setCount(increasedCount);
          fieldArray.append({ ...appendArgument, set: increasedCount });
        }}
      >
        Add Set
      </Button>
    </div>
  );
}

function BodyWeightField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetFormField
              label="Set"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="set"
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
      // @ts-ignore
      appendArgument={{
        reps: 0,
      }}
    />
  );
}
function WeightField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetFormField
              label="Set"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="set"
              type="number"
            />

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
      // @ts-ignore
      appendArgument={{
        kg: 0,
        reps: 0,
      }}
      className="grid-cols-4"
    />
  );
}

function DurationField() {
  return (
    <SetFormFields
      formFields={(form, index, setIndex) => {
        return (
          <>
            <SetFormField
              label="Set"
              form={form}
              index={index}
              setIndex={setIndex}
              setField="set"
              type="number"
            />

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
      // @ts-ignore
      appendArgument={{
        time: "",
      }}
    />
  );
}

export { WeightField, BodyWeightField, DurationField };
