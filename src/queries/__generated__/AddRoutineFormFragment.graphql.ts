/**
 * @generated SignedSource<<7387239c26965f618fb169dfa706742a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddRoutineFormFragment$data = {
  readonly id: string;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoutineExerciseFieldArrayFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5e5fa3d888a37ebef44a6b105589c065";

export default node;
