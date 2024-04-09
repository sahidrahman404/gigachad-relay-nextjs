/**
 * @generated SignedSource<<c8b494cad4ac564883321fd0cabe47dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserUnit = "IMPERIAL" | "METRIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LogCardFragment$data = {
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
  readonly workoutLogs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly exercises: {
          readonly image: {
            readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
          } | null | undefined;
          readonly name: string;
        };
        readonly id: string;
        readonly sets: ReadonlyArray<{
          readonly duration: string | null | undefined;
          readonly length: number | null | undefined;
          readonly reps: number | null | undefined;
          readonly weight: number | null | undefined;
        }>;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "LogCardFragment";
};
export type LogCardFragment$key = {
  readonly " $data"?: LogCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "duration",
  "storageKey": null
},
v3 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LogCardFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "volume",
      "storageKey": null
    },
    (v2/*: any*/),
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
    (v3/*: any*/),
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
                  "alias": null,
                  "args": null,
                  "concreteType": "Set",
                  "kind": "LinkedField",
                  "name": "sets",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "reps",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "weight",
                      "storageKey": null
                    },
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "length",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Exercise",
                  "kind": "LinkedField",
                  "name": "exercises",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v3/*: any*/)
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
      "storageKey": "workoutLogs(orderBy:{\"direction\":\"ASC\",\"field\":\"Order\"})"
    }
  ],
  "type": "Workout",
  "abstractKey": null
};
})();

(node as any).hash = "7e200bc4acfe40728cfe00cd905c0ad9";

export default node;
