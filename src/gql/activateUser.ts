import { graphql } from "relay-runtime";

const ActivateUserMutation = graphql`
  mutation activateUser_Mutation($input: ActivateUserInput!) {
    activateUser(input: $input) {
      tokenPlainText
      user {
        id
        username
      }
    }
  }
`;
export default ActivateUserMutation;
