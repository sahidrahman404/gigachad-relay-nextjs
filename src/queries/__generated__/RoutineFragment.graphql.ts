/**
 * @generated SignedSource<<18e515f5b0c4ca5cb0559f64e4f99d3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoutineFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly routineExercises: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly exercises: {
          readonly name: string;
        };
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "RoutineFragment";
};
export type RoutineFragment$key = {
  readonly " $data"?: RoutineFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoutineFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoutineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "concreteType": "RoutineExerciseConnection",
      "kind": "LinkedField",
      "name": "routineExercises",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RoutineExerciseEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RoutineExercise",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Exercise",
                  "kind": "LinkedField",
                  "name": "exercises",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "routineExercises(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
    }
  ],
  "type": "Routine",
  "abstractKey": null
};
})();

(node as any).hash = "141a88713e89f6a1dd3dc77e0b8cec88";

export default node;
