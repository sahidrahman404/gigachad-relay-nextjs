/**
 * @generated SignedSource<<31367a102418f36212fce4b004fc41be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
export type UpdateUserProfileInput = {
  name: string;
  unit: UserUnit;
};
export type Profile_Mutation$variables = {
  input: UpdateUserProfileInput;
};
export type Profile_Mutation$data = {
  readonly updateUserProfile: {
    readonly " $fragmentSpreads": FragmentRefs<"ProfileFragment">;
  };
};
export type Profile_Mutation = {
  response: Profile_Mutation$data;
  variables: Profile_Mutation$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Profile_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "updateUserProfile",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfileFragment"
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
    "name": "Profile_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "updateUserProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "unit",
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "0d1cb5cdac6e9098d186d4eaf0797a3f",
    "id": null,
    "metadata": {},
    "name": "Profile_Mutation",
    "operationKind": "mutation",
    "text": "mutation Profile_Mutation(\n  $input: UpdateUserProfileInput!\n) {\n  updateUserProfile(input: $input) {\n    ...ProfileFragment\n    id\n  }\n}\n\nfragment ProfileFragment on User {\n  name\n  unit\n}\n"
  }
};
})();

(node as any).hash = "5f1b4fe6505f14a614b3607edf9696d4";

export default node;
