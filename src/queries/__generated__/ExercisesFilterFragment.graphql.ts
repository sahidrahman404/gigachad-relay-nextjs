/**
 * @generated SignedSource<<fbb187dfffa916a44004d6ff3a6b1977>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExercisesFilterFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupInputFragment">;
  readonly " $fragmentType": "ExercisesFilterFragment";
};
export type ExercisesFilterFragment$key = {
  readonly " $data"?: ExercisesFilterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFilterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExercisesFilterFragment",
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

(node as any).hash = "3ee013fe018ba66ae7bdff15a4167bc0";

export default node;
