import { graphql } from "relay-runtime";

const PasswordResetTokenMutation = graphql`
  mutation passwordResetToken_Mutation($input: ResetPasswordInput!) {
    createPasswordResetToken(input: $input) {
      id
    }
  }
`;
export default PasswordResetTokenMutation;
