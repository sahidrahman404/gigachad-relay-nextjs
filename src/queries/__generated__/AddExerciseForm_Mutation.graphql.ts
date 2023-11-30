/**
 * @generated SignedSource<<6deafce0b271fd50819c6388e0151d79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateExerciseInput = {
  exerciseTypeIDs?: ReadonlyArray<string> | null;
  howTo?: string | null;
  image?: ImageInput | null;
  musclesGroupIDs?: ReadonlyArray<string> | null;
  name: string;
  userID?: string | null;
};
export type ImageInput = {
  aspectRatio?: number | null;
  breakPoints?: ReadonlyArray<number> | null;
  filename: string;
  height?: number | null;
  layout: string;
  objectFit: string;
  priority: boolean;
  width?: number | null;
};
export type AddExerciseForm_Mutation$variables = {
  input: CreateExerciseInput;
};
export type AddExerciseForm_Mutation$data = {
  readonly createExercise: {
    readonly howTo: string | null;
    readonly id: string;
    readonly image: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
    } | null;
    readonly name: string;
  };
};
export type AddExerciseForm_Mutation = {
  response: AddExerciseForm_Mutation$data;
  variables: AddExerciseForm_Mutation$variables;
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
  "name": "howTo",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddExerciseForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "createExercise",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "ImageFragment"
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
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
    "name": "AddExerciseForm_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "createExercise",
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfc40315161aa96746287aa0095de71b",
    "id": null,
    "metadata": {},
    "name": "AddExerciseForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation AddExerciseForm_Mutation(\n  $input: CreateExerciseInput!\n) {\n  createExercise(input: $input) {\n    id\n    name\n    image {\n      ...ImageFragment\n    }\n    howTo\n  }\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n"
  }
};
})();

(node as any).hash = "da6e9391b4db01db9cddc7e4bea24813";

export default node;
