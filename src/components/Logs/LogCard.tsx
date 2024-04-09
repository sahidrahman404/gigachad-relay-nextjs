import { LogCardFragment$key } from "@/queries/__generated__/LogCardFragment.graphql";
import { useMemo } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { convertKgToPound, getNumberFieldUnitFormatOptions } from "@/lib/utils";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";
import { LinkButton } from "../ReactAriaUI/LinkButton";

const LogCardFragment = graphql`
  fragment LogCardFragment on Workout {
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
    workoutLogs(orderBy: { direction: ASC, field: Order }) {
      edges {
        node {
          id
          sets {
            reps
            weight
            duration
            length
          }
          exercises {
            name
            image {
              ...ImageFragment
            }
          }
        }
      }
    }
  }
`;

function LogCard({ queryRef }: { queryRef: LogCardFragment$key }) {
  const data = useFragment(LogCardFragment, queryRef);

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
    <Card>
      <CardHeader className="space-y-3">
        <CardTitle className="flex flex-col space-y-1.5">
          <p className="text-l font-bold">{data.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(data.createdAt).toLocaleString()}
          </p>
        </CardTitle>
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
      </CardHeader>
      <CardContent className="space-y-3">
        <p>Workout</p>
        {data.workoutLogs.edges?.map((workoutLog) => {
          if (workoutLog?.node) {
            return (
              <div
                key={workoutLog.node.id}
                className="flex items-center space-x-4"
              >
                {workoutLog.node.exercises.image && (
                  <Avatar className="w-10 h-10">
                    <Image image={workoutLog.node.exercises.image} />
                  </Avatar>
                )}
                <p className="text-m text-primary">{`${workoutLog.node.sets.length} ${workoutLog.node.exercises.name}`}</p>
              </div>
            );
          }
          return null;
        })}
      </CardContent>
      <CardFooter className="flex">
        <LinkButton
          className="ml-auto"
          variant="outline"
          href={`/dashboard/logs/${data.id}`}
        >
          View More
        </LinkButton>
      </CardFooter>
    </Card>
  );
}

export { LogCard };
