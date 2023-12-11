/**
 * @generated SignedSource<<d8ced058e1775e6c7cac419d349f6a02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StartWorkoutFormFragment$data = {
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
        readonly sets: ReadonlyArray<{
          readonly duration: string | null;
          readonly kg: number | null;
          readonly km: number | null;
          readonly reps: number | null;
        }>;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "StartWorkoutFormFragment";
};
export type StartWorkoutFormFragment$key = {
  readonly " $data"?: StartWorkoutFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StartWorkoutFormFragment">;
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
  "name": "StartWorkoutFormFragment",
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

(node as any).hash = "1f8e40b5bffc9dbb411ba0bf5b3c9a1c";

export default node;
