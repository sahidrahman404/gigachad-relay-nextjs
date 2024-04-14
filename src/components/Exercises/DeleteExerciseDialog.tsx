import { useContext } from "react";
import { graphql } from "relay-runtime";
import { Button } from "../ReactAriaUI/Button";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { toast } from "sonner";
import { ExercisesData, ExercisesFragment } from "./Exercises";
import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";
import { CloseButton, MyDialog, MyDialogProps } from "../ReactAriaUI/MyDialog";
import { Heading } from "react-aria-components";

const DeleteExerciseDialogMutation = graphql`
  mutation DeleteExerciseDialog_Mutation($input: DeleteExerciseInput!) {
    deleteExercise(input: $input) {
      id
    }
  }
`;

type DeleteExerciseDialogProps = {
  id: string;
} & Omit<MyDialogProps, "children" | "Button">;

function DeleteExerciseDialog({
  id,
  isOpen,
  onOpenChange,
}: DeleteExerciseDialogProps) {
  const queryRef = useContext(ExercisesData);
  const data = useFragment<ExercisesFragment$key>(ExercisesFragment, queryRef);
  const [commitMutation, isMutationInFlight] =
    useMutation<DeleteExerciseDialog_Mutation>(DeleteExerciseDialogMutation);

  if (!data) {
    return null;
  }

  return (
    <MyDialog
      Button={<Button className="hidden">Delete</Button>}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <div className="flex flex-col gap-y-4">
        <Heading slot="title" className="text-xl font-bold">
          Delete Exercise
        </Heading>
        <p className="text-sm">
          This action cannot be undone. This will permanently delete this
          exercise and remove the data from our servers.
        </p>
        <div className="flex gap-x-2">
          <CloseButton className="ml-auto" variant="outline">
            Cancel
          </CloseButton>
          <Button
            variant="destructive"
            isDisabled={isMutationInFlight}
            onPress={() => {
              commitMutation({
                variables: {
                  input: {
                    id: id,
                  },
                },
                updater: (store) => {
                  const userRecord = store.get(data.id);
                  const connectionRecords = ConnectionHandler.getConnections(
                    userRecord!,
                    "ExercisesFragment_exercises",
                  );
                  const exerciseIDToDelete = id;
                  connectionRecords.forEach((cR) => {
                    ConnectionHandler.deleteNode(cR, exerciseIDToDelete);
                  });
                },
                onCompleted(_, errors) {
                  if (errors === null) {
                    toast.success("The exercise was deleted");
                  }
                },
              });
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </MyDialog>
  );
}

export { DeleteExerciseDialog };
