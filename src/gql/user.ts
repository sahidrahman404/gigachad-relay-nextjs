import { graphql } from "relay-runtime";

const UserMutation = graphql`
  mutation user_Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
    }
  }
`;

export default UserMutation;
