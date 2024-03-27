/**
 * @generated SignedSource<<0e142f40cdc05b5d822c62ae18a1564f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateRoutineWithChildrenInput = {
  name: string;
  reminder?: ReadonlyArray<CreateRoutineReminderInput> | null | undefined;
  routineExercises?: ReadonlyArray<CreateRoutineExerciseInput> | null | undefined;
};
export type CreateRoutineReminderInput = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};
export type CreateRoutineExerciseInput = {
  exerciseID: string;
  restTime?: string | null | undefined;
  sets?: ReadonlyArray<SetInput> | null | undefined;
};
export type SetInput = {
  duration?: string | null | undefined;
  kg?: number | null | undefined;
  km?: number | null | undefined;
  reps?: number | null | undefined;
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
            readonly duration: string | null | undefined;
            readonly kg: number | null | undefined;
            readonly km: number | null | undefined;
            readonly reps: number | null | undefined;
          }>;
        } | null | undefined;
      } | null | undefined> | null | undefined;
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
    "cacheID": "49ed184af2dd36924084954964b766c9",
    "id": null,
    "metadata": {},
    "name": "AddRoutineForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation AddRoutineForm_Mutation(\n  $input: CreateRoutineWithChildrenInput!\n) {\n  createRoutineWithChildren(input: $input) {\n    id\n    routineExercises {\n      edges {\n        node {\n          exerciseID\n          sets {\n            kg\n            duration\n            km\n            reps\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "80b9ccce941d80a2eb584c8d39fe50cc";

export default node;
