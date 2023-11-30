/**
 * @generated SignedSource<<46f950674ea44f93aea1ce81ec02de59>>
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
    "concreteType": "Exercise",
    "kind": "LinkedField",
    "name": "deleteExercise",
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
    "name": "DeleteExerciseDialog_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteExerciseDialog_Mutation",
    "selections": (v1/*: any*/)
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

(node as any).hash = "4ef7bb4c4176edb92638d9db2e02ecd3";

export default node;
