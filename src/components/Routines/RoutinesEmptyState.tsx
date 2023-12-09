import { FolderPlus } from "lucide-react";
import { graphql } from "relay-runtime";
import { RoutinesEmptyStateFragment$key } from "@/queries/__generated__/RoutinesEmptyStateFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Button } from "../ReactAriaUI/Button";
import { useRouter } from "next/router";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { LinkButton } from "../ReactAriaUI/LinkButton";

const RoutinesEmptyStateFragment = graphql`
  fragment RoutinesEmptyStateFragment on User
  @refetchable(queryName: "RoutinesEmptyStateFragmentRefetchQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 1 }
  ) {
    exercises(after: $cursor, first: $count)
      @connection(key: "ExercisesFragment_exercises") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

type RoutinesEmptyStateProps = {
  queryRef: RoutinesEmptyStateFragment$key;
};

function RoutinesEmptyState({ queryRef }: RoutinesEmptyStateProps) {
  const { data, loadNext } = usePaginationFragment(
    RoutinesEmptyStateFragment,
    queryRef,
  );
  const router = useRouter();
  const { toast } = useToast();
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
        <Button
          onPress={() => {
            loadNext(1);
            if (!data.exercises.edges || data.exercises.edges.length === 0) {
              toast({
                title: "No Exercises Available",
                description:
                  "Please add exercises to your collection before creating a routine",
                action: (
                  <ToastAction altText="Add exercises" asChild>
                    <LinkButton
                      href={"/dashboard/exercises/add"}
                      variant="outline"
                    >
                      Add Exercises
                    </LinkButton>
                  </ToastAction>
                ),
              });
              return;
            }
            router.push("/dashboard/routines/add");
          }}
        >
          Add Routines
        </Button>
      </div>
    </div>
  );
}

export { RoutinesEmptyState };
