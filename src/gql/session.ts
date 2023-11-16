import { graphql } from "relay-runtime";

const SessionQuery = graphql`
  query session_Query {
    viewer {
      id
      ...useAuthRedirectFragment
    }
  }
`

export default SessionQuery
