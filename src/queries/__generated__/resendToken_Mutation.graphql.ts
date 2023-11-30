/**
 * @generated SignedSource<<3d5b5b629359e99f50dbcdd92d87189a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ActivationTokenInput = {
  email: string;
};
export type resendToken_Mutation$variables = {
  input: ActivationTokenInput;
};
export type resendToken_Mutation$data = {
  readonly createActivationToken: {
    readonly id: string;
  };
};
export type resendToken_Mutation = {
  response: resendToken_Mutation$data;
  variables: resendToken_Mutation$variables;
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
    "name": "createActivationToken",
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
    "name": "resendToken_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resendToken_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "43d082841c532c194e6abe9863a23932",
    "id": null,
    "metadata": {},
    "name": "resendToken_Mutation",
    "operationKind": "mutation",
    "text": "mutation resendToken_Mutation(\n  $input: ActivationTokenInput!\n) {\n  createActivationToken(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1bf54948d5ba5aee4602f9a58cc6b761";

export default node;
