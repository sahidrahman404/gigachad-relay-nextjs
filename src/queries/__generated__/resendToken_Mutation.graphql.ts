/**
 * @generated SignedSource<<02db4bbf3464eb52f5660302f61fc778>>
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
  readonly createActivationToken: string | null;
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
    "kind": "ScalarField",
    "name": "createActivationToken",
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
    "cacheID": "99e842141e8b2c32f6ec0a25336a5fe4",
    "id": null,
    "metadata": {},
    "name": "resendToken_Mutation",
    "operationKind": "mutation",
    "text": "mutation resendToken_Mutation(\n  $input: ActivationTokenInput!\n) {\n  createActivationToken(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "18e82de6f348037ff659ed058ed70213";

export default node;
