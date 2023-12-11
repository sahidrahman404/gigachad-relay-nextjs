import { Label } from "@radix-ui/react-label";
import { WorkoutMachineContext } from "../Layout";

function WorkoutLogsStats() {
  return (
    <div className="col-span-full grid grid-cols-3">
      <div>
        <Label className="text-muted-foreground">Duration</Label>
        <GetWorkoutDuration />
      </div>
      <div>
        <Label className="text-muted-foreground">Volume</Label>
        <GetTotalVolume />
      </div>
      <div>
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

  return <p>{totalVolume} kg</p>;
}

function GetTotalSets() {
  const sets = WorkoutMachineContext.useSelector((state) => state.context.sets);

  return <p>{sets}</p>;
}

function GetWorkoutDuration() {
  const duration = WorkoutMachineContext.useSelector(
    (state) => state.context.duration,
  );

  return <p>{duration}</p>;
}

export { WorkoutLogsStats };
