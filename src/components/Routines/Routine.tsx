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
import { WorkoutMachineContext } from "../Layout";
import { Button } from "../ReactAriaUI/Button";
import { useRouter } from "next/router";

import { DeleteRoutineDialog } from "./DeleteRoutineDialog";
import { MyItem, MyMenuButton } from "../ReactAriaUI/MyMenuButton";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const RoutineFragment = graphql`
  fragment RoutineFragment on Routine {
    id
    name
    routineExercises(orderBy: { direction: ASC, field: Order }) {
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
  const routineID = WorkoutMachineContext.useSelector(
    (state) => state.context.routineID,
  );
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const exercises = data.routineExercises.edges
    ?.map((rE) => {
      if (rE?.node) {
        return rE.node.exercises.name;
      }
    })
    .join(", ");

  return (
    <>
      <Card>
        <CardHeader className="flex-row">
          <div className="space-y-1.5 mr-auto">
            <CardTitle>{data.name}</CardTitle>
            <CardDescription>{exercises}</CardDescription>
          </div>
          <MyMenuButton
            label={<AlignJustify strokeWidth={1} />}
            onAction={(key) => {
              if (key === "delete") {
                setOpen(true);
              }
            }}
          >
            <MyItem id="edit" href={`/dashboard/routines/edit/${data.id}`}>
              Edit
            </MyItem>
            <MyItem id="delete" destructive>
              Delete
            </MyItem>
          </MyMenuButton>
        </CardHeader>
        <CardFooter className="flex flex-col items-stretch md:block">
          <Button
            onPress={() => {
              router.push(`/dashboard/routines/start/${data.id}`);
            }}
            isDisabled={isWorkingOut && routineID !== data.id}
          >
            {isWorkingOut && routineID === data.id
              ? "Continue Routine"
              : "Start Routine"}
          </Button>
        </CardFooter>
      </Card>

      <DeleteRoutineDialog id={data.id} isOpen={open} onOpenChange={setOpen} />
    </>
  );
}

export { Routine };
