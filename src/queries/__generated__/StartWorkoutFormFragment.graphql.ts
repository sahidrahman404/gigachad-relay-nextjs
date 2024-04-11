/**
 * @generated SignedSource<<d4e04bc821394c2f0c87e2e2013057aa>>
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
  readonly name: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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

(node as any).hash = "1818b127620d0e272e40ad0317ea7037";

export default node;
