/**
 * @generated SignedSource<<0819ea4c5f38c0128bc1b392e69b2fd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseID_Query$variables = {
  exerciseID: string;
};
export type ExerciseID_Query$data = {
  readonly node: {
    readonly id?: string;
  } | null | undefined;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null | undefined;
};
export type ExerciseID_Query = {
  response: ExerciseID_Query$data;
  variables: ExerciseID_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "exerciseID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "exerciseID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExerciseID_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useAuthRedirectFragment"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "Exercise",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExerciseID_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "031233dd723fe7abb4753cac0b93474e",
    "id": null,
    "metadata": {},
    "name": "ExerciseID_Query",
    "operationKind": "query",
    "text": "query ExerciseID_Query(\n  $exerciseID: ID!\n) {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n  node(id: $exerciseID) {\n    __typename\n    ... on Exercise {\n      id\n    }\n    id\n  }\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};
})();

(node as any).hash = "cbf4e4d3ff04b2669ca2632acacbadf0";

export default node;
