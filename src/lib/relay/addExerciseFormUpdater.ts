import { RecordSourceSelectorProxy } from "relay-runtime";
import { prependExerciseEdge } from "./prependEdge";
import ConnectionHandler from "relay-connection-handler-plus";
import { AddExerciseForm_Mutation$data } from "@/queries/__generated__/AddExerciseForm_Mutation.graphql";

function addExerciseFormUpdater<T>(
  store: RecordSourceSelectorProxy<T>,
  data: AddExerciseForm_Mutation$data,
  userID: string
) {
  const exerciseTypeID =
    data.createExercise.exerciseTypes.edges !== null
      ? data.createExercise.exerciseTypes.edges[0] !== null
        ? data.createExercise.exerciseTypes.edges[0].node !== null
          ? data.createExercise.exerciseTypes.edges[0].node.id
          : ""
        : ""
      : "";
  const musclesGroupID =
    data.createExercise.musclesGroups.edges !== null
      ? data.createExercise.musclesGroups.edges[0] !== null
        ? data.createExercise.musclesGroups.edges[0].node !== null
          ? data.createExercise.musclesGroups.edges[0].node.id
          : ""
        : ""
      : "";
  const userRecord = store.get(userID);
  const connectionRecords = ConnectionHandler.getConnections(
    userRecord!,
    "ExercisesFragment_exercises",
    (obj) => {
      if (obj !== undefined && obj.where !== undefined) {
        if (
          obj.where.hasExerciseTypesWith !== undefined &&
          obj.where.hasMusclesGroupsWith !== undefined &&
          obj.where.hasExerciseTypesWith.length !== 0 &&
          obj.where.hasMusclesGroupsWith.length !== 0 &&
          obj.where.hasExerciseTypesWith.id !== exerciseTypeID &&
          obj.where.hasMusclesGroupsWith.id !== musclesGroupID
        ) {
          return false;
        }

        if (
          obj.where.hasExerciseTypesWith !== undefined &&
          obj.where.hasExerciseTypesWith.length !== 0 &&
          obj.where.hasExerciseTypesWith.id !== exerciseTypeID
        ) {
          return false;
        }

        if (
          obj.where.hasMusclesGroupsWith &&
          obj.where.hasMusclesGroupsWith.length !== 0 &&
          obj.where.hasMusclesGroupsWith.id !== musclesGroupID
        ) {
          return false;
        }
      }

      return true;
    }
  );

  prependExerciseEdge(store, connectionRecords);
}

export { addExerciseFormUpdater };
