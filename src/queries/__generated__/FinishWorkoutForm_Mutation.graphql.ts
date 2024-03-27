/**
 * @generated SignedSource<<096c5b23180ba432d396de1c0cee4842>>
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
  kg?: number | null | undefined;
  km?: number | null | undefined;
  reps?: number | null | undefined;
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
            readonly kg: number | null | undefined;
            readonly km: number | null | undefined;
            readonly reps: number | null | undefined;
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
      "name": "kg",
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
      "name": "km",
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
    "cacheID": "c2d98f8d2bacca1418444dc0747467a0",
    "id": null,
    "metadata": {},
    "name": "FinishWorkoutForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation FinishWorkoutForm_Mutation(\n  $input: CreateWorkoutWithChildrenInput!\n) {\n  createWorkoutWithChildren(input: $input) {\n    id\n    workoutLogs {\n      edges {\n        node {\n          sets {\n            reps\n            kg\n            duration\n            km\n          }\n          workoutID\n          exerciseID\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "80dc2aed9565c730bfc0a97ae281122d";

export default node;
