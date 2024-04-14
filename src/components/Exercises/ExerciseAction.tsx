import { WorkoutMachineContext } from "../Layout";
import { MyItem, MyMenuButton } from "../ReactAriaUI/MyMenuButton";
import { AlignJustify } from "lucide-react";
import { DeleteExerciseDialog } from "./DeleteExerciseDialog";
import { useState } from "react";

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
      <MyMenuButton
        label={<AlignJustify strokeWidth={1} />}
        disabledKeys={isWorkingOut ? ["delete", "edit"] : []}
        onAction={(key) => {
          if (key === "delete") {
            setOpen(true);
          }
        }}
      >
        <MyItem id="view" href={`/dashboard/exercises/${exerciseID}`}>
          View
        </MyItem>
        <MyItem id="edit" href={`/dashboard/exercises/edit/${exerciseID}`}>
          Edit
        </MyItem>
        <MyItem id="delete" destructive>
          Delete
        </MyItem>
      </MyMenuButton>
      <DeleteExerciseDialog
        id={exerciseID}
        isOpen={open}
        onOpenChange={setOpen}
      />
    </>
  );
}

export { ExerciseAction };
