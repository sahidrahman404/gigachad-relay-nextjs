import {
  ConnectionHandler,
  RecordProxy,
  RecordSourceSelectorProxy,
} from "relay-runtime";

function prependWorkoutEdge<T>(
  store: RecordSourceSelectorProxy<T>,
  connectionRecords: RecordProxy<{}>[] | null | undefined,
) {
  if (connectionRecords !== null && connectionRecords !== undefined)
    for (const connectionRecord of connectionRecords) {
      prependEdge(
        store,
        connectionRecord,
        "new_workout",
        "Workout",
        "WorkoutEdge",
      );
    }
}

function prependExerciseEdge<T>(
  store: RecordSourceSelectorProxy<T>,
  connectionRecords: RecordProxy<{}>[] | null | undefined,
) {
  if (connectionRecords !== null && connectionRecords !== undefined)
    for (const connectionRecord of connectionRecords) {
      prependEdge(
        store,
        connectionRecord,
        "new_exercise",
        "Exercise",
        "ExerciseEdge",
      );
    }
}

function prependRoutineEdge<T>(
  store: RecordSourceSelectorProxy<T>,
  connectionRecords: RecordProxy<{}>[] | null | undefined,
) {
  if (connectionRecords !== null && connectionRecords !== undefined)
    for (const connectionRecord of connectionRecords) {
      prependEdge(
        store,
        connectionRecord,
        "new_routine",
        "Routine",
        "RoutineEdge",
      );
    }
}

const prependEdge = <T>(
  store: RecordSourceSelectorProxy<T>,
  connectionRecord: RecordProxy<{}> | null | undefined,
  newID: `new_${string}`,
  typeName: string,
  edgeType: string,
) => {
  if (connectionRecord !== null && connectionRecord !== undefined) {
    const id = `client:${newID}:${crypto.randomUUID()}`;
    const newRecord = store.create(id, typeName);
    const newEdge = ConnectionHandler.createEdge(
      store,
      connectionRecord,
      newRecord,
      edgeType,
    );
    ConnectionHandler.insertEdgeBefore(connectionRecord, newEdge);
  }
};

export { prependExerciseEdge, prependRoutineEdge, prependWorkoutEdge };
