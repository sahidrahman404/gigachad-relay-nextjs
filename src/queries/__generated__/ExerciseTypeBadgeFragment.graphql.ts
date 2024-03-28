/**
 * @generated SignedSource<<1dcecba072c168422484c9f01fdf1ec5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseTypeBadgeFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly name: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ExerciseTypeBadgeFragment";
};
export type ExerciseTypeBadgeFragment$key = {
  readonly " $data"?: ExerciseTypeBadgeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeBadgeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseTypeBadgeFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ExerciseTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ExerciseType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ExerciseTypeConnection",
  "abstractKey": null
};

(node as any).hash = "23a53ccf49abf0c8c306c1d76afc9da0";

export default node;
