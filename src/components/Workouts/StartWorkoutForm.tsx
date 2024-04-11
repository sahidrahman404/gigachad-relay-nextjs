import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ReactAriaUI/Button";
import { WorkoutLogs } from "./WorkoutLogs";
import { WorkoutLogsStats } from "./WorkoutLogsStats";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { WorkoutMachineContext } from "../Layout";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { StartWorkoutFormFragment$key } from "@/queries/__generated__/StartWorkoutFormFragment.graphql";
import { useStartWorkoutForm } from "../Hooks/useStartWorkoutForm";
import { useTimer } from "../Hooks/useTimer";
import { Timer } from "../Timer/Timer";
import Head from "next/head";

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
            weight: z.coerce.number().positive().optional(),
            duration: z.string().optional(),
            length: z.coerce.number().positive().optional(),
          }),
        ),
        restTime: z.string().optional(),
        name: z.string(),
        exerciseType: z.string(),
        exerciseID: z.string().min(29),
        image: z.any(),
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

const StartWorkoutFormFragment = graphql`
  fragment StartWorkoutFormFragment on Routine {
    id
    name
    ...useStartWorkoutFormFragment
  }
`;

type StartWorkoutFormProps = {
  queryRef: StartWorkoutFormFragment$key;
  unit: string;
};

function StartWorkoutForm({ queryRef, unit }: StartWorkoutFormProps) {
  const data = useFragment(StartWorkoutFormFragment, queryRef);
  const workoutLogs = WorkoutMachineContext.useSelector(
    (state) => state.context.workoutLogs,
  );
  const workoutActor = WorkoutMachineContext.useActorRef();
  const router = useRouter();
  const { isTimerRunning } = useTimer();

  useStartWorkoutForm({ queryRef: data, unit: unit });

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
      toast.error(workoutLogsErr.root.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="grid grid-cols-4 gap-y-3"
      >
        <Head>
          <title>{data.name} - Gigachad</title>
          <meta
            property="og:title"
            content={`${data.name} - Gigachad`}
            key="title"
          />
        </Head>
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
