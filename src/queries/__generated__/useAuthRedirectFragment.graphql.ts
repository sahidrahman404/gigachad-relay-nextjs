/**
 * @generated SignedSource<<558807797482e166ed5f86e9d2862398>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAuthRedirectFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "useAuthRedirectFragment";
};
export type useAuthRedirectFragment$key = {
  readonly " $data"?: useAuthRedirectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: "Fragment",
  metadata: null,
  name: "useAuthRedirectFragment",
  selections: [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
  ],
  type: "User",
  abstractKey: null,
};

(node as any).hash = "1847e189bb93c2c217a294212e6c60c1";

export default node;
