/**
 * @generated SignedSource<<46351f33244efea769e76a235629ebdc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExercisesFilterSortAriaFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupSelectInputFragment">;
  readonly " $fragmentType": "ExercisesFilterSortAriaFragment";
};
export type ExercisesFilterSortAriaFragment$key = {
  readonly " $data"?: ExercisesFilterSortAriaFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFilterSortAriaFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExercisesFilterSortAriaFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MusclesGroupSelectInputFragment"
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

(node as any).hash = "f3f9e5822a22ef9212d4c6c068a83f1c";

export default node;
