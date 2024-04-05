import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { checkDuplicate } from "../utils";
import { ReminderInput } from "@/queries/__generated__/AddRoutineForm_Mutation.graphql";
import { useStartWorkoutFormFragment$data } from "@/queries/__generated__/useStartWorkoutFormFragment.graphql";
import { Time } from "@internationalized/date";
import {
  buildExerciseSelectInputValue,
  extractExerciseSelectInputValue,
} from "@/components/Routines/ExerciseSelectItem";

const routineformSchema = z.object({
  name: z.string().min(3),
  reminders: z.array(
    z.object({
      day: z.coerce.number().refine((d) => d >= 0),
      time: z.string(),
    }),
  ),
  routineExercises: z
    .array(
      z.object({
        sets: z
          .array(
            z.object({
              reps: z.coerce.number().positive().optional(),
              weight: z.coerce.number().positive().optional(),
              duration: z.string().optional(),
              length: z.coerce.number().positive().optional(),
            }),
          )
          .refine((sets) => sets.length > 0, {
            message: "Exercise must have sets",
          }),
        restTime: z.string().optional(),
        exerciseID: z
          .string()
          .min(29, { message: "Exercise must be selected" }),
      }),
    )
    .refine(
      (routineExercises) => {
        const exerciseIDs = routineExercises.map((rE) => rE.exerciseID);
        return !checkDuplicate(exerciseIDs);
      },
      {
        message:
          "Cannot select the same exercise twice. Please choose a different exercise for each selection.",
      },
    ),
});

type RoutineFormSchema = z.infer<typeof routineformSchema>;
type RoutineFormReturn = UseFormReturn<RoutineFormSchema, any, undefined>;

function buildRoutineExercisesInput(
  val: RoutineFormSchema,
): RoutineFormSchema["routineExercises"] {
  return val.routineExercises.map((rE) => {
    const { exerciseID, exerciseName } = extractExerciseSelectInputValue(
      rE.exerciseID,
    );
    return {
      ...rE,
      exerciseID: exerciseID,
      exerciseName: exerciseName,
    };
  });
}

type BuildRoutineRemindersInputParams = {
  val: RoutineFormSchema;
  sendReminder: boolean;
};

function buildRoutineRemindersInput({
  val,
  sendReminder,
}: BuildRoutineRemindersInputParams): ReminderInput[] | null {
  if (sendReminder === true && val.reminders.length > 0) {
    return val.reminders.map((reminder) => {
      const date = new Date();
      const time = reminder.time.split(":");
      date.setHours(Number(time[0]));
      date.setMinutes(Number(time[1]));
      date.setSeconds(Number(time[2]));
      return {
        day: reminder.day,
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
      };
    });
  }
  return null;
}

function unbuildRoutineExercisesInput(
  routineExercises: useStartWorkoutFormFragment$data["routineExercises"],
): RoutineFormSchema["routineExercises"] {
  if (
    routineExercises &&
    routineExercises.edges &&
    routineExercises.edges.length > 0
  ) {
    return routineExercises.edges.map((routineExercise) => {
      const exercises = routineExercise?.node?.exercises;
      const exerciseTypes = exercises?.exerciseTypes;
      const exerciseType =
        exerciseTypes?.edges &&
        exerciseTypes.edges[0] &&
        exerciseTypes.edges[0].node;
      return {
        sets:
          routineExercise && routineExercise.node
            ? routineExercise.node.sets.map((set) => {
                return {
                  duration: set.duration ?? undefined,
                  weight: set.weight ?? undefined,
                  length: set.length ?? undefined,
                  reps: set.reps ?? undefined,
                };
              })
            : [],
        restTime: routineExercise?.node?.restTime ?? undefined,
        exerciseID: buildExerciseSelectInputValue({
          id: exercises?.id ?? "",
          exerciseType: exerciseType?.name ?? "",
          exerciseName: routineExercise?.node?.exercises.name ?? "",
        }),
      };
    });
  }
  return [];
}

type UnbuildRoutineRemindersInputParams = {
  reminderID: useStartWorkoutFormFragment$data["reminderID"];
  reminders: useStartWorkoutFormFragment$data["reminders"];
};

function unbuildRoutineRemindersInput({
  reminderID,
  reminders,
}: UnbuildRoutineRemindersInputParams): RoutineFormSchema["reminders"] {
  if (reminderID && reminders && reminders.length > 0) {
    return reminders.map((reminder) => {
      const date = new Date();
      date.setUTCHours(reminder.hour);
      date.setUTCMinutes(reminder.minute);
      date.setUTCSeconds(reminder.second);
      const time = new Time(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      );

      return {
        day: reminder.day,
        time: time.toString(),
      };
    });
  }
  return [];
}

export {
  routineformSchema,
  buildRoutineExercisesInput,
  buildRoutineRemindersInput,
  unbuildRoutineRemindersInput,
  unbuildRoutineExercisesInput,
};
export type { RoutineFormSchema, RoutineFormReturn };
