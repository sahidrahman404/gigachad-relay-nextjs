/**
 * @generated SignedSource<<523875cec58fc0f50daffd0281387399>>
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
            readonly kg: number | null;
            readonly km: number | null;
            readonly reps: number | null;
            readonly time: string | null;
          }>;
          readonly workoutID: string;
        } | null;
      } | null> | null;
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
      "name": "time",
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
    "cacheID": "b4b7a7df255c88e498caab92a9d47fa2",
    "id": null,
    "metadata": {},
    "name": "FinishWorkoutForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation FinishWorkoutForm_Mutation(\n  $input: CreateWorkoutWithChildrenInput!\n) {\n  createWorkoutWithChildren(input: $input) {\n    id\n    workoutLogs {\n      edges {\n        node {\n          sets {\n            reps\n            kg\n            time\n            km\n          }\n          workoutID\n          exerciseID\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f2580a490804ff97635e236cfc7f409";

export default node;
