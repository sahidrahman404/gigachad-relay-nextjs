import { NotebookPen } from "lucide-react";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import { graphql } from "relay-runtime";
import { ExerciseEmptyHowToFragment$key } from "@/queries/__generated__/ExerciseEmptyHowToFragment.graphql";
import { useFragment } from "react-relay";
import { WorkoutMachineContext } from "../Layout";

const ExerciseEmptyHowToFragment = graphql`
  fragment ExerciseEmptyHowToFragment on Exercise {
    id
    howTo
  }
`;

function ExerciseEmptyHowTo({
  queryRef,
}: {
  queryRef: ExerciseEmptyHowToFragment$key;
}) {
  const data = useFragment(ExerciseEmptyHowToFragment, queryRef);
  const isWorkingOut = WorkoutMachineContext.useSelector((state) =>
    state.matches({ workingOut: {} }),
  );
  if (data.howTo) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4 mt-10">
        <NotebookPen size={48} strokeWidth={1} />
        <div className="text-center">
          <h2 className="font-semibold">
            You don&apos;t have any description for this exercise
          </h2>
          <p className="text-muted-foreground">
            Get started by writing a description
          </p>
        </div>
        <LinkButton
          href={`/dashboard/exercises/edit/${data.id}`}
          isDisabled={isWorkingOut}
        >
          Add Description
        </LinkButton>
      </div>
    </div>
  );
}

export { ExerciseEmptyHowTo };
