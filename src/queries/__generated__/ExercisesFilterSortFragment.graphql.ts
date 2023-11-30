/**
 * @generated SignedSource<<068909ce94445355563a26f003447cb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExercisesFilterSortFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupInputFragment">;
  readonly " $fragmentType": "ExercisesFilterSortFragment";
};
export type ExercisesFilterSortFragment$key = {
  readonly " $data"?: ExercisesFilterSortFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFilterSortFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExercisesFilterSortFragment",
  "selections": [
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

(node as any).hash = "b3ec22d7e1df4cc93d08e82c51db9f74";

export default node;
