/**
 * @generated SignedSource<<be54e3e4685b960246522fb9d74c41e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateRoutineWithChildrenInput = {
  name: string;
  reminders?: ReadonlyArray<ReminderInput> | null | undefined;
  routineExercises?: ReadonlyArray<RoutineExerciseInput> | null | undefined;
};
export type ReminderInput = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};
export type RoutineExerciseInput = {
  exerciseID: string;
  exerciseName: string;
  restTime?: string | null | undefined;
  sets?: ReadonlyArray<SetInput> | null | undefined;
};
export type SetInput = {
  duration?: string | null | undefined;
  length?: number | null | undefined;
  reps?: number | null | undefined;
  weight?: number | null | undefined;
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
            readonly length: number | null | undefined;
            readonly reps: number | null | undefined;
            readonly weight: number | null | undefined;
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
    "cacheID": "c65f7f3d00bb2cc0f7f05a635a814e57",
    "id": null,
    "metadata": {},
    "name": "AddRoutineForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation AddRoutineForm_Mutation(\n  $input: CreateRoutineWithChildrenInput!\n) {\n  createRoutineWithChildren(input: $input) {\n    id\n    routineExercises {\n      edges {\n        node {\n          exerciseID\n          sets {\n            weight\n            duration\n            length\n            reps\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a65c15d2601b9562107e90fe672c868c";

export default node;
