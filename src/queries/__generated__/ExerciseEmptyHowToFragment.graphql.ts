/**
 * @generated SignedSource<<b1a238e0856d091af2bb3bf1e34d1c80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseEmptyHowToFragment$data = {
  readonly howTo: string | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "ExerciseEmptyHowToFragment";
};
export type ExerciseEmptyHowToFragment$key = {
  readonly " $data"?: ExerciseEmptyHowToFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseEmptyHowToFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseEmptyHowToFragment",
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
      "name": "howTo",
      "storageKey": null
    }
  ],
  "type": "Exercise",
  "abstractKey": null
};

(node as any).hash = "b8e7c512bfa9b312370718a87f6adf51";

export default node;
