import { WeightExerciseHistoryFragment$key } from "@/queries/__generated__/WeightExerciseHistoryFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { NumberField } from "../ReactAriaUI/NumberField";
import { useKeys } from "../Hooks/useKeys";
import { SetsExerciseHistory } from "./SetsExerciseHistory";
import { convertKgToPound, getNumberFieldUnitFormatOptions } from "@/lib/utils";
import { useMemo } from "react";

const WeightExerciseHistoryFragment = graphql`
  fragment WeightExerciseHistoryFragment on WorkoutLog {
    id
    sets {
      weight
      reps
    }
    createdAt
    workouts {
      name
    }
    users {
      unit
    }
  }
`;

type WeightExerciseHistoryProps = {
  queryRef: WeightExerciseHistoryFragment$key;
};

function WeightExerciseHistory({ queryRef }: WeightExerciseHistoryProps) {
  const data = useFragment(WeightExerciseHistoryFragment, queryRef);
  const keys = useKeys({ length: data.sets.length });
  const unitFormat = useMemo(() => {
    return getNumberFieldUnitFormatOptions(data.users.unit, "");
  }, [data.users.unit]);

  return (
    <div className="space-y-2">
      {data.sets.map((set, i) => {
        return (
          <div key={keys[i]} className="grid grid-cols-3 gap-x-2">
            <SetsExerciseHistory index={i + 1} />
            <NumberField
              label="Weight"
              isDisabled={true}
              stepper={false}
              value={
                data.users.unit !== "METRIC"
                  ? convertKgToPound(set.weight ?? 0)
                  : undefined
              }
              className="col-span-1"
              formatOptions={unitFormat}
            />
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

export { WeightExerciseHistory };
