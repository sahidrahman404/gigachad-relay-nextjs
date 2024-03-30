/**
 * @generated SignedSource<<3f76ae862903f18204af0e785d9e7148>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditExerciseFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupInputFragment">;
  readonly " $fragmentType": "EditExerciseFormFragment";
};
export type EditExerciseFormFragment$key = {
  readonly " $data"?: EditExerciseFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditExerciseFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditExerciseFormFragment",
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

(node as any).hash = "2274bf5b8c4f21395ef11ffca970f8a7";

export default node;
