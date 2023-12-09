/**
 * @generated SignedSource<<cd930f07fa72f315deebe31491a07b83>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineExerciseFieldArrayFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseSelectInputFragment">;
  readonly " $fragmentType": "RoutineExerciseFieldArrayFragment";
};
export type RoutineExerciseFieldArrayFragment$key = {
  readonly " $data"?: RoutineExerciseFieldArrayFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoutineExerciseFieldArrayFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoutineExerciseFieldArrayFragment",
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

(node as any).hash = "561fad0499e1fc7ea6fae8d11851b8e6";

export default node;
