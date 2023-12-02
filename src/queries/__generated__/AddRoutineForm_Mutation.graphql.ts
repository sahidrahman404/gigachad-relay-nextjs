/**
 * @generated SignedSource<<67015237b884a6dea3e549530038bc5d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateRoutineWithChildrenInput = {
  name: string;
  routineExercises?: ReadonlyArray<CreateRoutineExerciseInput> | null;
};
export type CreateRoutineExerciseInput = {
  exerciseID: string;
  restTimer?: string | null;
  sets?: ReadonlyArray<SetInput> | null;
};
export type SetInput = {
  kg?: number | null;
  km?: number | null;
  reps?: number | null;
  set: number;
  time?: string | null;
};
export type AddRoutineForm_Mutation$variables = {
  input: CreateRoutineWithChildrenInput;
};
export type AddRoutineForm_Mutation$data = {
  readonly createRoutineWithChildren: {
    readonly id: string;
    readonly routineExercises: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly exerciseID: string;
          readonly sets: ReadonlyArray<{
            readonly kg: number | null;
            readonly km: number | null;
            readonly reps: number | null;
            readonly set: number;
            readonly time: string | null;
          }>;
        } | null;
      } | null> | null;
    };
  };
};
export type AddRoutineForm_Mutation = {
  response: AddRoutineForm_Mutation$data;
  variables: AddRoutineForm_Mutation$variables;
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
  "kind": "ScalarField",
  "name": "exerciseID",
  "storageKey": null
},
v4 = {
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
      "name": "set",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reps",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddRoutineForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Routine",
        "kind": "LinkedField",
        "name": "createRoutineWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RoutineExerciseConnection",
            "kind": "LinkedField",
            "name": "routineExercises",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RoutineExerciseEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RoutineExercise",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
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
    "name": "AddRoutineForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Routine",
        "kind": "LinkedField",
        "name": "createRoutineWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RoutineExerciseConnection",
            "kind": "LinkedField",
            "name": "routineExercises",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RoutineExerciseEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RoutineExercise",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
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
    "cacheID": "a9a3e8d133ce2b6893e255502f19fd62",
    "id": null,
    "metadata": {},
    "name": "AddRoutineForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation AddRoutineForm_Mutation(\n  $input: CreateRoutineWithChildrenInput!\n) {\n  createRoutineWithChildren(input: $input) {\n    id\n    routineExercises {\n      edges {\n        node {\n          exerciseID\n          sets {\n            set\n            kg\n            time\n            km\n            reps\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f25a3c367f9f387ca75c1e056a6e594";

export default node;
