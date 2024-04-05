import { createContext } from "react";
import { GetRoutineExerciseSetsField } from "./GetRoutineExerciseSetsField";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { RoutineExerciseSetsFieldFragment$key } from "@/queries/__generated__/RoutineExerciseSetsFieldFragment.graphql";

const RoutineExerciseSetsFieldFragment = graphql`
  fragment RoutineExerciseSetsFieldFragment on User {
    unit
  }
`;

type RoutineExerciseSetsFieldContext = {
  index: number;
  unit: string;
};

const RoutineExerciseSetsFieldContext =
  createContext<RoutineExerciseSetsFieldContext>(null!);

type RoutineExerciseSetsFieldProps = {
  index: number;
  queryRef: RoutineExerciseSetsFieldFragment$key;
};

function RoutineExerciseSetsField({
  index,
  queryRef,
}: RoutineExerciseSetsFieldProps) {
  const data = useFragment(RoutineExerciseSetsFieldFragment, queryRef);
  return (
    <RoutineExerciseSetsFieldContext.Provider
      value={{ index: index, unit: data.unit }}
    >
      <GetRoutineExerciseSetsField />
    </RoutineExerciseSetsFieldContext.Provider>
  );
}

export { RoutineExerciseSetsField, RoutineExerciseSetsFieldContext };
export type { RoutineExerciseSetsFieldProps };
