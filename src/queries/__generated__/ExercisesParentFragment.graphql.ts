/**
 * @generated SignedSource<<95a4c4e216691076e2650bc3340ed08d>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFilterSortAriaFragment">;
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
      "name": "ExercisesFilterSortAriaFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f58855756c91a069c44f58b72a3fc3e7";

export default node;
