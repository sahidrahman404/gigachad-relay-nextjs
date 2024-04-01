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
import { capitalizeFirstLetter } from "@/lib/utils";
import { WorkoutMachineContext } from "../Layout";
import { Button } from "../ReactAriaUI/Button";
import { useRouter } from "next/router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { DeleteRoutineDialog } from "./DeleteRoutineDialog";

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
  const routineID = WorkoutMachineContext.useSelector(
    (state) => state.context.routineID,
  );
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );

  const router = useRouter();

  const exercises = data.routineExercises.edges
    ?.map((rE) => {
      if (rE?.node) {
        return capitalizeFirstLetter(rE.node.exercises.name);
      }
    })
    .join(" ");

  return (
    <Card>
      <CardHeader className="flex-row items-start">
        <div className="space-y-1.5">
          <CardTitle>{capitalizeFirstLetter(data.name)}</CardTitle>
          <CardDescription>{exercises}</CardDescription>
        </div>
        <Menubar className="ml-auto">
          <MenubarMenu>
            <MenubarTrigger>Action</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={`/dashboard/routines/edit/${data.id}`}>Edit</Link>
              </MenubarItem>
              <MenubarSeparator />
              <DeleteRoutineDialog
                id={data.id}
                Trigger={
                  <MenubarItem
                    className="text-destructive focus:text-destructive"
                    onSelect={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Delete
                  </MenubarItem>
                }
              />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch md:block">
        <Button
          onPress={() => {
            router.push(`/dashboard/routines/start/${data.id}`);
          }}
          isDisabled={isWorkingOut && routineID !== data.id}
        >
          Start Routine
        </Button>
      </CardFooter>
    </Card>
  );
}

export { Routine };
