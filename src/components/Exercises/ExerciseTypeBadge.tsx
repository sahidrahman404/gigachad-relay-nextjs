import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";
import { ExerciseTypeBadgeFragment$key } from "@/queries/__generated__/ExerciseTypeBadgeFragment.graphql";

const ExerciseTypeBadgeFragment = graphql`
  fragment ExerciseTypeBadgeFragment on ExerciseTypeConnection {
    edges {
      node {
        id
        name
      }
    }
  }
`;

type ExerciseTypeBadgeProps = {
  queryRef: ExerciseTypeBadgeFragment$key;
  configVariant?: Parameters<typeof badgeVariants>[0];
};

function ExerciseTypeBadge({
  queryRef,
  configVariant = { variant: "outline" },
}: ExerciseTypeBadgeProps) {
  const data = useFragment(ExerciseTypeBadgeFragment, queryRef);
  const exerciseTypes = data.edges;

  if (!exerciseTypes || !exerciseTypes[0] || !exerciseTypes[0].node) {
    return null;
  }

  return (
    <Link
      className={badgeVariants(configVariant)}
      href={`/dashboard/exercises?et=${exerciseTypes[0].node.id}`}
    >
      {exerciseTypes[0].node.name}
    </Link>
  );
}

export { ExerciseTypeBadge };
