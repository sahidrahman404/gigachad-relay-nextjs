import "little-state-machine";
import { StartWorkoutFormSchema } from "./src/components/Workouts/StartWorkoutForm";
import { FinishWorkoutFormSchema } from "./src/components/Workouts/FinishWorkoutForm";

declare module "little-state-machine" {
  interface GlobalState {
    workout: StartWorkoutFormSchema & FinishWorkoutFormSchema;
  }
}
