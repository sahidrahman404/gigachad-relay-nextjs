import { intervalToDuration } from "date-fns";
import { ProgressBar } from "react-aria-components";
import { WorkoutMachineContext } from "../Layout";
import { Label } from "../ui/label";
import { useGetTimerLabel } from "../Hooks/useGetTimerLabel";

function TimerProgress() {
  const timerDuration = WorkoutMachineContext.useSelector(
    (state) => state.context.timer.duration,
  );
  const timerElapsed = WorkoutMachineContext.useSelector(
    (state) => state.context.timer.elapsed,
  );
  const duration = intervalToDuration({ start: 0, end: timerDuration * 1000 });
  const elapsed = intervalToDuration({ start: 0, end: timerElapsed * 1000 });
  const { label } = useGetTimerLabel();
  return (
    <div>
      <p className="text-center">{`${elapsed.minutes ? `${elapsed.minutes}m` : ""} ${elapsed.seconds ? `${elapsed.seconds}s` : ""} / ${duration.minutes ? `${duration.minutes}m` : ""} ${duration.seconds ? `${duration.seconds}s` : ""}`}</p>
      <ProgressBar
        minValue={0}
        maxValue={timerDuration}
        value={timerElapsed}
        aria-label={label}
        aria-labelledby={label}
      >
        {({ percentage, valueText }) => (
          <div className="space-y-0.5">
            <div className="flex justify-between">
              <Label>{label}</Label>
              <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {valueText}
              </span>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{
                  transform: `translateX(-${100 - (percentage || 0)}%)`,
                }}
              />
            </div>
          </div>
        )}
      </ProgressBar>
    </div>
  );
}

export { TimerProgress };
