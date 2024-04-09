import { LogFragment$key } from "@/queries/__generated__/LogFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Label } from "../ui/label";
import { useMemo } from "react";
import { convertKgToPound, getNumberFieldUnitFormatOptions } from "@/lib/utils";
import { LogEmptyNote } from "./LogEmptyNote";
import { LogsWorkout } from "./LogsWorkout";

const LogFragment = graphql`
  fragment LogFragment on Workout {
    id
    name
    volume
    duration
    sets
    createdAt
    image {
      ...ImageFragment
    }
    description
    users {
      unit
    }
    ...LogEmptyNoteFragment
    ...LogsWorkoutFragment
  }
`;

function Log({ queryRef }: { queryRef: LogFragment$key }) {
  const data = useFragment(LogFragment, queryRef);

  const volume = useMemo(() => {
    const numberFormatOptions = getNumberFieldUnitFormatOptions(
      data.users.unit,
      "",
    );
    return new Intl.NumberFormat("en-US", numberFormatOptions).format(
      data.users.unit !== "METRIC"
        ? convertKgToPound(data.volume)
        : data.volume,
    );
  }, [data.users.unit, data.volume]);

  return (
    <div className="space-y-3">
      <div className="flex flex-col space-y-1.5">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p className="text-xs text-muted-foreground">
          {new Date(data.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="flex gap-5">
        <div>
          <Label className="text-muted-foreground">Duration</Label>
          <p>{data.duration}</p>
        </div>

        <div>
          <Label className="text-muted-foreground">Volume</Label>
          <p>{volume}</p>
        </div>

        <div>
          <Label className="text-muted-foreground">Sets</Label>
          <p>{data.sets}</p>
        </div>
      </div>
      <div>
        <h3 className="text-l font-bold">Note</h3>
        <LogEmptyNote queryRef={data} />
        <div
          dangerouslySetInnerHTML={{ __html: data.description ?? "" }}
          className="prose mx-auto"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-l font-bold">Workout Logs</h3>
        <LogsWorkout queryRef={data} />
      </div>
    </div>
  );
}

export { Log };
