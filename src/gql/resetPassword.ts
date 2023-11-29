import { graphql } from "relay-runtime";

const ResetPasswordMutation = graphql`
  mutation resetPassword_Mutation($input: ResetUserPasswordInput!) {
    updateUserPassword(input: $input) {
      id
    }
  }
`;

export default ResetPasswordMutation;
