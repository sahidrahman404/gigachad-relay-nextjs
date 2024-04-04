/**
 * @generated SignedSource<<d8caf593167f00ddbfe11b2f257a4fa4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useStartWorkoutFormFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly reminderID: string | null | undefined;
  readonly reminders: ReadonlyArray<{
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
  }> | null | undefined;
  readonly routineExercises: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly exercises: {
          readonly exerciseTypes: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly name: string;
              } | null | undefined;
            } | null | undefined> | null | undefined;
          };
          readonly id: string;
          readonly name: string;
        };
        readonly restTime: string | null | undefined;
        readonly sets: ReadonlyArray<{
          readonly duration: string | null | undefined;
          readonly length: number | null | undefined;
          readonly reps: number | null | undefined;
          readonly weight: number | null | undefined;
        }>;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "useStartWorkoutFormFragment";
};
export type useStartWorkoutFormFragment$key = {
  readonly " $data"?: useStartWorkoutFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useStartWorkoutFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useStartWorkoutFormFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
                    (v0/*: any*/),
                    (v1/*: any*/),
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
                                (v1/*: any*/)
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
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "routineExercises(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
    }
  ],
  "type": "Routine",
  "abstractKey": null
};
})();

(node as any).hash = "cb355f139499ebc8e005c53ae688d959";

export default node;
