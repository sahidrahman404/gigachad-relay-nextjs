import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ReactAriaUI/Button";
import { WorkoutLogs } from "./WorkoutLogs";
import { WorkoutLogsStats } from "./WorkoutLogsStats";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/router";
import { WorkoutMachineContext } from "../Layout";
import { useEffect } from "react";

const formSchema = z.object({
  volume: z.number(),
  sets: z.number(),
  duration: z.string(),
  workoutLogs: z
    .array(
      z.object({
        sets: z.array(
          z.object({
            selected: z.boolean().default(false).optional(),
            reps: z.coerce.number().positive().optional(),
            kg: z.coerce.number().positive().optional(),
            duration: z.string().optional(),
            km: z.coerce.number().positive().optional(),
          }),
        ),
        name: z.string(),
        exerciseType: z.string(),
        exerciseID: z.string().min(29),
      }),
    )
    .refine(
      (wL) => {
        const selectedSetsInWL = wL.map((sets) => {
          const selectedSets = sets.sets.filter((set) => set.selected);
          if (selectedSets.length > 0) {
            return true;
          }
        });
        if (selectedSetsInWL.filter((selected) => selected).length !== 0) {
          return true;
        }
        return false;
      },
      {
        message: "At least one set in the workout should be selected",
      },
    ),
});

type StartWorkoutFormSchema = z.infer<typeof formSchema>;

function StartWorkoutForm() {
  const routineID = WorkoutMachineContext.useSelector(
    (state) => state.context.routineID,
  );
  const workoutLogs = WorkoutMachineContext.useSelector(
    (state) => state.context.workoutLogs,
  );
  const workoutActor = WorkoutMachineContext.useActorRef();
  const isEditingWorkoutDescription = WorkoutMachineContext.useSelector(
    (state) =>
      state.matches({ workingOut: { form: "editingWorkoutDescription" } }),
  );
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isEditingWorkoutDescription) {
      workoutActor.send({ type: "GO_TO_EDIT_WORKOUT_LOGS" });
    }
  }, [isEditingWorkoutDescription]);

  const form = useForm<StartWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      volume: 0,
      sets: 0,
      duration: "",
      workoutLogs: workoutLogs,
    },
  });

  function onSubmit() {
    workoutActor.send({ type: "EDIT_WORKOUT_DESCRIPTION" });
    router.push(`/dashboard/routines/finish/${routineID}`);
  }

  function onError(errVal: FieldErrors<StartWorkoutFormSchema>) {
    const workoutLogsErr = errVal.workoutLogs;
    if (
      workoutLogsErr &&
      Object.entries(workoutLogsErr as any).length === 1 &&
      workoutLogsErr?.root?.message
    ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: workoutLogsErr.root.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="grid grid-cols-4 gap-y-3"
      >
        <Button
          type="submit"
          className="col-span-4 justify-self-end"
          isDisabled={false}
        >
          Finish
        </Button>

        <WorkoutLogsStats />
        <WorkoutLogs />
      </form>
    </Form>
  );
}

type UseFormReturnStartWorkoutFormSchema = UseFormReturn<
  StartWorkoutFormSchema,
  any,
  undefined
>;

export { StartWorkoutForm };
export type { StartWorkoutFormSchema, UseFormReturnStartWorkoutFormSchema };
