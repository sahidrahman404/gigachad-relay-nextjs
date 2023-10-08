import { graphql } from "relay-runtime";

const ResetPasswordMutation = graphql`
  mutation resetPassword_Mutation($input: ResetUserPasswordInput!) {
    updateUserPassword(input: $input)
  }
`;

export default ResetPasswordMutation;
