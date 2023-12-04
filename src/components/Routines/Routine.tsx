import { RoutineFragment$key } from "@/queries/__generated__/RoutineFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

const RoutineFragment = graphql`
  fragment RoutineFragment on Routine {
    id
    name
    routineExercises {
      edges {
        node {
          exercises {
            name
          }
        }
      }
    }
  }
`;

type RoutineProps = {
  queryRef: RoutineFragment$key;
};

function Routine({ queryRef }: RoutineProps) {
  const data = useFragment(RoutineFragment, queryRef);

  const exercises = data.routineExercises.edges
    ?.map((rE) => {
      if (rE?.node) {
        return capitalizeFirstLetter(rE.node.exercises.name);
      }
    })
    .join(" ");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{capitalizeFirstLetter(data.name)}</CardTitle>
        <CardDescription>{exercises}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch md:block">
        <Button size={"lg"} asChild>
          <Link href={`/dashboard/routines/start/${data.id}`}>
            Start Routine
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { Routine };
