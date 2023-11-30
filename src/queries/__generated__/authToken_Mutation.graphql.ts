/**
 * @generated SignedSource<<3e54ee876b3e992471bec823cedf2b48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginInput = {
  email: string;
  password: string;
};
export type authToken_Mutation$variables = {
  input: LoginInput;
};
export type authToken_Mutation$data = {
  readonly createAuthenticationToken: {
    readonly tokenPlainText: string;
    readonly user: {
      readonly activated: number;
      readonly email: string;
      readonly id: string;
      readonly username: string;
    };
  };
};
export type authToken_Mutation = {
  response: authToken_Mutation$data;
  variables: authToken_Mutation$variables;
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
    "concreteType": "AuthenticationToken",
    "kind": "LinkedField",
    "name": "createAuthenticationToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tokenPlainText",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "activated",
            "storageKey": null
          }
        ],
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
    "name": "authToken_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authToken_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8c819f020709d46c914df962689b7899",
    "id": null,
    "metadata": {},
    "name": "authToken_Mutation",
    "operationKind": "mutation",
    "text": "mutation authToken_Mutation(\n  $input: LoginInput!\n) {\n  createAuthenticationToken(input: $input) {\n    tokenPlainText\n    user {\n      id\n      username\n      email\n      activated\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e8dd480debf75357863c01ee10a70a57";

export default node;
