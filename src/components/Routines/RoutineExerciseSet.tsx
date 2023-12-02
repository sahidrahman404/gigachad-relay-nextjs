import { Dispatch, SetStateAction, createContext, useState } from "react";
import {
  UseFieldArrayReturn,
  UseFormReturn,
  useFieldArray,
} from "react-hook-form";
import { AddRoutineFormSchema } from "./AddRoutineForm";
import { GetSetFields } from "./GetSetFields";

const RoutineExerciseSetContext = createContext<
  Omit<RoutineExerciseSetProps, "exerciseType">
>(null!);
const SetFormsContext = createContext<SetFormProps>(null!);

type RoutineExerciseSetProps = {
  index: number;
  form: UseFormReturn<AddRoutineFormSchema, any, undefined>;
};

type SetFormProps = {
  fieldArray: UseFieldArrayReturn<
    AddRoutineFormSchema,
    `routineExercises.${number}.sets`
  >;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

function RoutineExerciseSet({ index, form }: RoutineExerciseSetProps) {
  const [count, setCount] = useState(0);
  const fieldArray = useFieldArray({
    name: `routineExercises.${index}.sets`,
    control: form.control,
  });

  return (
    <RoutineExerciseSetContext.Provider value={{ index, form }}>
      <SetFormsContext.Provider value={{ count, setCount, fieldArray }}>
        <GetSetFields />
      </SetFormsContext.Provider>
    </RoutineExerciseSetContext.Provider>
  );
}

export { RoutineExerciseSet, RoutineExerciseSetContext, SetFormsContext };
export type { RoutineExerciseSetProps, SetFormProps };
