/**
 * @generated SignedSource<<34371410863fb302f255f8361fc5e327>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ActivateUserInput = {
  tokenPlainText: string;
};
export type activateUser_Mutation$variables = {
  input: ActivateUserInput;
};
export type activateUser_Mutation$data = {
  readonly activateUser: {
    readonly tokenPlainText: string;
  };
};
export type activateUser_Mutation = {
  response: activateUser_Mutation$data;
  variables: activateUser_Mutation$variables;
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
    "concreteType": "ActivateUserResult",
    "kind": "LinkedField",
    "name": "activateUser",
    "plural": false,
    "selections": [
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
    "name": "activateUser_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "activateUser_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1dbdcb8c3ed9cad8b949955e30069869",
    "id": null,
    "metadata": {},
    "name": "activateUser_Mutation",
    "operationKind": "mutation",
    "text": "mutation activateUser_Mutation(\n  $input: ActivateUserInput!\n) {\n  activateUser(input: $input) {\n    tokenPlainText\n  }\n}\n"
  }
};
})();

(node as any).hash = "fd412ae95057185889d7c12053dcb0db";

export default node;
