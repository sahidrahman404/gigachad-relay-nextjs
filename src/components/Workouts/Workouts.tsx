import { graphql } from "relay-runtime";

const WorkoutsFragment = graphql`
  fragment WorkoutsFragment on User
  @refetchable(queryName: "WorkoutsFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
  ) {
    workouts(after: $cursor, first: $count)
      @connection(key: "WorkoutsFragment_workouts") {
      edges {
        node {
          id
        }
      }
    }
  }
`;

function Workouts() {
  return null;
}

export { Workouts };
