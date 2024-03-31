/**
 * @generated SignedSource<<572e809f95dae5b47056b47e4441a465>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateExerciseInput = {
  exerciseTypeIDs?: ReadonlyArray<string> | null | undefined;
  howTo?: string | null | undefined;
  id: string;
  image?: ImageInput | null | undefined;
  musclesGroupIDs?: ReadonlyArray<string> | null | undefined;
  name: string;
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
export type EditExerciseForm_Mutation$variables = {
  input: UpdateExerciseInput;
};
export type EditExerciseForm_Mutation$data = {
  readonly updateExercise: {
    readonly " $fragmentSpreads": FragmentRefs<"ExerciseCardFragment" | "ExerciseFragment">;
  };
};
export type EditExerciseForm_Mutation = {
  response: EditExerciseForm_Mutation$data;
  variables: EditExerciseForm_Mutation$variables;
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
  "name": "width",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v7 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditExerciseForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "updateExercise",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExerciseCardFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExerciseFragment"
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
    "name": "EditExerciseForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "updateExercise",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
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
              (v4/*: any*/),
              (v5/*: any*/),
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
              (v6/*: any*/),
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
                  (v6/*: any*/),
                  (v5/*: any*/),
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
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
                    "selections": (v7/*: any*/),
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
                    "selections": (v7/*: any*/),
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
            "kind": "ScalarField",
            "name": "howTo",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5ddb33b4d3833501b298c94fa44d3044",
    "id": null,
    "metadata": {},
    "name": "EditExerciseForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation EditExerciseForm_Mutation(\n  $input: UpdateExerciseInput!\n) {\n  updateExercise(input: $input) {\n    ...ExerciseCardFragment\n    ...ExerciseFragment\n    id\n  }\n}\n\nfragment ExerciseCardFragment on Exercise {\n  id\n  name\n  image {\n    ...ImageFragment\n  }\n  musclesGroups {\n    ...MusclesGroupBadgeFragment\n  }\n  exerciseTypes {\n    ...ExerciseTypeBadgeFragment\n  }\n}\n\nfragment ExerciseFragment on Exercise {\n  id\n  name\n  howTo\n  image {\n    ...ImageFragment\n  }\n  musclesGroups {\n    edges {\n      node {\n        id\n      }\n    }\n    ...MusclesGroupBadgeFragment\n  }\n  exerciseTypes {\n    edges {\n      node {\n        id\n      }\n    }\n    ...ExerciseTypeBadgeFragment\n  }\n}\n\nfragment ExerciseTypeBadgeFragment on ExerciseTypeConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n\nfragment MusclesGroupBadgeFragment on MusclesGroupConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "856af7be21d40d91dacacb27994524ea";

export default node;
