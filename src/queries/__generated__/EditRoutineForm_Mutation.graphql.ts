/**
 * @generated SignedSource<<6bdc5b6e98c4aad76c71571e9e84b000>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateRoutineWithChildrenInput = {
  id: string;
  name: string;
  reminders?: UpdateRoutineReminderInput | null | undefined;
  routineExercises?: ReadonlyArray<UpdateRoutineExerciseInput> | null | undefined;
};
export type UpdateRoutineReminderInput = {
  id?: string | null | undefined;
  reminders?: ReadonlyArray<ReminderInput> | null | undefined;
};
export type ReminderInput = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};
export type UpdateRoutineExerciseInput = {
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
export type EditRoutineForm_Mutation$variables = {
  input: UpdateRoutineWithChildrenInput;
};
export type EditRoutineForm_Mutation$data = {
  readonly updateRoutineWithChildren: {
    readonly " $fragmentSpreads": FragmentRefs<"RoutineFragment" | "useStartWorkoutFormFragment">;
  };
};
export type EditRoutineForm_Mutation = {
  response: EditRoutineForm_Mutation$data;
  variables: EditRoutineForm_Mutation$variables;
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
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditRoutineForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Routine",
        "kind": "LinkedField",
        "name": "updateRoutineWithChildren",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useStartWorkoutFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RoutineFragment"
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
    "name": "EditRoutineForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Routine",
        "kind": "LinkedField",
        "name": "updateRoutineWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reminderID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Reminder",
            "kind": "LinkedField",
            "name": "reminders",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "day",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hour",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "minute",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "second",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "direction": "ASC",
                  "field": "Order"
                }
              }
            ],
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
                      {
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "restTime",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Exercise",
                        "kind": "LinkedField",
                        "name": "exercises",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ExerciseTypeConnection",
                            "kind": "LinkedField",
                            "name": "exerciseTypes",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExerciseTypeEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExerciseType",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v3/*: any*/),
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
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "routineExercises(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3596c1e91a55061ab585cfeaaca8d67c",
    "id": null,
    "metadata": {},
    "name": "EditRoutineForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation EditRoutineForm_Mutation(\n  $input: UpdateRoutineWithChildrenInput!\n) {\n  updateRoutineWithChildren(input: $input) {\n    ...useStartWorkoutFormFragment\n    ...RoutineFragment\n    id\n  }\n}\n\nfragment RoutineFragment on Routine {\n  id\n  name\n  routineExercises(orderBy: {direction: ASC, field: Order}) {\n    edges {\n      node {\n        exercises {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment useStartWorkoutFormFragment on Routine {\n  id\n  name\n  reminderID\n  reminders {\n    day\n    hour\n    minute\n    second\n  }\n  routineExercises(orderBy: {direction: ASC, field: Order}) {\n    edges {\n      node {\n        sets {\n          reps\n          kg\n          duration\n          km\n        }\n        restTime\n        exercises {\n          id\n          name\n          exerciseTypes {\n            edges {\n              node {\n                name\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "12b1466e78c8edb31db5d48d42421125";

export default node;
