/**
 * @generated SignedSource<<1bc7ef6423f0088fd5ca503d170bef75>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineIDFinish_Query$variables = {
  routineID: string;
};
export type RoutineIDFinish_Query$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"FinishWorkoutFormFragment">;
  } | null;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null;
};
export type RoutineIDFinish_Query = {
  response: RoutineIDFinish_Query$data;
  variables: RoutineIDFinish_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "routineID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "routineID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
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
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FinishWorkoutFormFragment"
              }
            ],
            "type": "Routine",
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
          (v2/*: any*/)
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
    "cacheID": "6aaa304aebeb7489e0098e93478b46ed",
    "id": null,
    "metadata": {},
    "name": "RoutineIDFinish_Query",
    "operationKind": "query",
    "text": "query RoutineIDFinish_Query(\n  $routineID: ID!\n) {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n  node(id: $routineID) {\n    __typename\n    ... on Routine {\n      ...FinishWorkoutFormFragment\n    }\n    id\n  }\n}\n\nfragment FinishWorkoutFormFragment on Routine {\n  id\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};
})();

(node as any).hash = "cccd3ac9bbb8a63b5113771b6e0da927";

export default node;
