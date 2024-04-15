import { useContext } from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { toast } from "sonner";
import { ExercisesData, ExercisesFragment } from "./Exercises";
import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";
import { MyDialogProps } from "../ReactAriaUI/MyDialog";
import { AlertDialog } from "../ReactAriaUI/AlertDialog";
import { Modal } from "../ReactAriaUI/Modal";
import { DialogTrigger } from "react-aria-components";

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
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal isDismissable>
        <AlertDialog
          title="Delete Exercise"
          variant="destructive"
          actionLabel="Delete"
          buttonDisabled={isMutationInFlight}
          onAction={() => {
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
          This action cannot be undone. This will permanently delete this
          exercise and remove the data from our servers
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

export { DeleteExerciseDialog };
