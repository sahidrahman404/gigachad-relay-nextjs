import { FolderPlus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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
        <Button asChild>
          <Link href="/dashboard/routines/add">Add Routines</Link>
        </Button>
      </div>
    </div>
  );
}

export { RoutinesEmptyState };
