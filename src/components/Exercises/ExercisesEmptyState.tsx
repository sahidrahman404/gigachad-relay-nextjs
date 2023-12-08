import { FolderPlus } from "lucide-react";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import { ReactNode } from "react";

type ExercisesEmptyStateProps = {
  SlotExercisesFilterSort: ReactNode;
};

function ExercisesEmptyState({
  SlotExercisesFilterSort,
}: ExercisesEmptyStateProps) {
  return (
    <div>
      {SlotExercisesFilterSort}
      <div className="flex flex-col items-center gap-y-4 mt-10">
        <FolderPlus size={48} strokeWidth={1} />
        <div className="text-center">
          <h2 className="font-semibold">Exercises not found</h2>
          <p className="text-muted-foreground">
            Get started by adding a new exercise
          </p>
        </div>
        <LinkButton href="/dashboard/exercises/add">Add Exercise</LinkButton>
      </div>
    </div>
  );
}

export { ExercisesEmptyState };
