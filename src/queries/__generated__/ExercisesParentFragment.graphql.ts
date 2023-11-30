/**
 * @generated SignedSource<<64665d94769a3ebd533e7594f6528361>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExercisesParentFragment$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ExercisesFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFilterSortFragment">;
  readonly " $fragmentType": "ExercisesParentFragment";
};
export type ExercisesParentFragment$key = {
  readonly " $data"?: ExercisesParentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesParentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExercisesParentFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExercisesFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExercisesFilterSortFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "c440822d420e572ff32b9cac56219593";

export default node;
