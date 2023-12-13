import { FinishWorkoutFormSchema } from "@/components/Workouts/FinishWorkoutForm";
import { StartWorkoutFormSchema } from "@/components/Workouts/StartWorkoutForm";
import { assign, createMachine, fromCallback } from "xstate";
import { capitalizeFirstLetter } from "../utils";
import { CreateWorkoutLogInput } from "@/queries/__generated__/FinishWorkoutForm_Mutation.graphql";
import { intervalToDuration } from "date-fns";
import { useStartWorkoutFormFragment$data } from "@/queries/__generated__/useStartWorkoutFormFragment.graphql";

type WorkoutFormSchema = StartWorkoutFormSchema & FinishWorkoutFormSchema;
type Context = {
  routineID: string;
  elapsed: number;
  createWorkoutLogsInput?: CreateWorkoutLogInput[];
} & WorkoutFormSchema;
type Set = Pick<Context, "workoutLogs">["workoutLogs"][0]["sets"][0];
type EditSetObject = {
  label: keyof Set;
  set: Set;
  workoutLogsIndex: number;
  setIndex: number;
};

const workoutMachine = createMachine(
  {
    id: "workout",
    initial: "workoutStopped",
    types: {} as {
      context: Context;
      events:
        | { type: "WORKOUT_START"; value: string }
        | { type: "STOPWATCH_START" }
        | { type: "STOPWATCH_TICK" }
        | { type: "STOPWATCH_STOP" }
        | { type: "STOPWATCH_RESET" }
        | { type: "LOAD_WORKOUT_LOGS"; value: useStartWorkoutFormFragment$data }
        | {
            type: "APPEND_WORKOUT_LOG_SET";
            value: { set: Set; workoutLogsIndex: number };
          }
        | { type: "EDIT_SET_OBJECT"; value: EditSetObject }
        | { type: "GO_TO_EDIT_FIRST_STEP_FORM" }
        | { type: "GO_TO_EDIT_SECOND_STEP_FORM" }
        | { type: "SET_WORKOUT_IMAGE"; value: Pick<Context, "image"> }
        | {
            type: "SET_WORKOUT_DESCRIPTION";
            value: Pick<Context, "description">;
          }
        | { type: "CLEAR_FIELDS" }
        | { type: "RESET" };
      guards: { type: "canStartWorkout" };
      actions:
        | { type: "setID"; params: Pick<Context, "routineID"> }
        | { type: "loadWorkoutLogs"; params: Pick<Context, "workoutLogs"> }
        | { type: "setWorkoutLogs"; params: Pick<Context, "workoutLogs"> }
        | { type: "setWorkoutStats"; params: Pick<Context, "volume" | "sets"> }
        | {
            type: "createWorkoutLogsInput";
            params: Pick<Context, "createWorkoutLogsInput">;
          }
        | { type: "setImage"; params: Pick<Context, "image"> }
        | { type: "setDescription"; params: Pick<Context, "description"> }
        | { type: "setTick" }
        | { type: "setDuration" }
        | { type: "resetStopwatch" }
        | { type: "clearFields" }
        | { type: "resetContext" };
    },
    context: {
      routineID: "",
      elapsed: 0,
      volume: 0,
      sets: 0,
      duration: "",
      workoutLogs: [],
      description: "",
      image: undefined,
    },
    states: {
      workoutStopped: {
        on: {
          WORKOUT_START: {
            guard: "canStartWorkout",
            actions: [
              {
                type: "setID",
                params({ event }) {
                  return {
                    routineID: event.value,
                  };
                },
              },
            ],
            target: "workingOut",
          },
        },
      },
      workingOut: {
        type: "parallel",
        onDone: "workoutStopped",
        states: {
          stopwatch: {
            initial: "stopwatchStopped",
            states: {
              stopwatchStopped: {
                on: {
                  STOPWATCH_START: "stopwatchRunning",
                  STOPWATCH_RESET: {
                    actions: [{ type: "resetStopwatch" }],
                    target: "stopwatchResetted",
                  },
                },
              },
              stopwatchRunning: {
                invoke: {
                  src: fromCallback(({ sendBack }) => {
                    const interval = setInterval(() => {
                      sendBack({ type: "STOPWATCH_TICK" });
                    }, 1000);
                    return () => clearInterval(interval);
                  }),
                },
                on: {
                  STOPWATCH_TICK: {
                    actions: [{ type: "setTick" }, { type: "setDuration" }],
                  },
                  STOPWATCH_STOP: "stopwatchStopped",
                  STOPWATCH_RESET: {
                    actions: [{ type: "resetStopwatch" }],
                    target: "stopwatchResetted",
                  },
                },
              },
              stopwatchResetted: {
                type: "final",
              },
            },
          },
          form: {
            initial: "emptyFields",
            states: {
              emptyFields: {
                on: {
                  LOAD_WORKOUT_LOGS: {
                    actions: [
                      {
                        type: "loadWorkoutLogs",
                        params({ event }) {
                          return {
                            workoutLogs: processWorkoutLogs(event.value),
                          };
                        },
                      },
                    ],
                    target: "editingFirstStepForm",
                  },
                },
              },
              editingFirstStepForm: {
                on: {
                  APPEND_WORKOUT_LOG_SET: {
                    actions: [
                      {
                        type: "setWorkoutLogs",
                        params({ context, event }) {
                          const workoutLogsIndex = event.value.workoutLogsIndex;
                          const set = event.value.set;
                          context.workoutLogs[workoutLogsIndex].sets.push(set);
                          return context;
                        },
                      },
                    ],
                  },
                  EDIT_SET_OBJECT: {
                    actions: [
                      {
                        type: "setWorkoutLogs",
                        params({ context, event }) {
                          const workoutLogsIndex = event.value.workoutLogsIndex;
                          const setIndex = event.value.setIndex;
                          const label = event.value.label;
                          const currValue = event.value.set;
                          editSetWorkoutLogInplace({
                            context: context,
                            set: currValue,
                            setIndex: setIndex,
                            workoutLogsIndex: workoutLogsIndex,
                            label: label,
                          });
                          return context;
                        },
                      },
                      {
                        type: "setWorkoutStats",
                        params({ context }) {
                          const volume = getTotalVolume(context.workoutLogs);
                          const sets = getTotalSet(context.workoutLogs);
                          return {
                            volume: volume,
                            sets: sets,
                          };
                        },
                      },
                    ],
                  },
                  GO_TO_EDIT_SECOND_STEP_FORM: "editingSecondStepForm",
                },
              },
              editingSecondStepForm: {
                entry: [
                  {
                    type: "createWorkoutLogsInput",
                    params({ context }) {
                      const filteredSelectedWorkoutLogs =
                        filterSelectedWorkoutLogs(context.workoutLogs);
                      return {
                        createWorkoutLogsInput: filteredSelectedWorkoutLogs,
                      };
                    },
                  },
                ],
                on: {
                  SET_WORKOUT_DESCRIPTION: {
                    actions: [
                      {
                        type: "setDescription",
                        params({ event }) {
                          return event.value;
                        },
                      },
                    ],
                  },
                  SET_WORKOUT_IMAGE: {
                    actions: [
                      {
                        type: "setImage",
                        params({ event }) {
                          return event.value;
                        },
                      },
                    ],
                  },
                  GO_TO_EDIT_FIRST_STEP_FORM: "editingFirstStepForm",
                  CLEAR_FIELDS: {
                    actions: [{ type: "clearFields" }],
                    target: "formResetted",
                  },
                },
              },
              formResetted: {
                type: "final",
              },
            },
          },
        },
      },
    },
    on: {
      RESET: {
        actions: [{ type: "resetContext" }],
        target: ".workoutStopped",
      },
    },
  },
  {
    actors: {},
    guards: {
      canStartWorkout: ({ context }) => {
        return context.routineID.length === 0;
      },
    },
    actions: {
      setID: assign(({}, params) => {
        return params;
      }),
      loadWorkoutLogs: assign(({}, params) => {
        return params;
      }),
      setWorkoutLogs: assign(({}, params) => {
        return params;
      }),
      setWorkoutStats: assign(({}, params) => {
        return params;
      }),
      createWorkoutLogsInput: assign(({}, params) => {
        return params;
      }),
      setDescription: assign(({}, params) => {
        return params;
      }),
      setImage: assign(({}, params) => {
        return params;
      }),
      setTick: assign({
        elapsed: ({ context }) => context.elapsed + 1,
      }),
      setDuration: assign(({ context }) => {
        const duration = intervalToDuration({
          start: 0,
          end: context.elapsed * 1000,
        });
        return {
          duration: `${duration.hours}h ${duration.minutes}m ${duration.seconds}s`,
        };
      }),
      resetStopwatch: assign(() => {
        return {
          elapsed: 0,
        };
      }),
      clearFields: assign(() => {
        return {
          routineID: "",
          createWorkoutLogsInput: undefined,
          volume: 0,
          sets: 0,
          duration: "",
          workoutLogs: [],
          description: "",
          image: undefined,
        };
      }),
      resetContext: assign(() => {
        return {
          routineID: "",
          elapsed: 0,
          createWorkoutLogsInput: undefined,
          volume: 0,
          sets: 0,
          duration: "",
          workoutLogs: [],
          description: "",
          image: undefined,
        };
      }),
    },
  },
);

