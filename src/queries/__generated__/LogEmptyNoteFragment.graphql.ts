/**
 * @generated SignedSource<<c6ed91ccc04db64619d2b3a121013715>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LogEmptyNoteFragment$data = {
  readonly description: string | null | undefined;
  readonly " $fragmentType": "LogEmptyNoteFragment";
};
export type LogEmptyNoteFragment$key = {
  readonly " $data"?: LogEmptyNoteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogEmptyNoteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LogEmptyNoteFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Workout",
  "abstractKey": null
};

(node as any).hash = "b2ee643da8f00821858966f1b15547e4";

export default node;
