import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ExerciseAction } from "./ExerciseAction";
import { ExerciseCardFragment$key } from "@/queries/__generated__/ExerciseCardFragment.graphql";
import { MusclesGroupBadge } from "./MusclesGroupBadge";
import { ExerciseTypeBadge } from "./ExerciseTypeBadge";

const ExerciseCardFragment = graphql`
  fragment ExerciseCardFragment on Exercise {
    id
    name
    image {
      ...ImageFragment
    }
    musclesGroups {
      ...MusclesGroupBadgeFragment
    }
    exerciseTypes {
      ...ExerciseTypeBadgeFragment
    }
  }
`;

type ExerciseProps = ComponentProps<"div"> & {
  queryRef: ExerciseCardFragment$key;
};

function ExerciseCard({ queryRef, className }: ExerciseProps) {
  const data = useFragment(ExerciseCardFragment, queryRef);
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-end gap-x-5">
        <Avatar className="w-20 h-20">
          {data.image && <Image image={data.image} />}
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg">{data.name}</CardTitle>
          <CardDescription>
            <ExerciseTypeBadge
              queryRef={data.exerciseTypes}
              configVariant={{ variant: "secondary" }}
            />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Muscles Group</p>
          <MusclesGroupBadge
            queryRef={data.musclesGroups}
            configVariant={{ variant: "default" }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <ExerciseAction exerciseID={data.id} />
      </CardFooter>
    </Card>
  );
}

export { ExerciseCard };
