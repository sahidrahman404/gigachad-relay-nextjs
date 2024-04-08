import { Label } from "@radix-ui/react-label";
import { WorkoutMachineContext } from "../Layout";
import { Button } from "@/components/ReactAriaUI/Button";
import { PauseCircle, PlayCircle } from "lucide-react";
import { getNumberFieldUnitFormatOptions } from "@/lib/utils";

function WorkoutLogsStats() {
  return (
    <div className="col-span-full grid grid-cols-[50fr_25fr_25fr] md:grid-cols-3">
      <div className="flex flex-col justify-between">
        <Label className="text-muted-foreground">Duration</Label>
        <WorkoutStopwatch />
      </div>
      <div className="flex flex-col justify-between">
        <Label className="text-muted-foreground">Volume</Label>
        <GetTotalVolume />
      </div>
      <div className="flex flex-col justify-between">
        <Label className="text-muted-foreground">Sets</Label>
        <GetTotalSets />
      </div>
    </div>
  );
}

function GetTotalVolume() {
  const totalVolume = WorkoutMachineContext.useSelector(
    (state) => state.context.volume,
  );

  const unit = WorkoutMachineContext.useSelector((state) => state.context.unit);

  return (
    <p>
      {new Intl.NumberFormat(
        "en-US",
        getNumberFieldUnitFormatOptions(unit, ""),
      ).format(totalVolume)}
    </p>
  );
}

function GetTotalSets() {
  const sets = WorkoutMachineContext.useSelector((state) => state.context.sets);

  return <p>{sets}</p>;
}

function WorkoutStopwatch() {
  const isStopwatchInStoppedState = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: { stopwatch: "stopwatchStopped" } }),
  );
  const workoutActor = WorkoutMachineContext.useActorRef();

  return (
    <div className="flex items-end">
      <GetWorkoutDuration />
      <Button
        variant="ghost"
        onPress={() => {
          isStopwatchInStoppedState
            ? workoutActor.send({ type: "STOPWATCH_START" })
            : workoutActor.send({ type: "STOPWATCH_STOP" });
        }}
      >
        {isStopwatchInStoppedState ? <PlayCircle /> : <PauseCircle />}
      </Button>
    </div>
  );
}

function GetWorkoutDuration() {
  const duration = WorkoutMachineContext.useSelector(
    (state) => state.context.duration,
  );

  return <p>{duration}</p>;
}

export { WorkoutLogsStats };
