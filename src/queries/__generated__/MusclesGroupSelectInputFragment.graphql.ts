/**
 * @generated SignedSource<<772148574843a4da344fd3398494790b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MusclesGroupSelectInputFragment$data = {
  readonly musclesGroups: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly image: {
          readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
        } | null;
        readonly name: string;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "MusclesGroupSelectInputFragment";
};
export type MusclesGroupSelectInputFragment$key = {
  readonly " $data"?: MusclesGroupSelectInputFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupSelectInputFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MusclesGroupSelectInputFragment",
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

(node as any).hash = "f85c73938945c902d182d43fd9dabdc5";

export default node;
