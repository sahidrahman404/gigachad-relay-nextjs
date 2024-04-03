/**
 * @generated SignedSource<<b6551e35128e85e1bdf90d4ed6785ae1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditRoutineFormFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RoutineExerciseFieldArrayFragment">;
  readonly " $fragmentType": "EditRoutineFormFragment";
};
export type EditRoutineFormFragment$key = {
  readonly " $data"?: EditRoutineFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditRoutineFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditRoutineFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoutineExerciseFieldArrayFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5ae75a5d3192f9e4d3dd01fe57442053";

export default node;
