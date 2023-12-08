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
import { useToast } from "../ui/use-toast";
import { ExercisesData, ExercisesFragment } from "./Exercises";
import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";

const DeleteExerciseDialogMutation = graphql`
  mutation DeleteExerciseDialog_Mutation($input: DeleteExerciseInput!) {
    deleteExercise(input: $input) {
      id
    }
  }
`;

type DeleteExerciseDialogProps = {
  id: string;
  Trigger: ReactNode;
};

function DeleteExerciseDialog({ id, Trigger }: DeleteExerciseDialogProps) {
  const queryRef = useContext(ExercisesData);
  const data = useFragment<ExercisesFragment$key>(ExercisesFragment, queryRef);
  const [open, setOpen] = useState(false);
  const [commitMutation, isMutationInFlight] =
    useMutation<DeleteExerciseDialog_Mutation>(DeleteExerciseDialogMutation);
  const { toast } = useToast();

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
                    "ExercisesFragment_exercises",
                  );
                  const exerciseIDToDelete = id;
                  connectionRecords.forEach((cR) => {
                    ConnectionHandler.deleteNode(cR, exerciseIDToDelete);
                  });
                },
                onCompleted(_, errors) {
                  if (errors === null) {
                    toast({
                      variant: "default",
                      title: "The exercise was deleted",
                    });
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

export { DeleteExerciseDialog };
