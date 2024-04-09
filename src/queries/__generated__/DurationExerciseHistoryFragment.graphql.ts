/**
 * @generated SignedSource<<3a229b4d813bd7139cf0442d5822f4c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DurationExerciseHistoryFragment$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly sets: ReadonlyArray<{
    readonly duration: string | null | undefined;
  }>;
  readonly workouts: {
    readonly name: string;
  };
  readonly " $fragmentType": "DurationExerciseHistoryFragment";
};
export type DurationExerciseHistoryFragment$key = {
  readonly " $data"?: DurationExerciseHistoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DurationExerciseHistoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DurationExerciseHistoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
          "name": "duration",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "WorkoutLog",
  "abstractKey": null
};

(node as any).hash = "833ca1d47ccc8f71fd07c1ecb946c7f2";

export default node;
