/**
 * @generated SignedSource<<ae7b7d6105e73fbe7329d68c24b6a175>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MusclesGroupInputFragment$data = {
  readonly musclesGroups: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly image: {
          readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
        } | null | undefined;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "MusclesGroupInputFragment";
};
export type MusclesGroupInputFragment$key = {
  readonly " $data"?: MusclesGroupInputFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupInputFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MusclesGroupInputFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MusclesGroupConnection",
      "kind": "LinkedField",
      "name": "musclesGroups",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MusclesGroupEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "MusclesGroup",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "image",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ImageFragment"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "58edca67800d1bccf7f1c4f6fc3d38d1";

export default node;
