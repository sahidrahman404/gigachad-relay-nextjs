import { ExerciseSelectItemFragment$key } from "@/queries/__generated__/ExerciseSelectItemFragment.graphql";
import { memo, useMemo } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ListBoxItem } from "../ReactAriaUI/Select";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";
import { ImageFragment$key } from "@/queries/__generated__/ImageFragment.graphql";

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
      exerciseImage: data.image,
    });
  }, [data.id, exerciseTypes, data.name, data.image]);

  return (
    <ListBoxItem key={value} id={value} textValue={data.name}>
      <div className="flex items-center space-x-2">
        <Avatar className="bg-blue-500">
          {data.image && <Image image={data.image} />}
        </Avatar>
        <span className="text-inherit">{data.name}</span>
      </div>
    </ListBoxItem>
  );
});

type ExerciseSelectInputValue = {
  id: string;
  exerciseType: string;
  exerciseName: string;
  exerciseImage?: ImageFragment$key | null;
};

function buildExerciseSelectInputValue({
  id,
  exerciseType,
  exerciseName,
  exerciseImage,
}: ExerciseSelectInputValue): string {
  return JSON.stringify({
    id,
    exerciseType,
    exerciseName,
    exerciseImage,
  });
}

function extractExerciseSelectInputValue(
  val: string,
): ExerciseSelectInputValue {
  if (val === "") {
    return {
      id: "",
      exerciseType: "",
      exerciseName: "",
      exerciseImage: null,
    };
  }
  return JSON.parse(val);
}

export {
  ExerciseSelectItem,
  buildExerciseSelectInputValue,
  extractExerciseSelectInputValue,
};
