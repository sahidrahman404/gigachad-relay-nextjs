import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldErrors,
  UseFormReturn,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { image } from "@/lib/zod";
import { WorkoutLogs } from "./WorkoutLogs";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { WorkoutLogsStats } from "./WorkoutLogsStats";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import {
  GlobalState,
  createStore,
  useStateMachine,
} from "little-state-machine";
import { useEffect, useMemo } from "react";
import { intervalToDuration } from "date-fns";
import { useRouter } from "next/router";
import { StartWorkoutFormFragment$key } from "@/queries/__generated__/StartWorkoutFormFragment.graphql";

// const AddWorkoutFormMutation = graphql`
//   mutation AddWorkoutFormMutation($input: CreateWorkoutWithChildrenInput!) {
//     createWorkoutWithChildren(input: $input) {
//       id
//     }
//   }
// `;

const StartWorkoutFormFragment = graphql`
  fragment StartWorkoutFormFragment on Routine {
    id
    routineExercises {
      edges {
        node {
          sets {
            reps
            kg
            time
            km
          }
          exercises {
            id
            name
            exerciseTypes {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

createStore({
  startWorkoutData: {
    volume: 0,
    sets: 0,
    startTime: 0,
    stopTime: 0,
    duration: "",
    workoutLogs: [],
  },
});

function updateStartWorkoutData(
  state: GlobalState,
  payload: StartWorkoutFormSchema,
) {
  return {
    ...state,
    startWorkoutData: {
      ...state.startWorkoutData,
      ...payload,
    },
  };
}

const formSchema2 = z.object({
  image: image.optional(),
  description: z.string().optional(),
});

const formSchema = z.object({
  volume: z.number(),
  sets: z.number(),
  startTime: z.number(),
  stopTime: z.number(),
  duration: z.string(),
  workoutLogs: z
    .array(
      z.object({
        sets: z.array(
          z.object({
            selected: z.boolean().default(false).optional(),
            reps: z.coerce.number().positive().optional(),
            kg: z.coerce.number().positive().optional(),
            time: z.string().optional(),
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

type StartWorkoutFormProps = {
  queryRef: StartWorkoutFormFragment$key;
};

function StartWorkoutForm({ queryRef }: StartWorkoutFormProps) {
  const data = useFragment(StartWorkoutFormFragment, queryRef);
  const { toast } = useToast();
  const { state, actions } = useStateMachine({ updateStartWorkoutData });
  const router = useRouter();

  const workoutLogs = useMemo(() => {
    return data.routineExercises.edges?.map((rE) => {
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
              time: set.time ?? undefined,
              km: set.km ?? undefined,
            };
          }),
          name: capitalizeFirstLetter(rE.node.exercises.name),
          exerciseType: exerciseType,
          exerciseID: rE.node.exercises.id,
        };
        return result;
      }
    });
  }, [data.routineExercises.edges]);

  const form = useForm<StartWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      volume: 0,
      sets: 0,
      startTime: Date.now(),
      stopTime: 0,
      duration: "",
      workoutLogs: workoutLogs,
    },
  });

  const { fields, replace } = useFieldArray({
    name: "workoutLogs",
    control: form.control,
  });

  useEffect(() => {
    const startTime = state?.startWorkoutData?.startTime;
    const stopTime = state?.startWorkoutData?.stopTime;
    if (startTime && stopTime) {
      form.setValue("startTime", startTime);
      form.setValue("stopTime", stopTime);
    }
    const workoutLogs = state?.startWorkoutData?.workoutLogs;
    if (workoutLogs && workoutLogs.length > 1) {
      replace(workoutLogs);
    }
  }, [state?.startWorkoutData?.workoutLogs]);

  useEffect(() => {
    const nextNavigationHandler = (url: string) => {
      if (!url.split("/").includes("finish")) {
        actions.updateStartWorkoutData({
          volume: 0,
          sets: 0,
          startTime: 0,
          stopTime: 0,
          duration: "",
          workoutLogs: [],
        });
      }
    };

    router.events.on("beforeHistoryChange", nextNavigationHandler);

    // On component unmount, remove the event listener
    return () => {
      router.events.off("beforeHistoryChange", nextNavigationHandler);
    };
  }, []);

  function onSubmit(val: StartWorkoutFormSchema) {
    const stopTime = Date.now();
    const duration = intervalToDuration({
      start: val.startTime,
      end: stopTime,
    });
    const durationString = `${duration.minutes}m ${duration.seconds}s`;
    actions.updateStartWorkoutData({
      ...val,
      duration: durationString,
      stopTime: stopTime,
    });
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
        <Button
          type="submit"
          className="col-span-4 justify-self-end"
          disabled={false}
        >
          Finish
        </Button>

        <WorkoutLogsStats />

        <div className="col-span-full space-y-4">
          {fields.map((field, index) => {
            return (
              <Card key={field.id}>
                <CardHeader>
                  <CardTitle>{field.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <WorkoutLogs
                    index={index}
                    exerciseType={field.exerciseType}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </form>
    </Form>
  );
}

type UseFormReturnStartWorkoutFormSchema = UseFormReturn<
  StartWorkoutFormSchema,
  any,
  undefined
>;

export { StartWorkoutForm, updateStartWorkoutData };
export type { StartWorkoutFormSchema, UseFormReturnStartWorkoutFormSchema };
