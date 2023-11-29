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
import { ConnectionHandler, graphql } from "relay-runtime";
import { Button } from "../ui/button";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { DeleteExerciseDialogFragment$key } from "@/queries/__generated__/DeleteExerciseDialogFragment.graphql";
import { useToast } from "../ui/use-toast";
import { ExercisesData } from "./Exercises";

const DeleteExerciseDialogMutation = graphql`
  mutation DeleteExerciseDialog_Mutation(
    $connections: [ID!]!
    $input: DeleteExerciseInput!
  ) {
    deleteExercise(input: $input) {
      id @deleteEdge(connections: $connections)
    }
  }
`;

const DeleteExerciseDialogFragment = graphql`
  fragment DeleteExerciseDialogFragment on User {
    id
  }
`;

type DeleteExerciseDialogProps = {
  id: string;
  Trigger: ReactNode;
};

function DeleteExerciseDialog({ id, Trigger }: DeleteExerciseDialogProps) {
  const queryRef = useContext(ExercisesData);
  const data = useFragment<DeleteExerciseDialogFragment$key>(
    DeleteExerciseDialogFragment,
    queryRef
  );
  const [open, setOpen] = useState(false);
  const [commitMutation, isMutationInFlight] =
    useMutation<DeleteExerciseDialog_Mutation>(DeleteExerciseDialogMutation);
  const { toast } = useToast();

  if (!data) {
    return null;
  }

  const connectionID = ConnectionHandler.getConnectionID(
    data.id,
    "ExercisesFragment_exercises"
  );

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
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={isMutationInFlight}
            onClick={() => {
              commitMutation({
                variables: {
                  input: {
                    id: id,
                  },
                  connections: [connectionID],
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
