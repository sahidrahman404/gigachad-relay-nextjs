import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
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

const ExerciseFragment = graphql`
  fragment ExerciseFragment on Exercise {
    id
    name
    image {
      ...ImageFragment
    }
    howTo
    musclesGroups {
      edges {
        node {
          id
          name
        }
      }
    }
    exerciseTypes {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

type ExerciseProps = ComponentProps<"div"> & {
  queryRef: ExerciseFragment$key;
};

function Exercise({ queryRef, className }: ExerciseProps) {
  const data = useFragment(ExerciseFragment, queryRef);
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-end gap-x-5">
        <Avatar className="w-20 h-20">
          {data.image && <Image image={data.image} />}
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg">{data.name}</CardTitle>
          <CardDescription>
            {data.exerciseTypes?.edges?.map((et, i) => {
              if (i === 0 && et?.node) {
                return <span key={et.node.id}>{et.node.name}</span>;
              }
            })}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <span className="text-sm text-muted-foreground">Muscles Group</span>
        <p className="bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 max-w-min px-3 py-1 rounded-md text-md font-semibold">
          {data.musclesGroups?.edges?.map((mg, i) => {
            if (i === 0 && mg?.node) {
              return <span key={mg.node.id}>{mg.node.name}</span>;
            }
          })}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <ExerciseAction exerciseID={data.id} />
      </CardFooter>
    </Card>
  );
}

export { Exercise };
