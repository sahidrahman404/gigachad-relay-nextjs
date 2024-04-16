import { useContext } from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { RoutinesData, RoutinesFragment } from "./Routines";
import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";
import { toast } from "sonner";
import { MyDialogProps } from "../ReactAriaUI/MyDialog";
import { DialogTrigger } from "react-aria-components";
import { Modal } from "../ReactAriaUI/Modal";
import { AlertDialog } from "../ReactAriaUI/AlertDialog";
import { Button } from "../ReactAriaUI/Button";

const DeleteRoutineDialogMutation = graphql`
  mutation DeleteRoutineDialog_Mutation($input: DeleteRoutineInput!) {
    deleteRoutine(input: $input) {
      id
    }
  }
`;

type DeleteRoutineDialogProps = Omit<MyDialogProps, "children" | "Button"> & {
  id: string;
};

function DeleteRoutineDialog({
  id,
  isOpen,
  onOpenChange,
}: DeleteRoutineDialogProps) {
  const queryRef = useContext(RoutinesData);
  const data = useFragment<RoutinesFragment$key>(RoutinesFragment, queryRef);
  const [commitMutation, isMutationInFlight] =
    useMutation<DeleteExerciseDialog_Mutation>(DeleteRoutineDialogMutation);

  if (!data) {
    return null;
  }

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <Button className="hidden" />
      <Modal>
        <AlertDialog
          title="Delete Routine"
          variant="destructive"
          actionLabel="Delete"
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
                  "RoutinesFragment_routines",
                );
                const routineIDToDelete = id;
                connectionRecords.forEach((cR) => {
                  ConnectionHandler.deleteNode(cR, routineIDToDelete);
                });
              },
              onCompleted(_, errors) {
                if (errors === null) {
                  toast.success("The routine was deleted");
                }
              },
            });
          }}
          buttonDisabled={isMutationInFlight}
        >
          This action cannot be undone. This will permanently delete this
          routine and remove the data from our servers.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

export { DeleteRoutineDialog };
