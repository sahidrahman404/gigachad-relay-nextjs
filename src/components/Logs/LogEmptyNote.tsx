import { NotebookPen } from "lucide-react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { LogEmptyNoteFragment$key } from "@/queries/__generated__/LogEmptyNoteFragment.graphql";

const LogEmptyNoteFragment = graphql`
  fragment LogEmptyNoteFragment on Workout {
    description
  }
`;

function LogEmptyNote({ queryRef }: { queryRef: LogEmptyNoteFragment$key }) {
  const data = useFragment(LogEmptyNoteFragment, queryRef);
  if (data.description) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4 mt-10">
        <NotebookPen size={48} strokeWidth={1} />
        <div className="text-center">
          <h2 className="font-semibold">
            You don&apos;t have any note on this workout session
          </h2>
        </div>
      </div>
    </div>
  );
}

export { LogEmptyNote };
