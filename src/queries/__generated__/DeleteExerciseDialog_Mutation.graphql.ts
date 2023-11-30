/**
 * @generated SignedSource<<b82dac471b08eb6ca9c2feca5c9fd09a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteExerciseInput = {
  id: string;
};
export type DeleteExerciseDialog_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteExerciseInput;
};
export type DeleteExerciseDialog_Mutation$data = {
  readonly deleteExercise: {
    readonly id: string;
  };
};
export type DeleteExerciseDialog_Mutation = {
  response: DeleteExerciseDialog_Mutation$data;
  variables: DeleteExerciseDialog_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteExerciseDialog_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "deleteExercise",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteExerciseDialog_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "deleteExercise",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "45f47512be541e7612f2a7cc4a1f269e",
    "id": null,
    "metadata": {},
    "name": "DeleteExerciseDialog_Mutation",
    "operationKind": "mutation",
    "text": "mutation DeleteExerciseDialog_Mutation(\n  $input: DeleteExerciseInput!\n) {\n  deleteExercise(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f95e096e232589a0b624d94346cc9cd";

export default node;
