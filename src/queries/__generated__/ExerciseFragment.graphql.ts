/**
 * @generated SignedSource<<4149cbdd98b3d00400d58a517b2e6fb6>>
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
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ExerciseTypeBadgeFragment">;
  };
  readonly howTo: string | null | undefined;
  readonly id: string;
  readonly image: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null | undefined;
  readonly musclesGroups: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MusclesGroupBadgeFragment">;
  };
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseEmptyHowToFragment" | "ExercisesHistoryFragment">;
  readonly " $fragmentType": "ExerciseFragment";
};
export type ExerciseFragment$key = {
  readonly " $data"?: ExerciseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExerciseFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseFragment",
  "selections": [
    (v0/*: any*/),
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExerciseEmptyHowToFragment"
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
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExerciseTypeBadgeFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExercisesHistoryFragment"
    }
  ],
  "type": "Exercise",
  "abstractKey": null
};
})();

(node as any).hash = "6a417cf83f3fae9fa7e2374966fd460f";

export default node;
