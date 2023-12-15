import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { useTimer } from "../Hooks/useTimer";
import { TimerDialog } from "./TimerDialog";
import { TimerProgress } from "./TimerProgress";

type RestTimerProps = ComponentProps<"div">;

function Timer({ className, ...props }: RestTimerProps) {
  const { isTimerRunning } = useTimer();

  if (!isTimerRunning) {
    return null;
  }

  return (
    <div className={cn("col-start-2 col-span-2", className)} {...props}>
      <TimerProgress />
      <TimerDialog />
    </div>
  );
}

export { Timer };
