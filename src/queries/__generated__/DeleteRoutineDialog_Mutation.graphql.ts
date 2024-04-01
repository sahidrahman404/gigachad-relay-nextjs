/**
 * @generated SignedSource<<426cd3fd431a3600b6b7a2929a3d5ae2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteRoutineInput = {
  id: string;
};
export type DeleteRoutineDialog_Mutation$variables = {
  input: DeleteRoutineInput;
};
export type DeleteRoutineDialog_Mutation$data = {
  readonly deleteRoutine: {
    readonly id: string;
  } | null | undefined;
};
export type DeleteRoutineDialog_Mutation = {
  response: DeleteRoutineDialog_Mutation$data;
  variables: DeleteRoutineDialog_Mutation$variables;
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
    "concreteType": "Routine",
    "kind": "LinkedField",
    "name": "deleteRoutine",
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
    "name": "DeleteRoutineDialog_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRoutineDialog_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "56676df4205866e978810acd13d79570",
    "id": null,
    "metadata": {},
    "name": "DeleteRoutineDialog_Mutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRoutineDialog_Mutation(\n  $input: DeleteRoutineInput!\n) {\n  deleteRoutine(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1f22bb69bc64d64c2c8e313d42b9d468";

export default node;
