import { graphql } from "relay-runtime";

const ResetPasswordMutation = graphql`
  mutation resetPassword_Mutation($input: ResetUserPasswordInput!) {
    updateUserPassword(input: $input) {
      password
      tokenPlainText
    }
  }
`;

export default ResetPasswordMutation;
