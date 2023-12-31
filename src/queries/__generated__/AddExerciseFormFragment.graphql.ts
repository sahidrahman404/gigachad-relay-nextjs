/**
 * @generated SignedSource<<9617fa7f26b31b768154a1f5506fcd54>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddExerciseFormFragment$data = {
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

(node as any).hash = "0f0ff0f36ed5515c654c872ea401bf5e";

export default node;
