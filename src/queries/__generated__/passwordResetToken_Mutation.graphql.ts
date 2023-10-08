/**
 * @generated SignedSource<<1d1d3062f09f20833ef705d2f5afd3e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ResetPasswordInput = {
  email: string;
};
export type passwordResetToken_Mutation$variables = {
  input: ResetPasswordInput;
};
export type passwordResetToken_Mutation$data = {
  readonly createPasswordResetToken: string | null;
};
export type passwordResetToken_Mutation = {
  response: passwordResetToken_Mutation$data;
  variables: passwordResetToken_Mutation$variables;
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
    "name": "createPasswordResetToken",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "passwordResetToken_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "passwordResetToken_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c85fc9dff0703d2205d69cb5d259628",
    "id": null,
    "metadata": {},
    "name": "passwordResetToken_Mutation",
    "operationKind": "mutation",
    "text": "mutation passwordResetToken_Mutation(\n  $input: ResetPasswordInput!\n) {\n  createPasswordResetToken(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "5df3a6e2d67151818807cf86dabe4353";

export default node;
