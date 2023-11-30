/**
 * @generated SignedSource<<a843ef1bd39a666c1b8a5982ffdecea9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MusclesGroupFragment$data = {
  readonly musclesGroups: {
    readonly __id: string;
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
  readonly " $fragmentType": "MusclesGroupFragment";
};
export type MusclesGroupFragment$key = {
  readonly " $data"?: MusclesGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupFragment">;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: "Fragment",
  metadata: {
    connection: [
      {
        count: null,
        cursor: null,
        direction: "forward",
        path: ["musclesGroups"],
      },
    ],
  },
  name: "MusclesGroupFragment",
  selections: [
    {
      alias: "musclesGroups",
      args: null,
      concreteType: "MusclesGroupConnection",
      kind: "LinkedField",
      name: "__test__musclesGroups_connection",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MusclesGroupEdge",
          kind: "LinkedField",
          name: "edges",
          plural: true,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MusclesGroup",
              kind: "LinkedField",
              name: "node",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "image",
                  plural: false,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ImageFragment",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "PageInfo",
          kind: "LinkedField",
          name: "pageInfo",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "endCursor",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hasNextPage",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__id",
              storageKey: null,
            },
          ],
        },
      ],
      storageKey: null,
    },
  ],
  type: "Query",
  abstractKey: null,
};

(node as any).hash = "c23ea61a5da78f006e6746ec0fbdde13";

export default node;
