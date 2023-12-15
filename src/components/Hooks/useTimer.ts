import { WorkoutMachineContext } from "../Layout";

function useTimer() {
  const isTimerRunning = WorkoutMachineContext.useSelector((state) =>
    state.matches({
      workingOut: {
        form: {
          editingFirstStepForm: {
            timer: "timerRunning",
          },
        },
      },
    }),
  );

  return { isTimerRunning };
}

export { useTimer };
