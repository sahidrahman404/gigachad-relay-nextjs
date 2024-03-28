import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { badgeVariants } from "../ui/badge";
import Link from "next/link";
import { MusclesGroupBadgeFragment$key } from "@/queries/__generated__/MusclesGroupBadgeFragment.graphql";

const MusclesGroupBadgeFragment = graphql`
  fragment MusclesGroupBadgeFragment on MusclesGroupConnection {
    edges {
      node {
        id
        name
      }
    }
  }
`;

type MusclesGroupBadgeProps = {
  queryRef: MusclesGroupBadgeFragment$key;
};

function MusclesGroupBadge({ queryRef }: MusclesGroupBadgeProps) {
  const data = useFragment(MusclesGroupBadgeFragment, queryRef);
  const musclesGroups = data.edges;
  if (!musclesGroups || !musclesGroups[0] || !musclesGroups[0].node) {
    return null;
  }

  return (
    <Link
      className={badgeVariants({ variant: "outline" })}
      href={`/dashboard/exercises?mg=${musclesGroups[0].node.id}`}
    >
      {musclesGroups[0].node.name}
    </Link>
  );
}

export { MusclesGroupBadge };
