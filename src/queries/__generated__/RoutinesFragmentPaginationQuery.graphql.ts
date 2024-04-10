/**
 * @generated SignedSource<<55d7ec09c3c0972c9b8290433da74cbe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type RoutinesFragmentPaginationQuery$variables = {
  count?: number | null | undefined;
  cursor?: any | null | undefined;
  id: string;
  orderby?: OrderDirection | null | undefined;
};
export type RoutinesFragmentPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"RoutinesFragment">;
  } | null | undefined;
};
export type RoutinesFragmentPaginationQuery = {
  response: RoutinesFragmentPaginationQuery$data;
  variables: RoutinesFragmentPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 4,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": "DESC",
  "kind": "LocalArgument",
  "name": "orderby"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutinesFragmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              {
                "kind": "Variable",
                "name": "orderby",
                "variableName": "orderby"
              }
            ],
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RoutinesFragmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          (v6/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "orderBy",
                                "value": {
                                  "direction": "ASC",
                                  "field": "Order"
                                }
                              }
                            ],
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
                                          (v8/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v6/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "routineExercises(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
                      (v10/*: any*/),
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "RoutinesFragment_routines",
                "kind": "LinkedHandle",
                "name": "routines"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
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
                          (v6/*: any*/),
                          (v8/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
                      (v11/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "exercises(first:1)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ExercisesFragment_exercises",
                "kind": "LinkedHandle",
                "name": "exercises"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1bbe06193d60698c165e2fb25b92f778",
    "id": null,
    "metadata": {},
    "name": "RoutinesFragmentPaginationQuery",
    "operationKind": "query",
    "text": "query RoutinesFragmentPaginationQuery(\n  $count: Int = 4\n  $cursor: Cursor\n  $orderby: OrderDirection = DESC\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RoutinesFragment_2GViAS\n    id\n  }\n}\n\nfragment RoutineFragment on Routine {\n  id\n  name\n  routineExercises(orderBy: {direction: ASC, field: Order}) {\n    edges {\n      node {\n        exercises {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment RoutinesEmptyStateFragment on User {\n  exercises(first: 1) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RoutinesFragment_2GViAS on User {\n  id\n  routines(after: $cursor, first: $count, orderBy: {direction: $orderby, field: ID}) {\n    edges {\n      node {\n        id\n        ...RoutineFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  ...RoutinesEmptyStateFragment\n}\n"
  }
};
})();

(node as any).hash = "e162ee841a44bd5276818a9c42f460d8";

export default node;
