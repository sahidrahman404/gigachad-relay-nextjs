import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { useKeys } from "../Hooks/useKeys";
import { SetsExerciseHistory } from "./SetsExerciseHistory";
import { TimeField } from "../ReactAriaUI/TimeField";
import { parseTime } from "@internationalized/date";
import { DurationExerciseHistoryFragment$key } from "@/queries/__generated__/DurationExerciseHistoryFragment.graphql";
import { Label } from "../ui/label";

const DurationExerciseHistoryFragment = graphql`
  fragment DurationExerciseHistoryFragment on WorkoutLog {
    id
    sets {
      duration
    }
    createdAt
    workouts {
      name
    }
  }
`;

type DurationExerciseHistoryProps = {
  queryRef: DurationExerciseHistoryFragment$key;
};

function DurationExerciseHistory({ queryRef }: DurationExerciseHistoryProps) {
  const data = useFragment(DurationExerciseHistoryFragment, queryRef);
  const keys = useKeys({ length: data.sets.length });

  return (
    <div className="space-y-2">
      {data.sets.map((set, i) => {
        return (
          <div key={keys[i]} className="grid grid-cols-2 gap-x-2">
            <SetsExerciseHistory index={i + 1} />

            <div className="space-y-2 col-span-1">
              <Label>Duration</Label>
              <TimeField
                isDisabled={true}
                value={set.duration ? parseTime(set.duration) : undefined}
                className="col-span-1"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { DurationExerciseHistory };
