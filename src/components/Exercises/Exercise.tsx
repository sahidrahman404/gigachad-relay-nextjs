import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MusclesGroupBadge } from "./MusclesGroupBadge";
import { ExerciseTypeBadge } from "./ExerciseTypeBadge";
import { ExerciseEmptyHowTo } from "./ExerciseEmptyHowTo";

const ExerciseFragment = graphql`
  fragment ExerciseFragment on Exercise {
    id
    name
    howTo
    image {
      ...ImageFragment
    }
    ...ExerciseEmptyHowToFragment
    musclesGroups {
      edges {
        node {
          id
        }
      }
      ...MusclesGroupBadgeFragment
    }
    exerciseTypes {
      edges {
        node {
          id
        }
      }
      ...ExerciseTypeBadgeFragment
    }
  }
`;

type ExerciseProps = { queryRef: ExerciseFragment$key };
function Exercise({ queryRef }: ExerciseProps) {
  const data = useFragment(ExerciseFragment, queryRef);

  return (
    <div>
      <div className="flex flex-col gap-1 mb-10">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <div className="flex gap-2">
          <MusclesGroupBadge queryRef={data.musclesGroups} />
          <ExerciseTypeBadge queryRef={data.exerciseTypes} />
        </div>
      </div>
      <ExerciseEmptyHowTo queryRef={data} />
      <div
        dangerouslySetInnerHTML={{ __html: data.howTo ?? "" }}
        className="prose mx-auto"
      />
    </div>
  );
}

export { Exercise, ExerciseFragment };
