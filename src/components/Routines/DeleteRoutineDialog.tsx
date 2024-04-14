import { Heading } from "react-aria-components";
import { Button } from "../ReactAriaUI/Button";
import { useContext } from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import { DeleteExerciseDialog_Mutation } from "@/queries/__generated__/DeleteExerciseDialog_Mutation.graphql";
import { RoutinesData, RoutinesFragment } from "./Routines";
import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";
import { toast } from "sonner";
import { CloseButton, MyDialog, MyDialogProps } from "../ReactAriaUI/MyDialog";

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
    <MyDialog
      Button={<Button className="hidden">Delete</Button>}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <div className="flex flex-col gap-y-4">
        <Heading slot="title" className="text-xl font-bold">
          Delete Routine
        </Heading>
        <p className="text-sm">
          This action cannot be undone. This will permanently delete this
          routine and remove the data from our servers.
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
        </div>
      </div>
    </MyDialog>
  );
}

export { DeleteRoutineDialog };
