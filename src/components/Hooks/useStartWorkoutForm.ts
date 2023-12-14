import { useStartWorkoutFormFragment$key } from "@/queries/__generated__/useStartWorkoutFormFragment.graphql";
import { useEffect } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { WorkoutMachineContext } from "../Layout";

const useStartWorkoutFormFragment = graphql`
  fragment useStartWorkoutFormFragment on Routine {
    id
    routineExercises {
      edges {
        node {
          sets {
            reps
            kg
            duration
            km
          }
          restTimer
          exercises {
            id
            name
            exerciseTypes {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

type UseStartWorkoutFormProps = {
  queryRef: useStartWorkoutFormFragment$key;
};

function useStartWorkoutForm({ queryRef }: UseStartWorkoutFormProps) {
  const data = useFragment(useStartWorkoutFormFragment, queryRef);
  const workoutActor = WorkoutMachineContext.useActorRef();
  const isInEmptyFieldsState = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: { form: "emptyFields" } }),
  );
  const isInEditingSecondStepForm = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: { form: "editingSecondStepForm" } }),
  );
  const isInWorkoutStoppedState = WorkoutMachineContext.useSelector((state) =>
    state.matches("workoutStopped"),
  );

  useEffect(() => {
    if (isInWorkoutStoppedState) {
      workoutActor.send({ type: "WORKOUT_START", value: data.id });
      workoutActor.send({ type: "STOPWATCH_START" });
    }
  }, [isInWorkoutStoppedState]);

  useEffect(() => {
    if (isInEmptyFieldsState) {
      workoutActor.send({ type: "LOAD_WORKOUT_LOGS", value: data });
    }
  }, [isInEmptyFieldsState]);

  useEffect(() => {
    if (isInEditingSecondStepForm) {
      workoutActor.send({ type: "GO_TO_EDIT_FIRST_STEP_FORM" });
    }
  }, []);
}

export { useStartWorkoutForm };
