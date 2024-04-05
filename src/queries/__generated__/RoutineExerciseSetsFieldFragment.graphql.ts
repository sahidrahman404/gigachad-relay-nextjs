/**
 * @generated SignedSource<<e16f3bacce6f9d8d7010ce4d86c4a34f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RoutineExerciseSetsFieldFragment$data = {
  readonly unit: UserUnit;
  readonly " $fragmentType": "RoutineExerciseSetsFieldFragment";
};
export type RoutineExerciseSetsFieldFragment$key = {
  readonly " $data"?: RoutineExerciseSetsFieldFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoutineExerciseSetsFieldFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoutineExerciseSetsFieldFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unit",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "96305212db14fea1f6c57a45108b2e7b";

export default node;
