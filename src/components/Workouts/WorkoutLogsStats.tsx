import { Label } from "@radix-ui/react-label";
import type { AddWorkoutFormSchema } from "./AddWorkoutForm";
import { updateStartWorkoutData } from "./AddWorkoutForm";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";
import { useStateMachine } from "little-state-machine";

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
  const initialVolume = 0;
  const form = useFormContext<AddWorkoutFormSchema>();
  const totalVolume = form.watch().workoutLogs.reduce((acc, currVal) => {
    return (
      acc +
      currVal.sets.reduce((acc, setCurrVal) => {
        if (setCurrVal.kg && setCurrVal.reps && setCurrVal.selected) {
          return acc + setCurrVal.kg * setCurrVal.reps;
        }
        return acc + 0;
      }, initialVolume)
    );
  }, initialVolume);

  useEffect(() => {
    form.setValue("volume", totalVolume);
  }, [totalVolume]);

  return <p>{totalVolume} kg</p>;
}

function GetTotalSets() {
  const initialSets = 0;
  const form = useFormContext<AddWorkoutFormSchema>();
  const sets = form.watch().workoutLogs.reduce((acc, wLCurrVal) => {
    return (
      acc +
      wLCurrVal.sets.reduce((acc, setCurrVal) => {
        if (setCurrVal.selected) {
          return acc + 1;
        }
        return acc + 0;
      }, initialSets)
    );
  }, initialSets);

  useEffect(() => {
    form.setValue("sets", sets);
  }, [sets]);

  return <p>{sets}</p>;
}

function GetWorkoutDuration() {
  const { state } = useStateMachine({ updateStartWorkoutData });
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = state?.startWorkoutData?.startTime ?? 0;
    const stop = state?.startWorkoutData?.stopTime ?? 0;
    const seconds = Math.round((stop - start) / 1000);
    console.log(seconds);
    setSeconds(seconds);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds((val) => val + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  return (
    <p>
      {duration.minutes}m {duration.seconds}s
    </p>
  );
}

export { WorkoutLogsStats };
