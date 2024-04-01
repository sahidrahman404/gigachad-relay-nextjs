import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { RoutinesEmptyState } from "./RoutinesEmptyState";
import { Routine } from "./Routine";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import { createContext } from "react";

const RoutinesFragment = graphql`
  fragment RoutinesFragment on User
  @refetchable(queryName: "RoutinesFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
  ) {
    id
    routines(
      after: $cursor
      first: $count
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "RoutinesFragment_routines") {
      edges {
        node {
          id
          ...RoutineFragment
        }
      }
    }
    ...RoutinesEmptyStateFragment
  }
`;

type RoutinesProps = {
  queryRef: RoutinesFragment$key;
};

const RoutinesData = createContext<RoutinesFragment$key | null | undefined>(
  null,
);

function Routines({ queryRef }: RoutinesProps) {
  const data = useFragment(RoutinesFragment, queryRef);

  if (!data.routines.edges) {
    return null;
  }

  if (data.routines.edges.length === 0) {
    return <RoutinesEmptyState queryRef={data} />;
  }

  return (
    <RoutinesData.Provider value={queryRef}>
      <div className="space-y-4">
        <LinkButton href={"/dashboard/routines/add"}>Add</LinkButton>
        {data.routines.edges?.map((routine) => {
          if (routine?.node) {
            return <Routine queryRef={routine.node} key={routine.node.id} />;
          }
        })}
      </div>
    </RoutinesData.Provider>
  );
}

export { Routines, RoutinesFragment, RoutinesData };
