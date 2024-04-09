/**
 * @generated SignedSource<<42307e1ddbf37c15487cd0121ab95f9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LogFragment$data = {
  readonly createdAt: any;
  readonly description: string | null | undefined;
  readonly duration: string;
  readonly id: string;
  readonly image: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null | undefined;
  readonly name: string;
  readonly sets: number;
  readonly users: {
    readonly unit: UserUnit;
  };
  readonly volume: number;
  readonly " $fragmentSpreads": FragmentRefs<"LogEmptyNoteFragment" | "LogsWorkoutFragment">;
  readonly " $fragmentType": "LogFragment";
};
export type LogFragment$key = {
  readonly " $data"?: LogFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LogFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "volume",
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
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LogEmptyNoteFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LogsWorkoutFragment"
    }
  ],
  "type": "Workout",
  "abstractKey": null
};

(node as any).hash = "494d0ac22f2c8574a536b41745a69e3a";

export default node;
