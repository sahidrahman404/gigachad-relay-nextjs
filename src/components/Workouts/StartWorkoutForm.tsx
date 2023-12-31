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
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { StartWorkoutFormFragment$key } from "@/queries/__generated__/StartWorkoutFormFragment.graphql";
import { useStartWorkoutForm } from "../Hooks/useStartWorkoutForm";
import { useTimer } from "../Hooks/useTimer";
import { Timer } from "../Timer/Timer";

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
          })
        ),
        restTimer: z.string().optional(),
        name: z.string(),
        exerciseType: z.string(),
        exerciseID: z.string().min(29),
      })
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
      }
    ),
});

type StartWorkoutFormSchema = z.infer<typeof formSchema>;

const StartWorkoutFormFragment = graphql`
  fragment StartWorkoutFormFragment on Routine {
    id
    ...useStartWorkoutFormFragment
  }
`;

type StartWorkoutFormProps = {
  queryRef: StartWorkoutFormFragment$key;
};

function StartWorkoutForm({ queryRef }: StartWorkoutFormProps) {
  const data = useFragment(StartWorkoutFormFragment, queryRef);
  const workoutLogs = WorkoutMachineContext.useSelector(
    (state) => state.context.workoutLogs
  );
  const workoutActor = WorkoutMachineContext.useActorRef();
  const { toast } = useToast();
  const router = useRouter();
  const { isTimerRunning } = useTimer();

  useStartWorkoutForm({ queryRef: data });

  const form = useForm<StartWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    values: {
      volume: 0,
      sets: 0,
      duration: "",
      workoutLogs: workoutLogs,
    },
  });

  function onSubmit() {
    workoutActor.send({ type: "GO_TO_EDIT_SECOND_STEP_FORM" });
    workoutActor.send({ type: "STOPWATCH_STOP" });
    router.push(`/dashboard/routines/finish/${data.id}`);
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
        <div className="col-span-4 md:col-start-2 md:col-span-2 grid grid-cols-2 gap-x-2">
          <Button
            type="button"
            isDisabled={isTimerRunning}
            variant="destructive"
            onPress={() => {
              workoutActor.send({ type: "RESET" });
              router.push("/dashboard/routines");
            }}
          >
            Discard
          </Button>
          <Button type="submit" isDisabled={isTimerRunning}>
            Finish
          </Button>
        </div>

        <WorkoutLogsStats />
        <Timer />
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
