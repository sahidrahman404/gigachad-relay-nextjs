import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { RoutinesEmptyState } from "./RoutinesEmptyState";

const RoutinesFragment = graphql`
  fragment RoutinesFragment on User
  @refetchable(queryName: "RoutinesFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
  ) {
    id
    routines(after: $cursor, first: $count)
      @connection(key: "RoutinesFragment_routines") {
      edges {
        node {
          id
        }
      }
    }
  }
`;

type RoutinesProps = {
  queryRef: RoutinesFragment$key;
};

function Routines({ queryRef }: RoutinesProps) {
  const data = useFragment(RoutinesFragment, queryRef);
  if (!data.routines.edges) {
    return null;
  }

  if (data.routines.edges.length === 0) {
    return <RoutinesEmptyState />;
  }

  return <p>routine</p>;
}

export { Routines };
