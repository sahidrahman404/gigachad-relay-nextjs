/**
 * @generated SignedSource<<23004bb3c04296eba567ec57083a268f>>
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
  readonly routineExercises: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly exercises: {
          readonly exerciseTypes: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly name: string;
              } | null;
            } | null> | null;
          };
          readonly id: string;
          readonly name: string;
        };
        readonly restTimer: string | null;
        readonly sets: ReadonlyArray<{
          readonly duration: string | null;
          readonly kg: number | null;
          readonly km: number | null;
          readonly reps: number | null;
        }>;
      } | null;
    } | null> | null;
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
                  "name": "restTimer",
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
      "storageKey": null
    }
  ],
  "type": "Routine",
  "abstractKey": null
};
})();

(node as any).hash = "9859d117f7ca5dbba5b821147c1dea19";

export default node;
