/**
 * @generated SignedSource<<8234f6bea9657b999c9ff502aa91e7ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddRoutineFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RoutineExerciseFieldArrayFragment">;
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
      "name": "RoutineExerciseFieldArrayFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "58cdd88c4330c8bd02c429a4f052422e";

export default node;
