/**
 * @generated SignedSource<<21e7eda9b16781e62f92e293f056cb6a>>
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
  readonly createPasswordResetToken: {
    readonly id: string;
  };
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createPasswordResetToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "cacheID": "525883d3b55fa6bc89d86528a8af9db4",
    "id": null,
    "metadata": {},
    "name": "passwordResetToken_Mutation",
    "operationKind": "mutation",
    "text": "mutation passwordResetToken_Mutation(\n  $input: ResetPasswordInput!\n) {\n  createPasswordResetToken(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b07f89431b6ed9834b353e206e6ca825";

export default node;
