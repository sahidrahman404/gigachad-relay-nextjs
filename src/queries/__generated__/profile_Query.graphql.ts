/**
 * @generated SignedSource<<a7157c382beb12cf992aa9cf5b5bd949>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profile_Query$variables = Record<PropertyKey, never>;
export type profile_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ProfileFragment" | "useAuthRedirectFragment">;
  } | null | undefined;
};
export type profile_Query = {
  response: profile_Query$data;
  variables: profile_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "profile_Query",
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfileFragment"
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
    "name": "profile_Query",
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
            "kind": "ScalarField",
            "name": "unit",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "31d9728aba61a5f3db04825bbe9e0a14",
    "id": null,
    "metadata": {},
    "name": "profile_Query",
    "operationKind": "query",
    "text": "query profile_Query {\n  viewer {\n    ...useAuthRedirectFragment\n    ...ProfileFragment\n    id\n  }\n}\n\nfragment ProfileFragment on User {\n  name\n  unit\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};

(node as any).hash = "66b40e61692239ec62ae92d06ac8467b";

export default node;
