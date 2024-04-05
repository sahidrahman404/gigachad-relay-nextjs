import { ExerciseSelectItemFragment$key } from "@/queries/__generated__/ExerciseSelectItemFragment.graphql";
import { memo, useMemo } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { SelectItem } from "../ui/select";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";

const ExerciseSelectItemFragment = graphql`
  fragment ExerciseSelectItemFragment on Exercise {
    id
    name
    image {
      ...ImageFragment
    }
    exerciseTypes {
      edges {
        node {
          name
        }
      }
    }
  }
`;

type ExerciseSelectItemProps = {
  queryRef: ExerciseSelectItemFragment$key;
};

const ExerciseSelectItem = memo(function ExerciseSelectItem({
  queryRef,
}: ExerciseSelectItemProps) {
  const data = useFragment(ExerciseSelectItemFragment, queryRef);
  const exerciseTypes = useMemo(() => {
    return (
      (data.exerciseTypes.edges &&
        data.exerciseTypes.edges[0]?.node &&
        data.exerciseTypes.edges[0].node.name) ??
      ""
    );
  }, [data.exerciseTypes.edges]);

  const value = useMemo(() => {
    return buildExerciseSelectInputValue({
      id: data.id,
      exerciseType: exerciseTypes,
      exerciseName: data.name,
    });
  }, [data.id, exerciseTypes, data.name]);

  return (
    <SelectItem key={data.id} value={value}>
      <div className="flex items-center space-x-2">
        <Avatar>{data.image && <Image image={data.image} />}</Avatar>
        <span>{data.name}</span>
      </div>
    </SelectItem>
  );
});

type BuildExerciseSelectInputParams = {
  id: string;
  exerciseType: string;
  exerciseName: string;
};

function buildExerciseSelectInputValue({
  id,
  exerciseType,
  exerciseName,
}: BuildExerciseSelectInputParams): string {
  return `${id}-${exerciseType}-${exerciseName}`;
}

type ExerciseSelectInputValue = {
  exerciseID: string;
  exerciseType: string;
  exerciseName: string;
};

function extractExerciseSelectInputValue(
  val: string,
): ExerciseSelectInputValue {
  const result = val.split("-");
  return {
    exerciseID: result[0],
    exerciseType: result[1],
    exerciseName: result[2],
  };
}

export {
  ExerciseSelectItem,
  buildExerciseSelectInputValue,
  extractExerciseSelectInputValue,
};
