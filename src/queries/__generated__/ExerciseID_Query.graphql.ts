/**
 * @generated SignedSource<<f4e6e767705e6083efa82fbf7796d6e8>>
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
    readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "src",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "srcset",
      "storageKey": null
    },
    (v5/*: any*/),
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priority",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "loading",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fetchPriority",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "decoding",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "layout",
      "storageKey": null
    },
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "objectFit",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "breakpoints",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sizes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Style",
      "kind": "LinkedField",
      "name": "style",
      "plural": false,
      "selections": [
        (v7/*: any*/),
        (v6/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxHeight",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxWidth",
          "storageKey": null
        },
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v9 = [
  (v2/*: any*/),
  (v4/*: any*/)
],
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  },
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "direction",
        "value": "DESC"
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
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
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
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ExerciseFragment"
              }
            ],
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
          (v3/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "howTo",
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MusclesGroupConnection",
                "kind": "LinkedField",
                "name": "musclesGroups",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MusclesGroupEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MusclesGroup",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
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
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "WorkoutLogConnection",
                "kind": "LinkedField",
                "name": "workoutLogs",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "WorkoutLogEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "WorkoutLog",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
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
                                "name": "weight",
                                "storageKey": null
                              },
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
                                "name": "duration",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Workout",
                            "kind": "LinkedField",
                            "name": "workouts",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v2/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "users",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "unit",
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
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
                              (v4/*: any*/),
                              (v8/*: any*/),
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
                                          (v2/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "workoutLogs(first:4,orderBy:{\"direction\":\"DESC\",\"field\":\"ID\"})"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "ExercisesHistoryFragment_workoutLogs",
                "kind": "LinkedHandle",
                "name": "workoutLogs"
              }
            ],
            "type": "Exercise",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "59b8f8409b5daf1a9850bedcea29b89d",
    "id": null,
    "metadata": {},
    "name": "ExerciseID_Query",
    "operationKind": "query",
    "text": "query ExerciseID_Query(\n  $exerciseID: ID!\n) {\n  viewer {\n    ...useAuthRedirectFragment\n    id\n  }\n  node(id: $exerciseID) {\n    __typename\n    ... on Exercise {\n      ...ExerciseFragment\n    }\n    id\n  }\n}\n\nfragment BodyWeightExerciseHistoryFragment on WorkoutLog {\n  id\n  sets {\n    reps\n  }\n  createdAt\n  workouts {\n    name\n    id\n  }\n}\n\nfragment DurationExerciseHistoryFragment on WorkoutLog {\n  id\n  sets {\n    duration\n  }\n  createdAt\n  workouts {\n    name\n    id\n  }\n}\n\nfragment ExerciseEmptyHowToFragment on Exercise {\n  id\n  howTo\n}\n\nfragment ExerciseFragment on Exercise {\n  id\n  name\n  howTo\n  image {\n    ...ImageFragment\n  }\n  ...ExerciseEmptyHowToFragment\n  musclesGroups {\n    edges {\n      node {\n        id\n      }\n    }\n    ...MusclesGroupBadgeFragment\n  }\n  exerciseTypes {\n    edges {\n      node {\n        id\n      }\n    }\n    ...ExerciseTypeBadgeFragment\n  }\n  ...ExercisesHistoryFragment\n}\n\nfragment ExerciseHistoryCardFragment on WorkoutLog {\n  ...WeightExerciseHistoryFragment\n  ...DurationExerciseHistoryFragment\n  ...BodyWeightExerciseHistoryFragment\n  workouts {\n    name\n    createdAt\n    id\n  }\n  exercises {\n    name\n    image {\n      ...ImageFragment\n    }\n    exerciseTypes {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment ExerciseTypeBadgeFragment on ExerciseTypeConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment ExercisesHistoryFragment on Exercise {\n  workoutLogs(first: 4, orderBy: {direction: DESC, field: ID}) {\n    edges {\n      node {\n        id\n        ...ExerciseHistoryCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n\nfragment MusclesGroupBadgeFragment on MusclesGroupConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment WeightExerciseHistoryFragment on WorkoutLog {\n  id\n  sets {\n    weight\n    reps\n  }\n  createdAt\n  workouts {\n    name\n    id\n  }\n  users {\n    unit\n    id\n  }\n}\n\nfragment useAuthRedirectFragment on User {\n  id\n}\n"
  }
};
})();

(node as any).hash = "adde466c7cb17ce6777cb3589f97da3d";

export default node;
