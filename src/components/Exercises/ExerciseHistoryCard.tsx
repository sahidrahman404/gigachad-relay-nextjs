import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { WeightExerciseHistory } from "./WeightExerciseHistory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "../Image/Image";
import { Avatar } from "../ui/avatar";
import { ExerciseHistoryCardFragment$key } from "@/queries/__generated__/ExerciseHistoryCardFragment.graphql";
import { BodyWeightExerciseHistory } from "./BodyWeightExerciseHistory";
import { DurationExerciseHistory } from "./DurationExerciseHistory";

const ExerciseHistoryCardFragment = graphql`
  fragment ExerciseHistoryCardFragment on WorkoutLog {
    ...WeightExerciseHistoryFragment
    ...DurationExerciseHistoryFragment
    ...BodyWeightExerciseHistoryFragment
    workouts {
      name
      createdAt
    }
    exercises {
      name
      image {
        ...ImageFragment
      }
      exerciseTypes {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

type ExerciseHistoryCardProps = {
  queryRef: ExerciseHistoryCardFragment$key;
};

function ExerciseHistoryCard({ queryRef }: ExerciseHistoryCardProps) {
  const data = useFragment(ExerciseHistoryCardFragment, queryRef);
  const exerciseType = data.exercises.exerciseTypes.edges
    ? data.exercises.exerciseTypes.edges[0]
      ? data.exercises.exerciseTypes.edges[0].node?.name ?? ""
      : ""
    : "";
  return (
    <Card>
      <CardHeader className="space-y-3">
        <CardTitle className="flex flex-col space-y-1.5">
          <p className="text-l font-bold">{data.workouts.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(data.workouts.createdAt).toLocaleString()}
          </p>
        </CardTitle>
        <div className="flex items-center space-x-2">
          {data.exercises.image && (
            <Avatar className="w-10 h-10">
              <Image image={data.exercises.image} />
            </Avatar>
          )}
          <p className="text-m text-primary">{data.exercises.name}</p>
        </div>
      </CardHeader>
      <CardContent>
        {exerciseType === "Bodyweight" && (
          <BodyWeightExerciseHistory queryRef={data} />
        )}

        {exerciseType === "Weight" && <WeightExerciseHistory queryRef={data} />}

        {exerciseType === "Weighted Bodyweight" && (
          <WeightExerciseHistory queryRef={data} />
        )}

        {exerciseType === "Duration" && (
          <DurationExerciseHistory queryRef={data} />
        )}
      </CardContent>
    </Card>
  );
}

export { ExerciseHistoryCard };
