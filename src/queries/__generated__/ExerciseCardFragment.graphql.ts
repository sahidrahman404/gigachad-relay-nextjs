/**
 * @generated SignedSource<<eae7f49f80bb41a8d4d0fb5d572580f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseCardFragment$data = {
  readonly exerciseTypes: {
    readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeBadgeFragment">;
  };
  readonly id: string;
  readonly image: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null | undefined;
  readonly musclesGroups: {
    readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupBadgeFragment">;
  };
  readonly name: string;
  readonly " $fragmentType": "ExerciseCardFragment";
};
export type ExerciseCardFragment$key = {
  readonly " $data"?: ExerciseCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseCardFragment",
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
      "concreteType": "MusclesGroupConnection",
      "kind": "LinkedField",
      "name": "musclesGroups",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MusclesGroupBadgeFragment"
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExerciseTypeBadgeFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Exercise",
  "abstractKey": null
};

(node as any).hash = "98ad5228d7c10eb7193e08dbc33fbaa2";

export default node;
