/**
 * @generated SignedSource<<a0b9b3ab0f0f36dd1d61c0f49021c12b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LogsWorkoutFragment$data = {
  readonly id: string;
  readonly workoutLogs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ExerciseHistoryCardFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "LogsWorkoutFragment";
};
export type LogsWorkoutFragment$key = {
  readonly " $data"?: LogsWorkoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogsWorkoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LogsWorkoutFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "ASC",
            "field": "Order"
          }
        }
      ],
      "concreteType": "WorkoutLogConnection",
      "kind": "LinkedField",
      "name": "workoutLogs",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "WorkoutLogEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkoutLog",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ExerciseHistoryCardFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "workoutLogs(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
    }
  ],
  "type": "Workout",
  "abstractKey": null
};
})();

(node as any).hash = "76a769fda185a9cadc43735a7b18ddc3";

export default node;
