/**
 * @generated SignedSource<<4c12335a4495a68631356b24a1833f7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateWorkoutWithChildrenInput = {
  description?: string | null | undefined;
  duration: string;
  image?: ImageInput | null | undefined;
  name: string;
  sets: number;
  volume: number;
  workoutLogs?: ReadonlyArray<CreateWorkoutLogInput> | null | undefined;
};
export type ImageInput = {
  aspectRatio?: number | null | undefined;
  breakPoints?: ReadonlyArray<number> | null | undefined;
  filename: string;
  height?: number | null | undefined;
  layout: string;
  objectFit: string;
  priority: boolean;
  width?: number | null | undefined;
};
export type CreateWorkoutLogInput = {
  exerciseID: string;
  sets: ReadonlyArray<SetInput>;
};
export type SetInput = {
  duration?: string | null | undefined;
  length?: number | null | undefined;
  reps?: number | null | undefined;
  weight?: number | null | undefined;
};
export type FinishWorkoutForm_Mutation$variables = {
  input: CreateWorkoutWithChildrenInput;
};
export type FinishWorkoutForm_Mutation$data = {
  readonly createWorkoutWithChildren: {
    readonly id: string;
    readonly users: {
      readonly id: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"LogCardFragment">;
  };
};
export type FinishWorkoutForm_Mutation = {
  response: FinishWorkoutForm_Mutation$data;
  variables: FinishWorkoutForm_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "duration",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FinishWorkoutForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Workout",
        "kind": "LinkedField",
        "name": "createWorkoutWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LogCardFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FinishWorkoutForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Workout",
        "kind": "LinkedField",
        "name": "createWorkoutWithChildren",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "volume",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sets",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
                          (v4/*: any*/),
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
                        "concreteType": "Exercise",
                        "kind": "LinkedField",
                        "name": "exercises",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v8/*: any*/),
                          (v2/*: any*/)
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
            "storageKey": "workoutLogs(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2073590d28f1269615fead597f386273",
    "id": null,
    "metadata": {},
    "name": "FinishWorkoutForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation FinishWorkoutForm_Mutation(\n  $input: CreateWorkoutWithChildrenInput!\n) {\n  createWorkoutWithChildren(input: $input) {\n    id\n    ...LogCardFragment\n    users {\n      id\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n\nfragment LogCardFragment on Workout {\n  id\n  name\n  volume\n  duration\n  sets\n  createdAt\n  image {\n    ...ImageFragment\n  }\n  description\n  users {\n    unit\n    id\n  }\n  workoutLogs(orderBy: {direction: ASC, field: Order}) {\n    edges {\n      node {\n        id\n        sets {\n          reps\n          weight\n          duration\n          length\n        }\n        exercises {\n          name\n          image {\n            ...ImageFragment\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e2dc20d833cdfae91259d3c38e86103";

export default node;
