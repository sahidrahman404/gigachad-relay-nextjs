/**
 * @generated SignedSource<<d456b6351318b4c1f92bdb508bb9d74d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutinesFragment$data = {
  readonly id: string;
  readonly routines: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"RoutineFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentSpreads": FragmentRefs<"RoutinesEmptyStateFragment">;
  readonly " $fragmentType": "RoutinesFragment";
};
export type RoutinesFragment$key = {
  readonly " $data"?: RoutinesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoutinesFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "routines"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 4,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": "DESC",
      "kind": "LocalArgument",
      "name": "orderby"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RoutinesFragmentPaginationQuery.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RoutinesFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "routines",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "direction",
              "variableName": "orderby"
            },
            {
              "kind": "Literal",
              "name": "field",
              "value": "ID"
            }
          ],
          "kind": "ObjectValue",
          "name": "orderBy"
        }
      ],
      "concreteType": "RoutineConnection",
      "kind": "LinkedField",
      "name": "__RoutinesFragment_routines_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RoutineEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Routine",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RoutineFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoutinesEmptyStateFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "e162ee841a44bd5276818a9c42f460d8";

export default node;
