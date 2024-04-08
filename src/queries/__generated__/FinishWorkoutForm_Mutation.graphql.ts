/**
 * @generated SignedSource<<7ba8b263d9aba582121abfd3cc934cde>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateWorkoutWithChildrenInput = {
  description?: string | null | undefined;
  duration: string;
  image?: ImageInput | null | undefined;
  name: string;
  sets: number;
  volume: number;
  workoutLogs?: ReadonlyArray<CreateWorkoutLogInput> | null | undefined;
};
export type ImageInput = {
  aspectRatio?: number | null | undefined;
  breakPoints?: ReadonlyArray<number> | null | undefined;
  filename: string;
  height?: number | null | undefined;
  layout: string;
  objectFit: string;
  priority: boolean;
  width?: number | null | undefined;
};
export type CreateWorkoutLogInput = {
  exerciseID: string;
  sets: ReadonlyArray<SetInput>;
};
export type SetInput = {
  duration?: string | null | undefined;
  length?: number | null | undefined;
  reps?: number | null | undefined;
  weight?: number | null | undefined;
};
export type FinishWorkoutForm_Mutation$variables = {
  input: CreateWorkoutWithChildrenInput;
};
export type FinishWorkoutForm_Mutation$data = {
  readonly createWorkoutWithChildren: {
    readonly id: string;
    readonly workoutLogs: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly exerciseID: string;
          readonly sets: ReadonlyArray<{
            readonly duration: string | null | undefined;
            readonly length: number | null | undefined;
            readonly reps: number | null | undefined;
            readonly weight: number | null | undefined;
          }>;
          readonly workoutID: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    };
  };
};
export type FinishWorkoutForm_Mutation = {
  response: FinishWorkoutForm_Mutation$data;
  variables: FinishWorkoutForm_Mutation$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Set",
  "kind": "LinkedField",
  "name": "sets",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reps",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "weight",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "duration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "length",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "workoutID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "exerciseID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FinishWorkoutForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Workout",
        "kind": "LinkedField",
        "name": "createWorkoutWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "WorkoutLogConnection",
            "kind": "LinkedField",
            "name": "workoutLogs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "WorkoutLogEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "WorkoutLog",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
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
    "name": "FinishWorkoutForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Workout",
        "kind": "LinkedField",
        "name": "createWorkoutWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "WorkoutLogConnection",
            "kind": "LinkedField",
            "name": "workoutLogs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "WorkoutLogEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "WorkoutLog",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23abffbaf13ffcee46fcb13720056c0f",
    "id": null,
    "metadata": {},
    "name": "FinishWorkoutForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation FinishWorkoutForm_Mutation(\n  $input: CreateWorkoutWithChildrenInput!\n) {\n  createWorkoutWithChildren(input: $input) {\n    id\n    workoutLogs {\n      edges {\n        node {\n          sets {\n            reps\n            weight\n            duration\n            length\n          }\n          workoutID\n          exerciseID\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35f4de5707f636524e72d1c26bee415a";

export default node;
