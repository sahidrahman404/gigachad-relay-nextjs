/**
 * @generated SignedSource<<8d4a8ab455b7eb18d3bfa4b9b1fcd367>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from "relay-runtime";
export type ResetUserPasswordInput = {
  password: string;
  tokenPlainText: string;
};
export type resetPassword_Mutation$variables = {
  input: ResetUserPasswordInput;
};
export type resetPassword_Mutation$data = {
  readonly updateUserPassword: {
    readonly id: string;
  };
};
export type resetPassword_Mutation = {
  response: resetPassword_Mutation$data;
  variables: resetPassword_Mutation$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "input",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "User",
        kind: "LinkedField",
        name: "updateUserPassword",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "resetPassword_Mutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "resetPassword_Mutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "0ab036be19463479183d992f98d033d6",
      id: null,
      metadata: {},
      name: "resetPassword_Mutation",
      operationKind: "mutation",
      text: "mutation resetPassword_Mutation(\n  $input: ResetUserPasswordInput!\n) {\n  updateUserPassword(input: $input) {\n    id\n  }\n}\n",
    },
  };
})();

(node as any).hash = "8b6a0051c5ba5f09f726d4a4352ef1f6";

export default node;
