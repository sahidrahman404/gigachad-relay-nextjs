import { LogsWorkoutFragment$key } from "@/queries/__generated__/LogsWorkoutFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ExerciseHistoryCard } from "../Exercises/ExerciseHistoryCard";

const LogsWorkoutFragment = graphql`
  fragment LogsWorkoutFragment on Workout {
    id
    workoutLogs(orderBy: { direction: ASC, field: Order }) {
      edges {
        node {
          id
          ...ExerciseHistoryCardFragment
        }
      }
    }
  }
`;

function LogsWorkout({ queryRef }: { queryRef: LogsWorkoutFragment$key }) {
  const data = useFragment(LogsWorkoutFragment, queryRef);
  return (
    <div className="space-y-4">
      {data.workoutLogs.edges?.map((workoutLog) => {
        if (workoutLog?.node) {
          return (
            <ExerciseHistoryCard
              forLogComponent={true}
              queryRef={workoutLog.node}
              key={workoutLog.node.id}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export { LogsWorkout };
