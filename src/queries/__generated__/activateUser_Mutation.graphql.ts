/**
 * @generated SignedSource<<ae0e29206c871ed2bc1693fb1ec1c16a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from "relay-runtime";
export type ActivateUserInput = {
  tokenPlainText: string;
};
export type activateUser_Mutation$variables = {
  input: ActivateUserInput;
};
export type activateUser_Mutation$data = {
  readonly activateUser: {
    readonly tokenPlainText: string;
    readonly user: {
      readonly id: string;
      readonly username: string;
    };
  };
};
export type activateUser_Mutation = {
  response: activateUser_Mutation$data;
  variables: activateUser_Mutation$variables;
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
        concreteType: "AuthenticationToken",
        kind: "LinkedField",
        name: "activateUser",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tokenPlainText",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
            ],
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
      name: "activateUser_Mutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "activateUser_Mutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "82b3ddcf2ee68ef94b8de2253673c4f2",
      id: null,
      metadata: {},
      name: "activateUser_Mutation",
      operationKind: "mutation",
      text: "mutation activateUser_Mutation(\n  $input: ActivateUserInput!\n) {\n  activateUser(input: $input) {\n    tokenPlainText\n    user {\n      id\n      username\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "6f24d8962eb6442f90d31efd6f893b6c";

export default node;
