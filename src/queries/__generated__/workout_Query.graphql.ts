/**
 * @generated SignedSource<<5ecea61d95fe8d5af6093e9f36d1902d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type workout_Query$variables = {};
export type workout_Query$data = {
  readonly routines: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      } | null;
    } | null> | null;
  };
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null;
};
export type workout_Query = {
  response: workout_Query$data;
  variables: workout_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "RoutineConnection",
  "kind": "LinkedField",
  "name": "routines",
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
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "workout_Query",
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
      (v1/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "workout_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "cacheID": "485b4c1fa1d489f8de579f8ebbedc433",
    "id": null,
    "metadata": {},
    "name": "workout_Query",
    "operationKind": "query",
    "text": "query workout_Query {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n  routines {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};
})();

(node as any).hash = "b83ce8c9f1cc51da15794c8236ee048e";

export default node;
