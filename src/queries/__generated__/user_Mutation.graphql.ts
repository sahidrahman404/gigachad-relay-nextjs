/**
 * @generated SignedSource<<90b8399d249fb57ebbc0a7bfc9d02e1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
export type CreateUserInput = {
  email: string;
  exerciseIDs?: ReadonlyArray<string> | null | undefined;
  hashedPassword: string;
  name: string;
  routineIDs?: ReadonlyArray<string> | null | undefined;
  tokenIDs?: ReadonlyArray<string> | null | undefined;
  unit?: UserUnit | null | undefined;
  username: string;
  workoutIDs?: ReadonlyArray<string> | null | undefined;
};
export type user_Mutation$variables = {
  input: CreateUserInput;
};
export type user_Mutation$data = {
  readonly createUser: {
    readonly email: string;
    readonly id: string;
  };
};
export type user_Mutation = {
  response: user_Mutation$data;
  variables: user_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "user_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "user_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bbbdbb466a81dd16f5e86ba404ee83cc",
    "id": null,
    "metadata": {},
    "name": "user_Mutation",
    "operationKind": "mutation",
    "text": "mutation user_Mutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "215a6a43681bdcf67fb2e2b7ae0f119c";

export default node;
