import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useContext, useState } from "react";
import { graphql } from "relay-runtime";
import { Button } from "../ReactAriaUI/Button";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { toast } from "sonner";
import ConnectionHandler from "relay-connection-handler-plus";
import { RoutinesData, RoutinesFragment } from "./Routines";
import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";

const DeleteRoutineDialogMutation = graphql`
  mutation DeleteRoutineDialog_Mutation($input: DeleteRoutineInput!) {
    deleteRoutine(input: $input) {
      id
    }
  }
`;

type DeleteExerciseDialogProps = {
  id: string;
  Trigger: ReactNode;
};

function DeleteRoutineDialog({ id, Trigger }: DeleteExerciseDialogProps) {
  const queryRef = useContext(RoutinesData);
  const data = useFragment<RoutinesFragment$key>(RoutinesFragment, queryRef);
  const [open, setOpen] = useState(false);
  const [commitMutation, isMutationInFlight] =
    useMutation<DeleteExerciseDialog_Mutation>(DeleteRoutineDialogMutation);

  if (!data) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            exercise and remove the data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onPress={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
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
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { DeleteRoutineDialog };
