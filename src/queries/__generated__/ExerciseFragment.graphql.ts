/**
 * @generated SignedSource<<edebac08de7a46445187bb13580bbf74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExerciseFragment$data = {
  readonly exerciseTypes: {
    readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeBadgeFragment">;
  };
  readonly howTo: string | null | undefined;
  readonly musclesGroups: {
    readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupBadgeFragment">;
  };
  readonly name: string;
  readonly " $fragmentType": "ExerciseFragment";
};
export type ExerciseFragment$key = {
  readonly " $data"?: ExerciseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseFragment",
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
      "name": "howTo",
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

(node as any).hash = "0011e6f2d54b9d19218b6844abe5768b";

export default node;