function processWorkoutLogs(data: useStartWorkoutFormFragment$data) {
  const workoutLogs = data.routineExercises?.edges?.map((rE) => {
    if (rE?.node) {
      const exerciseTypes = rE.node.exercises.exerciseTypes.edges;
      const exerciseType =
        exerciseTypes && exerciseTypes.length > 0 && exerciseTypes[0]?.node
          ? exerciseTypes[0].node.name
          : "";
      const result = {
        sets: rE.node.sets.map((set) => {
          return {
            selected: false,
            reps: set.reps ?? undefined,
            kg: set.kg ?? undefined,
            duration: set.duration ?? undefined,
            km: set.km ?? undefined,
          };
        }),
        name: capitalizeFirstLetter(rE.node.exercises.name),
        exerciseType: exerciseType,
        exerciseID: rE.node.exercises.id,
      };
      return result;
    }
    return {
      sets: [],
      name: "",
      exerciseType: "",
      exerciseID: "",
    };
  });

  const filteredWorkoutLogs =
    workoutLogs?.filter((wl) => wl.exerciseID !== "") ?? [];
  return filteredWorkoutLogs;
}

function getTotalSet(workoutLogs: Context["workoutLogs"]) {
  const initialSets = 0;
  const sets = workoutLogs?.reduce((acc, wLCurrVal) => {
    return (
      acc +
      wLCurrVal.sets.reduce((acc, setCurrVal) => {
        if (setCurrVal.selected) {
          return acc + 1;
        }
        return acc + 0;
      }, initialSets)
    );
  }, initialSets);

  return sets;
}

