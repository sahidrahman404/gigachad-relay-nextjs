/**
 * @generated SignedSource<<617c07c8642fa678918f09648f9cfe18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteExerciseDialogFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "DeleteExerciseDialogFragment";
};
export type DeleteExerciseDialogFragment$key = {
  readonly " $data"?: DeleteExerciseDialogFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteExerciseDialogFragment">;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: "Fragment",
  metadata: null,
  name: "DeleteExerciseDialogFragment",
  selections: [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
  ],
  type: "User",
  abstractKey: null,
};

(node as any).hash = "abd54a6089d676610c6e8c12ae5d514e";

export default node;
