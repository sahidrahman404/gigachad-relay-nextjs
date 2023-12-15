import { WorkoutMachineContext } from "../Layout";

function useGetTimerLabel() {
  const type = WorkoutMachineContext.useSelector(
    (state) => state.context.timer.type,
  );
  const label = type === "REST" ? "Rest Timer" : "Exercise Timer";
  return { label, type };
}

export { useGetTimerLabel };
