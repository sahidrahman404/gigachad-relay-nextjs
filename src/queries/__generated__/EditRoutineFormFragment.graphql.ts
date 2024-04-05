/**
 * @generated SignedSource<<4aa96f3fa13164bf01ec8f31bf87f661>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EditRoutineFormFragment$data = {
  readonly id: string;
  readonly unit: UserUnit;
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

(node as any).hash = "3ff20f93b03eb878d3352c7be7b1f6b9";

export default node;
