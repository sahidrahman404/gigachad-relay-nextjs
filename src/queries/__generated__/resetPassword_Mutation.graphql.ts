/**
 * @generated SignedSource<<55cbd4b73bfd468851a048acf27534c0>>
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
  readonly updateUserPassword: string | null;
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
    "kind": "ScalarField",
    "name": "updateUserPassword",
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
    "cacheID": "54d846612868c63415f0c1af9e3b1e17",
    "id": null,
    "metadata": {},
    "name": "resetPassword_Mutation",
    "operationKind": "mutation",
    "text": "mutation resetPassword_Mutation(\n  $input: ResetUserPasswordInput!\n) {\n  updateUserPassword(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "87ef681c1e93b489ab11259734f9e6b3";

export default node;
