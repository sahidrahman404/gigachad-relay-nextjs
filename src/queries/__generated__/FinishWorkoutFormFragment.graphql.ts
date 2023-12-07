/**
 * @generated SignedSource<<746cce6ef89a14101cb861f60c1047f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FinishWorkoutFormFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "FinishWorkoutFormFragment";
};
export type FinishWorkoutFormFragment$key = {
  readonly " $data"?: FinishWorkoutFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FinishWorkoutFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FinishWorkoutFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Routine",
  "abstractKey": null
};

(node as any).hash = "2264667ca12035c8b98f7bd711677974";

export default node;
