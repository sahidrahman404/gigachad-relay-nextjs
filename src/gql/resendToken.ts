import { graphql } from "relay-runtime";

const ResendTokenMutation = graphql`
  mutation resendToken_Mutation($input: ActivationTokenInput!) {
    createActivationToken(input: $input) {
      id
    }
  }
`;
export default ResendTokenMutation;