function getTotalVolume(workoutLogs: Context["workoutLogs"]) {
  const initialVolume = 0;
  const totalVolume = workoutLogs?.reduce((acc, currVal) => {
    return (
      acc +
      currVal.sets.reduce((acc, setCurrVal) => {
        if (setCurrVal.kg && setCurrVal.reps && setCurrVal.selected) {
          return acc + setCurrVal.kg * setCurrVal.reps;
        }
        return acc + 0;
      }, initialVolume)
    );
  }, initialVolume);
  return totalVolume;
}

type EditSetWorkoutLogInplaceParams = {
  context: Context;
} & EditSetObject;

function editSetWorkoutLogInplace({
  context,
  label,
  workoutLogsIndex,
  set,
  setIndex,
}: EditSetWorkoutLogInplaceParams) {
  switch (label) {
    case "duration":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].duration =
        set["duration"];
      break;
    case "selected":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].selected =
        set["selected"];
      break;
    case "reps":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].reps = set["reps"];
      break;
    case "kg":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].kg = set["kg"];
      break;
    case "km":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].km = set["km"];
      break;
  }
}

function filterSelectedWorkoutLogs(workoutLogs: Context["workoutLogs"]) {
  const selectedWorkout = workoutLogs
    .map((wl) => {
      const selectedSets = wl.sets.filter((set) => set.selected);
      if (selectedSets.length > 0) {
        return {
          sets: selectedSets.map((set) => ({
            kg: set.kg,
            time: set.duration,
            km: set.km,
            reps: set.reps,
          })),
          exerciseID: wl.exerciseID,
        };
      }
      return {
        sets: [],
        exerciseID: "",
      };
    })
    .filter((wl) => wl.exerciseID !== "");
  return selectedWorkout;
}

export { workoutMachine };
