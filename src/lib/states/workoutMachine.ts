import { FinishWorkoutFormSchema } from "@/components/Workouts/FinishWorkoutForm";
import { StartWorkoutFormSchema } from "@/components/Workouts/StartWorkoutForm";
import { assign, createMachine, fromCallback } from "xstate";
import { CreateWorkoutLogInput } from "@/queries/__generated__/FinishWorkoutForm_Mutation.graphql";
import { intervalToDuration, parse } from "date-fns";
import { useStartWorkoutFormFragment$data } from "@/queries/__generated__/useStartWorkoutFormFragment.graphql";
import { clearInterval, setInterval } from "worker-timers";
import { convertKgToPound, convertPoundToKg } from "../utils";

type WorkoutFormSchema = StartWorkoutFormSchema & FinishWorkoutFormSchema;
type Context = {
  unit: string;
  routineID: string;
  elapsed: number;
  createWorkoutLogsInput?: CreateWorkoutLogInput[];
  createVolumeInput?: number;
  timer: {
    elapsed: number;
    duration: number;
    interval: number;
    type: "REST" | "EXERCISE";
  };
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
        | { type: "TIMER_DURATION_UPDATE"; value: { workoutLogsIndex: number } }
        | {
            type: "TIMER_EXERCISE_DURATION_UPDATE";
            value: { workoutLogsIndex: number; setIndex: number };
          }
        | { type: "TIMER_START" }
        | { type: "TIMER_PAUSE" }
        | { type: "TIMER_TICK" }
        | { type: "TIMER_RESET" }
        | { type: "SET_UNIT"; value: Pick<Context, "unit"> }
        | {
            type: "LOAD_WORKOUT_LOGS";
            value: useStartWorkoutFormFragment$data;
          }
        | {
            type: "APPEND_WORKOUT_LOG_SET";
            value: { set: Set; workoutLogsIndex: number };
          }
        | { type: "EDIT_SET_OBJECT"; value: EditSetObject }
        | {
            type: "SET_REST_TIMER";
            value: { restTime: string; workoutLogsIndex: number };
          }
        | { type: "GO_TO_EDIT_FIRST_STEP_FORM" }
        | { type: "GO_TO_EDIT_SECOND_STEP_FORM" }
        | { type: "SET_WORKOUT_IMAGE"; value: Pick<Context, "image"> }
        | {
            type: "SET_WORKOUT_DESCRIPTION";
            value: Pick<Context, "description">;
          }
        | { type: "TRANSFORM_WORKOUT_LOGS_SETS" }
        | { type: "CLEAR_FIELDS" }
        | { type: "RESET" };
      guards:
        | { type: "canStartWorkout" }
        | { type: "canStartTimer" }
        | { type: "canStopTimer" };
      actions:
        | { type: "setID"; params: Pick<Context, "routineID"> }
        | { type: "setUnit"; params: Pick<Context, "unit"> }
        | { type: "loadWorkoutLogs"; params: Pick<Context, "workoutLogs"> }
        | { type: "setWorkoutLogs"; params: Pick<Context, "workoutLogs"> }
        | { type: "setRestTimer"; params: Pick<Context, "workoutLogs"> }
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
        | { type: "resetTimer" }
        | { type: "setTimerTick"; params: Pick<Context, "timer"> }
        | { type: "setTimerDuration"; params: Pick<Context, "timer"> }
        | { type: "clearFields" }
        | { type: "resetContext" }
        | {
            type: "createVolumeInput";
            params: Pick<Context, "createVolumeInput">;
          }
        | {
            type: "transformWorkoutLogsSets";
            params: Pick<Context, "workoutLogs">;
          };
    },
    context: {
      unit: "METRIC",
      routineID: "",
      elapsed: 0,
      timer: {
        elapsed: 0,
        duration: 0,
        interval: 1,
        type: "REST",
      },
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
                },
              },
              stopwatchResetted: {
                type: "final",
              },
            },
            on: {
              STOPWATCH_RESET: {
                actions: [{ type: "resetStopwatch" }],
                target: ".stopwatchResetted",
              },
            },
          },
          form: {
            initial: "emptyFields",
            states: {
              emptyFields: {
                on: {
                  SET_UNIT: {
                    actions: [
                      {
                        type: "setUnit",
                        params({ event }) {
                          return event.value;
                        },
                      },
                    ],
                  },
                  LOAD_WORKOUT_LOGS: {
                    actions: [
                      {
                        type: "loadWorkoutLogs",
                        params({ event, context }) {
                          return {
                            workoutLogs: processWorkoutLogs({
                              ...event.value,
                              unit: context.unit,
                            }),
                          };
                        },
                      },
                    ],
                    target: "editingFirstStepForm",
                  },
                },
              },
              editingFirstStepForm: {
                initial: "timer",
                states: {
                  timer: {
                    initial: "timerStopped",
                    states: {
                      timerStopped: {
                        on: {
                          TIMER_START: {
                            guard: "canStartTimer",
                            target: "timerRunning",
                          },
                        },
                      },
                      timerRunning: {
                        invoke: {
                          src: fromCallback(
                            ({
                              sendBack,
                              input: { interval: timerInterval },
                            }) => {
                              const interval = setInterval(() => {
                                sendBack({ type: "TIMER_TICK" });
                              }, 1000 * timerInterval);
                              return () => clearInterval(interval);
                            },
                          ),
                          input: ({ context }) => ({
                            interval: context.timer.interval,
                          }),
                        },
                        on: {
                          TIMER_TICK: {
                            actions: [
                              {
                                type: "setTimerTick",
                                params({ context }) {
                                  context.timer.elapsed +=
                                    context.timer.interval;
                                  return {
                                    timer: context.timer,
                                  };
                                },
                              },
                            ],
                          },
                          TIMER_PAUSE: {
                            target: "timerStopped",
                          },
                        },
                        always: {
                          guard: "canStopTimer",
                          actions: ["resetTimer"],
                          target: "timerStopped",
                        },
                      },
                    },
                    on: {
                      TIMER_DURATION_UPDATE: {
                        actions: [
                          {
                            type: "setTimerDuration",
                            params({ context, event }) {
                              const workoutLogsIndex =
                                event.value.workoutLogsIndex;
                              context.timer.duration = Number(
                                context.workoutLogs[workoutLogsIndex].restTime,
                              );
                              return {
                                timer: context.timer,
                              };
                            },
                          },
                        ],
                      },
                      TIMER_EXERCISE_DURATION_UPDATE: {
                        actions: [
                          {
                            type: "setTimerDuration",
                            params({ context, event }) {
                              const workoutLogsIndex =
                                event.value.workoutLogsIndex;
                              const setIndex = event.value.setIndex;
                              const timeString =
                                context.workoutLogs[workoutLogsIndex].sets[
                                  setIndex
                                ].duration ?? "00:00:00";
                              const time = parse(
                                timeString,
                                "HH:mm:ss",
                                new Date(),
                              );
                              const hours = time.getHours() * 3600;
                              const minutes = time.getMinutes() * 60;
                              const seconds = time.getSeconds();
                              const duration = hours + minutes + seconds;
                              context.timer.duration = duration;
                              context.timer.type = "EXERCISE";
                              return {
                                timer: context.timer,
                              };
                            },
                          },
                        ],
                      },
                      TIMER_RESET: {
                        actions: [{ type: "resetTimer" }],
                        target: ".timerStopped",
                      },
                    },
                  },
                },
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
                  SET_REST_TIMER: {
                    actions: [
                      {
                        type: "setRestTimer",
                        params({ context, event }) {
                          const index = event.value.workoutLogsIndex;
                          const duration = event.value.restTime;
                          context.workoutLogs[index]["restTime"] = duration;
                          return {
                            workoutLogs: context.workoutLogs,
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
                        filterSelectedWorkoutLogs(
                          context.workoutLogs,
                          context.unit,
                        );
                      return {
                        createWorkoutLogsInput: filteredSelectedWorkoutLogs,
                      };
                    },
                  },
                  {
                    type: "createVolumeInput",
                    params({ context }) {
                      return {
                        createVolumeInput: createVolumeInput(
                          context.volume,
                          context.unit,
                        ),
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
                  TRANSFORM_WORKOUT_LOGS_SETS: {
                    actions: [
                      {
                        type: "transformWorkoutLogsSets",
                        params({ context }) {
                          return {
                            workoutLogs: transformWorkoutLogsSets(
                              context.workoutLogs,
                              context.unit,
                            ),
                          };
                        },
                      },
                    ],
                  },
                  GO_TO_EDIT_FIRST_STEP_FORM: "editingFirstStepForm",
                },
              },
              formResetted: {
                type: "final",
              },
            },
            on: {
              CLEAR_FIELDS: {
                actions: [{ type: "clearFields" }],
                target: ".formResetted",
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
      canStartTimer: ({ context }) => {
        return context.timer.elapsed < context.timer.duration;
      },
      canStopTimer: ({ context }) => {
        return context.timer.elapsed >= context.timer.duration;
      },
    },
    actions: {
      setID: assign(({}, params) => {
        return params;
      }),
      setUnit: assign(({}, params) => {
        return params;
      }),
      loadWorkoutLogs: assign(({}, params) => {
        return params;
      }),
      setWorkoutLogs: assign(({}, params) => {
        return params;
      }),
      setRestTimer: assign(({}, params) => {
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
      setTimerTick: assign(({}, params) => {
        return params;
      }),
      setTimerDuration: assign(({}, params) => {
        return params;
      }),
      createVolumeInput: assign(({}, params) => params),
      transformWorkoutLogsSets: assign(({}, params) => params),
      setDuration: assign(({ context }) => {
        const duration = intervalToDuration({
          start: 0,
          end: context.elapsed * 1000,
        });
        return {
          duration: `${duration.hours ? `${duration.hours}h` : ""} ${duration.minutes ? `${duration.minutes}m` : ""} ${duration.seconds ? `${duration.seconds}s` : ""}`,
        };
      }),
      resetStopwatch: assign(() => {
        return {
          elapsed: 0,
        };
      }),
      resetTimer: assign(() => {
        return {
          timer: {
            elapsed: 0,
            duration: 0,
            interval: 1,
            type: "REST" as const,
          },
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
          timer: {
            duration: 0,
            elapsed: 0,
            interval: 0,
            type: "REST" as const,
          },
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

function processWorkoutLogs(
  data: useStartWorkoutFormFragment$data & { unit: string },
) {
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
            weight:
              data.unit !== "METRIC" && typeof set.weight === "number"
                ? convertKgToPound(set.weight)
                : set.weight ?? undefined,
            duration: set.duration ?? undefined,
            length: set.length ?? undefined,
          };
        }),
        name: rE.node.exercises.name,
        restTime: rE.node.restTime ?? "0",
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
        if (setCurrVal.weight && setCurrVal.reps && setCurrVal.selected) {
          return acc + setCurrVal.weight * setCurrVal.reps;
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
    case "weight":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].weight =
        set["weight"];
      break;
    case "length":
      context.workoutLogs[workoutLogsIndex].sets[setIndex].length =
        set["length"];
      break;
  }
}

function filterSelectedWorkoutLogs(
  workoutLogs: Context["workoutLogs"],
  unit: Context["unit"],
) {
  const selectedWorkout = workoutLogs
    .map((wl) => {
      const selectedSets = wl.sets.filter((set) => set.selected);
      if (selectedSets.length > 0) {
        return {
          sets: selectedSets.map((set) => ({
            weight:
              unit !== "METRIC" && typeof set.weight === "number"
                ? convertPoundToKg(set.weight)
                : set.weight,
            duration: set.duration,
            length: set.length,
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

function transformWorkoutLogsSets(
  workoutLogs: Context["workoutLogs"],
  unit: Context["unit"],
) {
  for (const workoutLog of workoutLogs) {
    if (unit !== "METRIC") {
      for (const set of workoutLog.sets) {
        set.weight =
          typeof set.weight === "number"
            ? convertPoundToKg(set.weight)
            : undefined;
      }
    }
  }
  return workoutLogs;
}

function createVolumeInput(volume: Context["volume"], unit: Context["unit"]) {
  return unit !== "METRIC" ? convertPoundToKg(volume) : volume;
}
export { workoutMachine };
