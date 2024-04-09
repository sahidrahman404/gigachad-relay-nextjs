/**
 * @generated SignedSource<<76b199b4aff135bf1375e42564724c7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type WeightExerciseHistoryFragment$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly sets: ReadonlyArray<{
    readonly reps: number | null | undefined;
    readonly weight: number | null | undefined;
  }>;
  readonly users: {
    readonly unit: UserUnit;
  };
  readonly workouts: {
    readonly name: string;
  };
  readonly " $fragmentType": "WeightExerciseHistoryFragment";
};
export type WeightExerciseHistoryFragment$key = {
  readonly " $data"?: WeightExerciseHistoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WeightExerciseHistoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WeightExerciseHistoryFragment",
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
          "name": "weight",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "users",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "unit",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "WorkoutLog",
  "abstractKey": null
};

(node as any).hash = "d4514bfa0fcf2ac3d8296909450c30cb";

export default node;
