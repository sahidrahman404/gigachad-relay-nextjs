/**
 * @generated SignedSource<<bd4bf379489105f72017ef63eb4bdcc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type session_Query$variables = {};
export type session_Query$data = {
  readonly viewer: {
    readonly id: string;
  } | null;
};
export type session_Query = {
  response: session_Query$data;
  variables: session_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "session_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "session_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e7ee57f00f3cb381ff97a5b8ad94c159",
    "id": null,
    "metadata": {},
    "name": "session_Query",
    "operationKind": "query",
    "text": "query session_Query {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "bd906e428185a7fe792db0afd7d41516";

export default node;
