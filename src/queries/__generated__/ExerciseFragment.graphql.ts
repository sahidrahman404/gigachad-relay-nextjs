/**
 * @generated SignedSource<<8fd6b22a583f1299c5e619114fd2ae9d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExerciseFragment$data = {
  readonly exerciseTypes: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null;
    } | null> | null;
  };
  readonly howTo: string | null;
  readonly id: string;
  readonly image: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null;
  readonly musclesGroups: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null;
    } | null> | null;
  };
  readonly name: string;
  readonly " $fragmentType": "ExerciseFragment";
};
export type ExerciseFragment$key = {
  readonly " $data"?: ExerciseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
};

const node: ReaderFragment = (function () {
  var v0 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "name",
      storageKey: null,
    },
    v2 = [v0 /*: any*/, v1 /*: any*/];
  return {
    argumentDefinitions: [],
    kind: "Fragment",
    metadata: null,
    name: "ExerciseFragment",
    selections: [
      v0 /*: any*/,
      v1 /*: any*/,
      {
        alias: null,
        args: null,
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: false,
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "ImageFragment",
          },
        ],
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "howTo",
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        concreteType: "MusclesGroupConnection",
        kind: "LinkedField",
        name: "musclesGroups",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MusclesGroupEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MusclesGroup",
                kind: "LinkedField",
                name: "node",
                plural: false,
                selections: v2 /*: any*/,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        concreteType: "ExerciseTypeConnection",
        kind: "LinkedField",
        name: "exerciseTypes",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ExerciseTypeEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ExerciseType",
                kind: "LinkedField",
                name: "node",
                plural: false,
                selections: v2 /*: any*/,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
    type: "Exercise",
    abstractKey: null,
  };
})();

(node as any).hash = "a8d43020eb2584463a24654a8c9e0876";

export default node;
