import { RoutineFragment$key } from "@/queries/__generated__/RoutineFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { capitalizeFirstLetter } from "@/lib/utils";
import { WorkoutMachineContext } from "../Layout";
import { Button } from "../ReactAriaUI/Button";
import { useRouter } from "next/router";

const RoutineFragment = graphql`
  fragment RoutineFragment on Routine {
    id
    name
    routineExercises {
      edges {
        node {
          exercises {
            name
          }
        }
      }
    }
  }
`;

type RoutineProps = {
  queryRef: RoutineFragment$key;
};

function Routine({ queryRef }: RoutineProps) {
  const data = useFragment(RoutineFragment, queryRef);
  const routineID = WorkoutMachineContext.useSelector(
    (state) => state.context.routineID,
  );
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );

  const workoutActor = WorkoutMachineContext.useActorRef();
  const router = useRouter();

  const exercises = data.routineExercises.edges
    ?.map((rE) => {
      if (rE?.node) {
        return capitalizeFirstLetter(rE.node.exercises.name);
      }
    })
    .join(" ");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{capitalizeFirstLetter(data.name)}</CardTitle>
        <CardDescription>{exercises}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch md:block">
        <Button
          onPress={() => {
            workoutActor.send({ type: "WORKOUT_START", value: data.id });
            workoutActor.send({ type: "STOPWATCH_START" });
            workoutActor.send({ type: "LOAD_WORKOUT_LOGS" });
            router.push(`/dashboard/routines/start/${data.id}`);
          }}
          isDisabled={isWorkingOut && routineID !== data.id}
        >
          Start Routine
        </Button>
      </CardFooter>
    </Card>
  );
}

export { Routine };
