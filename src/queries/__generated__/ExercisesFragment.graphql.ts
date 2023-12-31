/**
 * @generated SignedSource<<d4e51533583708f2d3a3fce193c76685>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExercisesFragment$data = {
  readonly exercises: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    };
  };
  readonly id: string;
  readonly " $fragmentType": "ExercisesFragment";
};
export type ExercisesFragment$key = {
  readonly " $data"?: ExercisesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "exercises"
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
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "exerciseTypeWhereInput"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "musclesGroupWhereInput"
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
      "operation": require('./ExercisesFragmentPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ExercisesFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "exercises",
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
        },
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "hasExerciseTypesWith",
              "variableName": "exerciseTypeWhereInput"
            },
            {
              "kind": "Variable",
              "name": "hasMusclesGroupsWith",
              "variableName": "musclesGroupWhereInput"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "ExerciseConnection",
      "kind": "LinkedField",
      "name": "__ExercisesFragment_exercises_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ExerciseEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Exercise",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ExerciseFragment"
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
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "981628dae6ccd7f6685ef8d9ab0e04ae";

export default node;
