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

type ExerciseActionProps = {
  exerciseID: string;
};

function ExerciseAction({ exerciseID }: ExerciseActionProps) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Action</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/dashboard/exercises/add">View</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Edit</MenubarItem>
          <MenubarSeparator />
          <DeleteExerciseDialog
            id={exerciseID}
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
  );
}

export { ExerciseAction };
