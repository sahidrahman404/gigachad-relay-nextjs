/**
 * @generated SignedSource<<e3c0cc48daad312fee3df3aea6a89ed8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExercisesFragment$data = {
  readonly exercises: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    };
  };
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteExerciseDialogFragment">;
  readonly " $fragmentType": "ExercisesFragment";
};
export type ExercisesFragment$key = {
  readonly " $data"?: ExercisesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExercisesFragment">;
};

const node: ReaderFragment = (function () {
  var v0 = ["exercises"],
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    };
  return {
    argumentDefinitions: [
      {
        defaultValue: 2,
        kind: "LocalArgument",
        name: "count",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "cursor",
      },
    ],
    kind: "Fragment",
    metadata: {
      connection: [
        {
          count: "count",
          cursor: "cursor",
          direction: "forward",
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: "count",
            cursor: "cursor",
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: ["node"],
        operation: require("./ExercisesFragmentPaginationQuery.graphql"),
        identifierField: "id",
      },
    },
    name: "ExercisesFragment",
    selections: [
      v1 /*: any*/,
      {
        args: null,
        kind: "FragmentSpread",
        name: "DeleteExerciseDialogFragment",
      },
      {
        alias: "exercises",
        args: null,
        concreteType: "ExerciseConnection",
        kind: "LinkedField",
        name: "__ExercisesFragment_exercises_connection",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ExerciseEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Exercise",
                kind: "LinkedField",
                name: "node",
                plural: false,
                selections: [
                  v1 /*: any*/,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ExerciseFragment",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cursor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "PageInfo",
            kind: "LinkedField",
            name: "pageInfo",
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hasNextPage",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "endCursor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
    type: "User",
    abstractKey: null,
  };
})();

(node as any).hash = "1e904319ae21b35bab69d27476c27ffd";

export default node;
