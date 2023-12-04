/**
 * @generated SignedSource<<30373852ebf7e60cce26c0b073b13f38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateWorkoutWithChildrenInput = {
  description?: string | null;
  duration: string;
  image?: ImageInput | null;
  name: string;
  reps: number;
  sets: number;
  volume: number;
  workoutLogs?: ReadonlyArray<CreateWorkoutLogInput> | null;
};
export type ImageInput = {
  aspectRatio?: number | null;
  breakPoints?: ReadonlyArray<number> | null;
  filename: string;
  height?: number | null;
  layout: string;
  objectFit: string;
  priority: boolean;
  width?: number | null;
};
export type CreateWorkoutLogInput = {
  exerciseID: string;
  sets: ReadonlyArray<SetInput>;
};
export type SetInput = {
  kg?: number | null;
  km?: number | null;
  reps?: number | null;
  time?: string | null;
};
export type AddWorkoutFormMutation$variables = {
  input: CreateWorkoutWithChildrenInput;
};
export type AddWorkoutFormMutation$data = {
  readonly createWorkoutWithChildren: {
    readonly id: string;
  };
};
export type AddWorkoutFormMutation = {
  response: AddWorkoutFormMutation$data;
  variables: AddWorkoutFormMutation$variables;
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
    "concreteType": "Workout",
    "kind": "LinkedField",
    "name": "createWorkoutWithChildren",
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
    "name": "AddWorkoutFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddWorkoutFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "47b1ca34eaa6f36730adde2a0ff8f1c4",
    "id": null,
    "metadata": {},
    "name": "AddWorkoutFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddWorkoutFormMutation(\n  $input: CreateWorkoutWithChildrenInput!\n) {\n  createWorkoutWithChildren(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff2a309fb6a10fedab8160e0d447999d";

export default node;
