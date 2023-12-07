import { FolderPlus } from "lucide-react";
import { LinkButton } from "../ReactAriaUI/LinkButton";

function RoutinesEmptyState() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4 mt-10">
        <FolderPlus size={48} strokeWidth={1} />
        <div className="text-center">
          <h2 className="font-semibold">Routines not found</h2>
          <p className="text-muted-foreground">
            Get started by adding a new routine
          </p>
        </div>
        <LinkButton href="/dashboard/routines/add">Add Routines</LinkButton>
      </div>
    </div>
  );
}

export { RoutinesEmptyState };
