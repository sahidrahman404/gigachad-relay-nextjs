/**
 * @generated SignedSource<<bd664f6cdfbb65e5a13d8aadfc75920b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineExerciseFieldArrayFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseSelectInputFragment" | "RoutineExerciseSetsFieldFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoutineExerciseSetsFieldFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "dc68cce2fad881ff93c261c2e851d4d7";

export default node;
