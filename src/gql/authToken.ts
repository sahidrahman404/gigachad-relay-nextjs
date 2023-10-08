import { graphql } from "relay-runtime";

const AuthTokenMutation = graphql`
  mutation authToken_Mutation($input: LoginInput!) {
    createAuthenticationToken(input: $input) {
      tokenPlainText
      user {
        id
        username
        email
        activated
      }
    }
  }
`;
export default AuthTokenMutation;
