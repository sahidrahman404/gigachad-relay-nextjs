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
  configVariant?: Parameters<typeof badgeVariants>[0];
};

function MusclesGroupBadge({
  queryRef,
  configVariant = { variant: "outline" },
}: MusclesGroupBadgeProps) {
  const data = useFragment(MusclesGroupBadgeFragment, queryRef);
  const musclesGroups = data.edges;
  if (!musclesGroups || !musclesGroups[0] || !musclesGroups[0].node) {
    return null;
  }

  return (
    <Link
      className={badgeVariants(configVariant)}
      href={`/dashboard/exercises?mg=${musclesGroups[0].node.id}`}
    >
      {musclesGroups[0].node.name}
    </Link>
  );
}

export { MusclesGroupBadge };
