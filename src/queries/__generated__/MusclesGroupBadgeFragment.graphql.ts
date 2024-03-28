/**
 * @generated SignedSource<<dec948cdda66aae9836a6542bc2751fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MusclesGroupBadgeFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly name: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "MusclesGroupBadgeFragment";
};
export type MusclesGroupBadgeFragment$key = {
  readonly " $data"?: MusclesGroupBadgeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupBadgeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MusclesGroupBadgeFragment",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MusclesGroupConnection",
  "abstractKey": null
};

(node as any).hash = "74edd90ba119db86a6c9080329e49392";

export default node;
