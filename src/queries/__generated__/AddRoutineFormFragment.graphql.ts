/**
 * @generated SignedSource<<4a2d15ec243a3f44cc600d0fa7df865e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddRoutineFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseSelectInputFragment">;
  readonly " $fragmentType": "AddRoutineFormFragment";
};
export type AddRoutineFormFragment$key = {
  readonly " $data"?: AddRoutineFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AddRoutineFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddRoutineFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExerciseSelectInputFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5750566b445b6a69397ff14b2cbdefc6";

export default node;
