/**
 * @generated SignedSource<<7e9459534a23453a22e29dcfeb5a8d25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineIDFinish_Query$variables = Record<PropertyKey, never>;
export type RoutineIDFinish_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null | undefined;
};
export type RoutineIDFinish_Query = {
  response: RoutineIDFinish_Query$data;
  variables: RoutineIDFinish_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutineIDFinish_Query",
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RoutineIDFinish_Query",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23ca5b52c44e67dcd2c700ed66e72c2d",
    "id": null,
    "metadata": {},
    "name": "RoutineIDFinish_Query",
    "operationKind": "query",
    "text": "query RoutineIDFinish_Query {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};

(node as any).hash = "650be8c3009711eba9c43ed8a26343b8";

export default node;
