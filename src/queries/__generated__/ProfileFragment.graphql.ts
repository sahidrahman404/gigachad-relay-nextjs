/**
 * @generated SignedSource<<b879498305195463eb7e0e8ca56a7fff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ProfileFragment$data = {
  readonly name: string;
  readonly unit: UserUnit;
  readonly " $fragmentType": "ProfileFragment";
};
export type ProfileFragment$key = {
  readonly " $data"?: ProfileFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
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

(node as any).hash = "7161e2f358e7ebaa88a75527a97e8eff";

export default node;
