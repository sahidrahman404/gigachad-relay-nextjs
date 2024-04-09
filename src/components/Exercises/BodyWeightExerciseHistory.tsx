import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { NumberField } from "../ReactAriaUI/NumberField";
import { useKeys } from "../Hooks/useKeys";
import { SetsExerciseHistory } from "./SetsExerciseHistory";
import { BodyWeightExerciseHistoryFragment$key } from "@/queries/__generated__/BodyWeightExerciseHistoryFragment.graphql";

const BodyWeightExerciseHistoryFragment = graphql`
  fragment BodyWeightExerciseHistoryFragment on WorkoutLog {
    id
    sets {
      reps
    }
    createdAt
    workouts {
      name
    }
  }
`;

type BodyWeightExerciseHistoryProps = {
  queryRef: BodyWeightExerciseHistoryFragment$key;
};

function BodyWeightExerciseHistory({
  queryRef,
}: BodyWeightExerciseHistoryProps) {
  const data = useFragment(BodyWeightExerciseHistoryFragment, queryRef);
  const keys = useKeys({ length: data.sets.length });

  return (
    <div className="space-y-2">
      {data.sets.map((set, i) => {
        return (
          <div key={keys[i]} className="grid grid-cols-2 gap-x-2">
            <SetsExerciseHistory index={i + 1} />
            <NumberField
              label="Reps"
              isDisabled={true}
              stepper={false}
              value={set.reps ?? undefined}
              className="col-span-1"
            />
          </div>
        );
      })}
    </div>
  );
}

export { BodyWeightExerciseHistory };
