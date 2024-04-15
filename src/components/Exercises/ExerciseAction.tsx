import { WorkoutMachineContext } from "../Layout";
import { DeleteExerciseDialog } from "./DeleteExerciseDialog";
import { useState } from "react";
import { Menu, MenuItem } from "../ReactAriaUI/Menu";
import { MenuTrigger } from "react-aria-components";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "../ReactAriaUI/Button";

type ExerciseActionProps = {
  exerciseID: string;
};

function ExerciseAction({ exerciseID }: ExerciseActionProps) {
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuTrigger>
        <Button variant="outline" size="icon">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
        <Menu
          disabledKeys={isWorkingOut ? ["delete", "edit"] : []}
          onAction={(key) => {
            if (key === "delete") {
              setOpen(true);
            }
          }}
        >
          <MenuItem id="view" href={`/dashboard/exercises/${exerciseID}`}>
            View
          </MenuItem>
          <MenuItem id="edit" href={`/dashboard/exercises/edit/${exerciseID}`}>
            Edit
          </MenuItem>
          <MenuItem id="delete">
            <span className="text-destructive">Delete</span>
            <Trash2 className="w-4 h-4 text-destructive" />
          </MenuItem>
        </Menu>
      </MenuTrigger>
      <DeleteExerciseDialog
        id={exerciseID}
        isOpen={open}
        onOpenChange={setOpen}
      />
    </>
  );
}

export { ExerciseAction };
