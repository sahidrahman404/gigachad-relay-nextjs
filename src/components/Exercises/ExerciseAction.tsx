import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { DeleteExerciseDialog } from "./DeleteExerciseDialog";
import { WorkoutMachineContext } from "../Layout";

type ExerciseActionProps = {
  exerciseID: string;
};

function ExerciseAction({ exerciseID }: ExerciseActionProps) {
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Action</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href={`/dashboard/exercises/${exerciseID}`}>View</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem asChild disabled={isWorkingOut}>
            <Link href={`/dashboard/exercises/edit/${exerciseID}`}>Edit</Link>
          </MenubarItem>
          <MenubarSeparator />
          <DeleteExerciseDialog
            id={exerciseID}
            Trigger={
              <MenubarItem
                className="text-destructive focus:text-destructive"
                disabled={isWorkingOut}
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
  );
}

export { ExerciseAction };
