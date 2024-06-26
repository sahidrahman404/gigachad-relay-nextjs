/**
 * @generated SignedSource<<c15305c7ffbcc045a4df399bdc3bb07b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseHistoryCardFragment$data = {
  readonly exercises: {
    readonly exerciseTypes: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly name: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    };
    readonly image: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
    } | null | undefined;
    readonly name: string;
  };
  readonly workouts: {
    readonly createdAt: any;
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BodyWeightExerciseHistoryFragment" | "DurationExerciseHistoryFragment" | "WeightExerciseHistoryFragment">;
  readonly " $fragmentType": "ExerciseHistoryCardFragment";
};
export type ExerciseHistoryCardFragment$key = {
  readonly " $data"?: ExerciseHistoryCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseHistoryCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
  "name": "ExerciseHistoryCardFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WeightExerciseHistoryFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DurationExerciseHistoryFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BodyWeightExerciseHistoryFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Workout",
      "kind": "LinkedField",
      "name": "workouts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
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
        {
          "alias": null,
          "args": null,
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ImageFragment"
            }
          ],
          "storageKey": null
        },
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
                    (v0/*: any*/)
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
  "type": "WorkoutLog",
  "abstractKey": null
};
})();

(node as any).hash = "41e3f42956215338f4fb09770f02057a";

export default node;
