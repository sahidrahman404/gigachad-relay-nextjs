/**
 * @generated SignedSource<<eb29e3e1b821daf02ee0fb7588d741d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddExerciseFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeInputFragment" | "MusclesGroupSelectInputFragment">;
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

(node as any).hash = "a8360ac776444539e7a20ed71adee736";

export default node;
