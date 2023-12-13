/**
 * @generated SignedSource<<1ed8ae31e8a6cc0ef632ab8635f2a1ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StartWorkoutFormFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"useStartWorkoutFormFragment">;
  readonly " $fragmentType": "StartWorkoutFormFragment";
};
export type StartWorkoutFormFragment$key = {
  readonly " $data"?: StartWorkoutFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StartWorkoutFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StartWorkoutFormFragment",
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
      "name": "useStartWorkoutFormFragment"
    }
  ],
  "type": "Routine",
  "abstractKey": null
};

(node as any).hash = "7fa8f7f722b23ef8fc82dfee13d26359";

export default node;
