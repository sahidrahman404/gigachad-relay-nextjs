import "little-state-machine";
import { AddWorkoutFormSchema } from "./src/components/Workouts/AddWorkoutForm";

declare module "little-state-machine" {
  interface GlobalState {
    startWorkoutData: AddWorkoutFormSchema;
  }
}
