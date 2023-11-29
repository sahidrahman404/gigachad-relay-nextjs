/**
 * @generated SignedSource<<2c49f9a6d36b01c015f2ae09a694ff36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddExerciseFormFragment$data = {
  readonly viewer: {
    readonly id: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupInputFragment">;
  readonly " $fragmentType": "AddExerciseFormFragment";
};
export type AddExerciseFormFragment$key = {
  readonly " $data"?: AddExerciseFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AddExerciseFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddExerciseFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MusclesGroupInputFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExerciseTypeInputFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "5b80ba593b97f9d1d177c11ea7fe10ef";

export default node;
