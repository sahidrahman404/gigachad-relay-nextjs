/**
 * @generated SignedSource<<7ba9d01b46fa75c85a1b3b4e7ce3e5eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ResetUserPasswordInput = {
  password: string;
  tokenPlainText: string;
};
export type resetPassword_Mutation$variables = {
  input: ResetUserPasswordInput;
};
export type resetPassword_Mutation$data = {
  readonly updateUserPassword: {
    readonly password: string;
    readonly tokenPlainText: string;
  };
};
export type resetPassword_Mutation = {
  response: resetPassword_Mutation$data;
  variables: resetPassword_Mutation$variables;
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
    "concreteType": "ResetUserPasswordResult",
    "kind": "LinkedField",
    "name": "updateUserPassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tokenPlainText",
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
    "name": "resetPassword_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resetPassword_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e170ea8bd95cab560540a8b013c7ea83",
    "id": null,
    "metadata": {},
    "name": "resetPassword_Mutation",
    "operationKind": "mutation",
    "text": "mutation resetPassword_Mutation(\n  $input: ResetUserPasswordInput!\n) {\n  updateUserPassword(input: $input) {\n    password\n    tokenPlainText\n  }\n}\n"
  }
};
})();

(node as any).hash = "4d28b4d207a324ce5ee8a11b4fa9402d";

export default node;
