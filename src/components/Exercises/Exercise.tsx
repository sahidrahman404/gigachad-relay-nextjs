import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { badgeVariants } from "../ui/badge";
import Link from "next/link";

const ExerciseFragment = graphql`
  fragment ExerciseFragment on Exercise {
    name
    howTo
    musclesGroups {
      edges {
        node {
          id
          name
        }
      }
    }
    exerciseTypes {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

type ExerciseProps = { queryRef: ExerciseFragment$key };
function Exercise({ queryRef }: ExerciseProps) {
  const data = useFragment(ExerciseFragment, queryRef);
  const musclesGroups = data.musclesGroups.edges;
  const exerciseTypes = data.exerciseTypes.edges;

  return (
    <div>
      <div className="flex flex-col gap-1 mb-10">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <div className="flex gap-2">
          {musclesGroups && musclesGroups[0] && musclesGroups[0].node ? (
            <Link
              className={badgeVariants({ variant: "outline" })}
              href={`/dashboard/exercises?mg=${musclesGroups[0].node.id}`}
            >
              {musclesGroups[0].node.name}
            </Link>
          ) : null}
          {exerciseTypes && exerciseTypes[0] && exerciseTypes[0].node ? (
            <Link
              className={badgeVariants({ variant: "outline" })}
              href={`/dashboard/exercises?et=${exerciseTypes[0].node.id}`}
            >
              {exerciseTypes[0].node.name}
            </Link>
          ) : null}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.howTo ?? "" }}
        className="prose mx-auto"
      />
    </div>
  );
}

export { Exercise };
