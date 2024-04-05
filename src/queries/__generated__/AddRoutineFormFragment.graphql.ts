/**
 * @generated SignedSource<<9e19f9a4f18fb1b131c5b52f8dda8efc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AddRoutineFormFragment$data = {
  readonly id: string;
  readonly unit: UserUnit;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unit",
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

(node as any).hash = "3170780b6815d0f34ae4d368a6c58d87";

export default node;
