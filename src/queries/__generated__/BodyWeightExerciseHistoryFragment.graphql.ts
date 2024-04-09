/**
 * @generated SignedSource<<31835fb65fb08e5e5d76bf3bc7f163e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BodyWeightExerciseHistoryFragment$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly sets: ReadonlyArray<{
    readonly reps: number | null | undefined;
  }>;
  readonly workouts: {
    readonly name: string;
  };
  readonly " $fragmentType": "BodyWeightExerciseHistoryFragment";
};
export type BodyWeightExerciseHistoryFragment$key = {
  readonly " $data"?: BodyWeightExerciseHistoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BodyWeightExerciseHistoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BodyWeightExerciseHistoryFragment",
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
    }
  ],
  "type": "WorkoutLog",
  "abstractKey": null
};

(node as any).hash = "6934568a06f349149f941082eb1eaa83";

export default node;
