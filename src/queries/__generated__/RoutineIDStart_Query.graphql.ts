/**
 * @generated SignedSource<<fa6943cdf972d1b265108fc1e7fbece8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
export type RoutineIDStart_Query$variables = {
  routineID: string;
};
export type RoutineIDStart_Query$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"StartWorkoutFormFragment">;
  } | null | undefined;
  readonly viewer: {
    readonly unit: UserUnit;
    readonly " $fragmentSpreads": FragmentRefs<"useAuthRedirectFragment">;
  } | null | undefined;
};
export type RoutineIDStart_Query = {
  response: RoutineIDStart_Query$data;
  variables: RoutineIDStart_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "routineID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unit",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "routineID"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutineIDStart_Query",
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                "name": "StartWorkoutFormFragment"
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
    "name": "RoutineIDStart_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
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
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reminderID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Reminder",
                "kind": "LinkedField",
                "name": "reminders",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "day",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hour",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "minute",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "second",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
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
                            "concreteType": "Set",
                            "kind": "LinkedField",
                            "name": "sets",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "reps",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "weight",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "duration",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "length",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "restTime",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Exercise",
                            "kind": "LinkedField",
                            "name": "exercises",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExerciseTypeConnection",
                                "kind": "LinkedField",
                                "name": "exerciseTypes",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExerciseTypeEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ExerciseType",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v4/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "routineExercises(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
              }
            ],
            "type": "Routine",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4fd763535a89ed05392f6de1ffe29ca5",
    "id": null,
    "metadata": {},
    "name": "RoutineIDStart_Query",
    "operationKind": "query",
    "text": "query RoutineIDStart_Query(\n  $routineID: ID!\n) {\n  viewer {\n    ...useAuthRedirectFragment\n    unit\n    id\n  }\n  node(id: $routineID) {\n    __typename\n    ... on Routine {\n      ...StartWorkoutFormFragment\n    }\n    id\n  }\n}\n\nfragment StartWorkoutFormFragment on Routine {\n  id\n  ...useStartWorkoutFormFragment\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n\nfragment useStartWorkoutFormFragment on Routine {\n  id\n  name\n  reminderID\n  reminders {\n    day\n    hour\n    minute\n    second\n  }\n  routineExercises(orderBy: {direction: ASC, field: Order}) {\n    edges {\n      node {\n        sets {\n          reps\n          weight\n          duration\n          length\n        }\n        restTime\n        exercises {\n          id\n          name\n          exerciseTypes {\n            edges {\n              node {\n                name\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1a8d37d0db7601310f139a77339a0d9c";

export default node;
