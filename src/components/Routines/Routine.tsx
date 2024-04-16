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
import { useState } from "react";
import { MenuResponsive, MenuItem } from "../ReactAriaUI/Menu";
import { MenuTrigger } from "react-aria-components";
import { MoreHorizontal, Trash2 } from "lucide-react";
import NonSSRWrapper from "../common/NonSSRWrapper";

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

  const [openMenu, setOpenMenu] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

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
          <MenuTrigger isOpen={openMenu} onOpenChange={setOpenMenu}>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>

            <NonSSRWrapper>
              <MenuResponsive
                open={openMenu}
                setOpen={setOpenMenu}
                onAction={(key) => {
                  if (key === "delete") {
                    setOpenAlertDialog(true);
                  }
                }}
                disabledKeys={isWorkingOut ? ["edit", "delete"] : []}
              >
                <MenuItem
                  id="edit"
                  href={`/dashboard/routines/edit/${data.id}`}
                >
                  Edit
                </MenuItem>
                <MenuItem id="delete">
                  <span className="text-destructive">Delete</span>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </MenuItem>
              </MenuResponsive>
            </NonSSRWrapper>
          </MenuTrigger>
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

      <DeleteRoutineDialog
        id={data.id}
        isOpen={openAlertDialog}
        onOpenChange={setOpenAlertDialog}
      />
    </>
  );
}

export { Routine };
