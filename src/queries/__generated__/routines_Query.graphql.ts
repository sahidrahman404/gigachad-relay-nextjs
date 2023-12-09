/**
 * @generated SignedSource<<f6c41a497c13f2fdd92bdd3f73f71f25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type routines_Query$variables = {};
export type routines_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"RoutinesFragment" | "useAuthRedirectFragment">;
  } | null;
};
export type routines_Query = {
  response: routines_Query$data;
  variables: routines_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
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
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routines_Query",
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
            "name": "RoutinesFragment"
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
    "name": "routines_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RoutineExerciseConnection",
                        "kind": "LinkedField",
                        "name": "routineExercises",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "RoutineExerciseEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RoutineExercise",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Exercise",
                                    "kind": "LinkedField",
                                    "name": "exercises",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v0/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v0/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "routines(first:4)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RoutinesFragment_routines",
            "kind": "LinkedHandle",
            "name": "routines"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "ExerciseConnection",
            "kind": "LinkedField",
            "name": "exercises",
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
                      (v0/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "exercises(first:1)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ExercisesFragment_exercises",
            "kind": "LinkedHandle",
            "name": "exercises"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "87022574a40856ca0244ce2b6f2d20ce",
    "id": null,
    "metadata": {},
    "name": "routines_Query",
    "operationKind": "query",
    "text": "query routines_Query {\n  viewer {\n    ...useAuthRedirectFragment\n    ...RoutinesFragment\n    id\n  }\n}\n\nfragment RoutineFragment on Routine {\n  id\n  name\n  routineExercises {\n    edges {\n      node {\n        exercises {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment RoutinesEmptyStateFragment on User {\n  exercises(first: 1) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RoutinesFragment on User {\n  id\n  routines(first: 4) {\n    edges {\n      node {\n        id\n        ...RoutineFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...RoutinesEmptyStateFragment\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};
})();

(node as any).hash = "f96eda9ace859f78ffcf3ee9c528e09b";

export default node;
