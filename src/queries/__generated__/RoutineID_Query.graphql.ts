/**
 * @generated SignedSource<<d008f748c0f940bd8d664ecf5ac335c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineID_Query$variables = {};
export type RoutineID_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null;
};
export type RoutineID_Query = {
  response: RoutineID_Query$data;
  variables: RoutineID_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutineID_Query",
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
    "name": "RoutineID_Query",
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
    "cacheID": "ab2274c823f42ee2002ae1e87687d9ba",
    "id": null,
    "metadata": {},
    "name": "RoutineID_Query",
    "operationKind": "query",
    "text": "query RoutineID_Query {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};

(node as any).hash = "3eaa7074d215b9e56956433f5c674d7d";

export default node;
