/**
 * @generated SignedSource<<b0ec545d8a9d283223b24ba3a1374d3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type ExerciseTypeWhereInput = {
  and?: ReadonlyArray<ExerciseTypeWhereInput> | null;
  description?: string | null;
  descriptionContains?: string | null;
  descriptionContainsFold?: string | null;
  descriptionEqualFold?: string | null;
  descriptionGT?: string | null;
  descriptionGTE?: string | null;
  descriptionHasPrefix?: string | null;
  descriptionHasSuffix?: string | null;
  descriptionIn?: ReadonlyArray<string> | null;
  descriptionLT?: string | null;
  descriptionLTE?: string | null;
  descriptionNEQ?: string | null;
  descriptionNotIn?: ReadonlyArray<string> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: ExerciseTypeWhereInput | null;
  or?: ReadonlyArray<ExerciseTypeWhereInput> | null;
};
export type ExerciseWhereInput = {
  and?: ReadonlyArray<ExerciseWhereInput> | null;
  hasEquipment?: boolean | null;
  hasEquipmentWith?: ReadonlyArray<EquipmentWhereInput> | null;
  hasExerciseTypes?: boolean | null;
  hasExerciseTypesWith?: ReadonlyArray<ExerciseTypeWhereInput> | null;
  hasMusclesGroups?: boolean | null;
  hasMusclesGroupsWith?: ReadonlyArray<MusclesGroupWhereInput> | null;
  hasRoutineExercises?: boolean | null;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null;
  hasRoutines?: boolean | null;
  hasRoutinesWith?: ReadonlyArray<RoutineWhereInput> | null;
  hasUsers?: boolean | null;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null;
  hasWorkoutLogs?: boolean | null;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null;
  hasWorkouts?: boolean | null;
  hasWorkoutsWith?: ReadonlyArray<WorkoutWhereInput> | null;
  howTo?: string | null;
  howToContains?: string | null;
  howToContainsFold?: string | null;
  howToEqualFold?: string | null;
  howToGT?: string | null;
  howToGTE?: string | null;
  howToHasPrefix?: string | null;
  howToHasSuffix?: string | null;
  howToIn?: ReadonlyArray<string> | null;
  howToIsNil?: boolean | null;
  howToLT?: string | null;
  howToLTE?: string | null;
  howToNEQ?: string | null;
  howToNotIn?: ReadonlyArray<string> | null;
  howToNotNil?: boolean | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: ExerciseWhereInput | null;
  or?: ReadonlyArray<ExerciseWhereInput> | null;
  userID?: string | null;
  userIDContains?: string | null;
  userIDContainsFold?: string | null;
  userIDEqualFold?: string | null;
  userIDGT?: string | null;
  userIDGTE?: string | null;
  userIDHasPrefix?: string | null;
  userIDHasSuffix?: string | null;
  userIDIn?: ReadonlyArray<string> | null;
  userIDIsNil?: boolean | null;
  userIDLT?: string | null;
  userIDLTE?: string | null;
  userIDNEQ?: string | null;
  userIDNotIn?: ReadonlyArray<string> | null;
  userIDNotNil?: boolean | null;
};
export type UserWhereInput = {
  activated?: number | null;
  activatedGT?: number | null;
  activatedGTE?: number | null;
  activatedIn?: ReadonlyArray<number> | null;
  activatedLT?: number | null;
  activatedLTE?: number | null;
  activatedNEQ?: number | null;
  activatedNotIn?: ReadonlyArray<number> | null;
  and?: ReadonlyArray<UserWhereInput> | null;
  createdAt?: string | null;
  createdAtContains?: string | null;
  createdAtContainsFold?: string | null;
  createdAtEqualFold?: string | null;
  createdAtGT?: string | null;
  createdAtGTE?: string | null;
  createdAtHasPrefix?: string | null;
  createdAtHasSuffix?: string | null;
  createdAtIn?: ReadonlyArray<string> | null;
  createdAtLT?: string | null;
  createdAtLTE?: string | null;
  createdAtNEQ?: string | null;
  createdAtNotIn?: ReadonlyArray<string> | null;
  email?: string | null;
  emailContains?: string | null;
  emailContainsFold?: string | null;
  emailEqualFold?: string | null;
  emailGT?: string | null;
  emailGTE?: string | null;
  emailHasPrefix?: string | null;
  emailHasSuffix?: string | null;
  emailIn?: ReadonlyArray<string> | null;
  emailLT?: string | null;
  emailLTE?: string | null;
  emailNEQ?: string | null;
  emailNotIn?: ReadonlyArray<string> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  hasRoutineExercises?: boolean | null;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null;
  hasRoutines?: boolean | null;
  hasRoutinesWith?: ReadonlyArray<RoutineWhereInput> | null;
  hasTokens?: boolean | null;
  hasTokensWith?: ReadonlyArray<TokenWhereInput> | null;
  hasWorkoutLogs?: boolean | null;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null;
  hasWorkouts?: boolean | null;
  hasWorkoutsWith?: ReadonlyArray<WorkoutWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: UserWhereInput | null;
  or?: ReadonlyArray<UserWhereInput> | null;
  username?: string | null;
  usernameContains?: string | null;
  usernameContainsFold?: string | null;
  usernameEqualFold?: string | null;
  usernameGT?: string | null;
  usernameGTE?: string | null;
  usernameHasPrefix?: string | null;
  usernameHasSuffix?: string | null;
  usernameIn?: ReadonlyArray<string> | null;
  usernameLT?: string | null;
  usernameLTE?: string | null;
  usernameNEQ?: string | null;
  usernameNotIn?: ReadonlyArray<string> | null;
  version?: number | null;
  versionGT?: number | null;
  versionGTE?: number | null;
  versionIn?: ReadonlyArray<number> | null;
  versionLT?: number | null;
  versionLTE?: number | null;
  versionNEQ?: number | null;
  versionNotIn?: ReadonlyArray<number> | null;
};
export type TokenWhereInput = {
  and?: ReadonlyArray<TokenWhereInput> | null;
  expiry?: string | null;
  expiryContains?: string | null;
  expiryContainsFold?: string | null;
  expiryEqualFold?: string | null;
  expiryGT?: string | null;
  expiryGTE?: string | null;
  expiryHasPrefix?: string | null;
  expiryHasSuffix?: string | null;
  expiryIn?: ReadonlyArray<string> | null;
  expiryLT?: string | null;
  expiryLTE?: string | null;
  expiryNEQ?: string | null;
  expiryNotIn?: ReadonlyArray<string> | null;
  hasUsers?: boolean | null;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  not?: TokenWhereInput | null;
  or?: ReadonlyArray<TokenWhereInput> | null;
  scope?: string | null;
  scopeContains?: string | null;
  scopeContainsFold?: string | null;
  scopeEqualFold?: string | null;
  scopeGT?: string | null;
  scopeGTE?: string | null;
  scopeHasPrefix?: string | null;
  scopeHasSuffix?: string | null;
  scopeIn?: ReadonlyArray<string> | null;
  scopeLT?: string | null;
  scopeLTE?: string | null;
  scopeNEQ?: string | null;
  scopeNotIn?: ReadonlyArray<string> | null;
  userID?: string | null;
  userIDContains?: string | null;
  userIDContainsFold?: string | null;
  userIDEqualFold?: string | null;
  userIDGT?: string | null;
  userIDGTE?: string | null;
  userIDHasPrefix?: string | null;
  userIDHasSuffix?: string | null;
  userIDIn?: ReadonlyArray<string> | null;
  userIDLT?: string | null;
  userIDLTE?: string | null;
  userIDNEQ?: string | null;
  userIDNotIn?: ReadonlyArray<string> | null;
};
export type RoutineWhereInput = {
  and?: ReadonlyArray<RoutineWhereInput> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  hasRoutineExercises?: boolean | null;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null;
  hasUsers?: boolean | null;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: RoutineWhereInput | null;
  or?: ReadonlyArray<RoutineWhereInput> | null;
  reminderID?: string | null;
  reminderIDContains?: string | null;
  reminderIDContainsFold?: string | null;
  reminderIDEqualFold?: string | null;
  reminderIDGT?: string | null;
  reminderIDGTE?: string | null;
  reminderIDHasPrefix?: string | null;
  reminderIDHasSuffix?: string | null;
  reminderIDIn?: ReadonlyArray<string> | null;
  reminderIDIsNil?: boolean | null;
  reminderIDLT?: string | null;
  reminderIDLTE?: string | null;
  reminderIDNEQ?: string | null;
  reminderIDNotIn?: ReadonlyArray<string> | null;
  reminderIDNotNil?: boolean | null;
  userID?: string | null;
  userIDContains?: string | null;
  userIDContainsFold?: string | null;
  userIDEqualFold?: string | null;
  userIDGT?: string | null;
  userIDGTE?: string | null;
  userIDHasPrefix?: string | null;
  userIDHasSuffix?: string | null;
  userIDIn?: ReadonlyArray<string> | null;
  userIDLT?: string | null;
  userIDLTE?: string | null;
  userIDNEQ?: string | null;
  userIDNotIn?: ReadonlyArray<string> | null;
};
export type RoutineExerciseWhereInput = {
  and?: ReadonlyArray<RoutineExerciseWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  not?: RoutineExerciseWhereInput | null;
  or?: ReadonlyArray<RoutineExerciseWhereInput> | null;
  restTime?: string | null;
  restTimeContains?: string | null;
  restTimeContainsFold?: string | null;
  restTimeEqualFold?: string | null;
  restTimeGT?: string | null;
  restTimeGTE?: string | null;
  restTimeHasPrefix?: string | null;
  restTimeHasSuffix?: string | null;
  restTimeIn?: ReadonlyArray<string> | null;
  restTimeIsNil?: boolean | null;
  restTimeLT?: string | null;
  restTimeLTE?: string | null;
  restTimeNEQ?: string | null;
  restTimeNotIn?: ReadonlyArray<string> | null;
  restTimeNotNil?: boolean | null;
};
export type WorkoutWhereInput = {
  and?: ReadonlyArray<WorkoutWhereInput> | null;
  createdAt?: string | null;
  createdAtContains?: string | null;
  createdAtContainsFold?: string | null;
  createdAtEqualFold?: string | null;
  createdAtGT?: string | null;
  createdAtGTE?: string | null;
  createdAtHasPrefix?: string | null;
  createdAtHasSuffix?: string | null;
  createdAtIn?: ReadonlyArray<string> | null;
  createdAtLT?: string | null;
  createdAtLTE?: string | null;
  createdAtNEQ?: string | null;
  createdAtNotIn?: ReadonlyArray<string> | null;
  description?: string | null;
  descriptionContains?: string | null;
  descriptionContainsFold?: string | null;
  descriptionEqualFold?: string | null;
  descriptionGT?: string | null;
  descriptionGTE?: string | null;
  descriptionHasPrefix?: string | null;
  descriptionHasSuffix?: string | null;
  descriptionIn?: ReadonlyArray<string> | null;
  descriptionIsNil?: boolean | null;
  descriptionLT?: string | null;
  descriptionLTE?: string | null;
  descriptionNEQ?: string | null;
  descriptionNotIn?: ReadonlyArray<string> | null;
  descriptionNotNil?: boolean | null;
  duration?: string | null;
  durationContains?: string | null;
  durationContainsFold?: string | null;
  durationEqualFold?: string | null;
  durationGT?: string | null;
  durationGTE?: string | null;
  durationHasPrefix?: string | null;
  durationHasSuffix?: string | null;
  durationIn?: ReadonlyArray<string> | null;
  durationLT?: string | null;
  durationLTE?: string | null;
  durationNEQ?: string | null;
  durationNotIn?: ReadonlyArray<string> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  hasUsers?: boolean | null;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null;
  hasWorkoutLogs?: boolean | null;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  not?: WorkoutWhereInput | null;
  or?: ReadonlyArray<WorkoutWhereInput> | null;
  sets?: number | null;
  setsGT?: number | null;
  setsGTE?: number | null;
  setsIn?: ReadonlyArray<number> | null;
  setsLT?: number | null;
  setsLTE?: number | null;
  setsNEQ?: number | null;
  setsNotIn?: ReadonlyArray<number> | null;
  userID?: string | null;
  userIDContains?: string | null;
  userIDContainsFold?: string | null;
  userIDEqualFold?: string | null;
  userIDGT?: string | null;
  userIDGTE?: string | null;
  userIDHasPrefix?: string | null;
  userIDHasSuffix?: string | null;
  userIDIn?: ReadonlyArray<string> | null;
  userIDLT?: string | null;
  userIDLTE?: string | null;
  userIDNEQ?: string | null;
  userIDNotIn?: ReadonlyArray<string> | null;
  volume?: number | null;
  volumeGT?: number | null;
  volumeGTE?: number | null;
  volumeIn?: ReadonlyArray<number> | null;
  volumeLT?: number | null;
  volumeLTE?: number | null;
  volumeNEQ?: number | null;
  volumeNotIn?: ReadonlyArray<number> | null;
};
export type WorkoutLogWhereInput = {
  and?: ReadonlyArray<WorkoutLogWhereInput> | null;
  createdAt?: string | null;
  createdAtContains?: string | null;
  createdAtContainsFold?: string | null;
  createdAtEqualFold?: string | null;
  createdAtGT?: string | null;
  createdAtGTE?: string | null;
  createdAtHasPrefix?: string | null;
  createdAtHasSuffix?: string | null;
  createdAtIn?: ReadonlyArray<string> | null;
  createdAtLT?: string | null;
  createdAtLTE?: string | null;
  createdAtNEQ?: string | null;
  createdAtNotIn?: ReadonlyArray<string> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  not?: WorkoutLogWhereInput | null;
  or?: ReadonlyArray<WorkoutLogWhereInput> | null;
};
export type EquipmentWhereInput = {
  and?: ReadonlyArray<EquipmentWhereInput> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: EquipmentWhereInput | null;
  or?: ReadonlyArray<EquipmentWhereInput> | null;
};
export type MusclesGroupWhereInput = {
  and?: ReadonlyArray<MusclesGroupWhereInput> | null;
  hasExercises?: boolean | null;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null;
  id?: string | null;
  idGT?: string | null;
  idGTE?: string | null;
  idIn?: ReadonlyArray<string> | null;
  idLT?: string | null;
  idLTE?: string | null;
  idNEQ?: string | null;
  idNotIn?: ReadonlyArray<string> | null;
  name?: string | null;
  nameContains?: string | null;
  nameContainsFold?: string | null;
  nameEqualFold?: string | null;
  nameGT?: string | null;
  nameGTE?: string | null;
  nameHasPrefix?: string | null;
  nameHasSuffix?: string | null;
  nameIn?: ReadonlyArray<string> | null;
  nameLT?: string | null;
  nameLTE?: string | null;
  nameNEQ?: string | null;
  nameNotIn?: ReadonlyArray<string> | null;
  not?: MusclesGroupWhereInput | null;
  or?: ReadonlyArray<MusclesGroupWhereInput> | null;
};
export type ExercisesFragmentPaginationQuery$variables = {
  count?: number | null;
  cursor?: any | null;
  exerciseTypeWhereInput?: ReadonlyArray<ExerciseTypeWhereInput> | null;
  id: string;
  musclesGroupWhereInput?: ReadonlyArray<MusclesGroupWhereInput> | null;
  orderby?: OrderDirection | null;
};
export type ExercisesFragmentPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ExercisesFragment">;
  } | null;
};
export type ExercisesFragmentPaginationQuery = {
  response: ExercisesFragmentPaginationQuery$data;
  variables: ExercisesFragmentPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 4,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": ([]/*: any*/),
  "kind": "LocalArgument",
  "name": "exerciseTypeWhereInput"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v4 = {
  "defaultValue": ([]/*: any*/),
  "kind": "LocalArgument",
  "name": "musclesGroupWhereInput"
},
v5 = {
  "defaultValue": "DESC",
  "kind": "LocalArgument",
  "name": "orderby"
},
v6 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "direction",
        "variableName": "orderby"
      },
      {
        "kind": "Literal",
        "name": "field",
        "value": "ID"
      }
    ],
    "kind": "ObjectValue",
    "name": "orderBy"
  },
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "hasExerciseTypesWith",
        "variableName": "exerciseTypeWhereInput"
      },
      {
        "kind": "Variable",
        "name": "hasMusclesGroupsWith",
        "variableName": "musclesGroupWhereInput"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v14 = [
  (v8/*: any*/),
  (v10/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExercisesFragmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              {
                "kind": "Variable",
                "name": "exerciseTypeWhereInput",
                "variableName": "exerciseTypeWhereInput"
              },
              {
                "kind": "Variable",
                "name": "musclesGroupWhereInput",
                "variableName": "musclesGroupWhereInput"
              },
              {
                "kind": "Variable",
                "name": "orderby",
                "variableName": "orderby"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ExercisesFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ExercisesFragmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "ExerciseConnection",
                "kind": "LinkedField",
                "name": "exercises",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ExerciseEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Exercise",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "src",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "srcset",
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "priority",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "loading",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fetchPriority",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "decoding",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "layout",
                                "storageKey": null
                              },
                              (v13/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "objectFit",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "breakpoints",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "alt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "role",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "sizes",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Style",
                                "kind": "LinkedField",
                                "name": "style",
                                "plural": false,
                                "selections": [
                                  (v13/*: any*/),
                                  (v12/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "maxHeight",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "maxWidth",
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
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
                                    "selections": (v14/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
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
                                    "selections": (v14/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": [
                  "where",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "ExercisesFragment_exercises",
                "kind": "LinkedHandle",
                "name": "exercises"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6a61f8b20694353c862b5daeaa04d7a8",
    "id": null,
    "metadata": {},
    "name": "ExercisesFragmentPaginationQuery",
    "operationKind": "query",
    "text": "query ExercisesFragmentPaginationQuery(\n  $count: Int = 4\n  $cursor: Cursor\n  $exerciseTypeWhereInput: [ExerciseTypeWhereInput!] = []\n  $musclesGroupWhereInput: [MusclesGroupWhereInput!] = []\n  $orderby: OrderDirection = DESC\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ExercisesFragment_1FK7Ak\n    id\n  }\n}\n\nfragment ExerciseFragment on Exercise {\n  id\n  name\n  image {\n    ...ImageFragment\n  }\n  howTo\n  musclesGroups {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  exerciseTypes {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ExercisesFragment_1FK7Ak on User {\n  id\n  exercises(after: $cursor, first: $count, where: {hasExerciseTypesWith: $exerciseTypeWhereInput, hasMusclesGroupsWith: $musclesGroupWhereInput}, orderBy: {direction: $orderby, field: ID}) {\n    edges {\n      node {\n        id\n        ...ExerciseFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n"
  }
};
})();

(node as any).hash = "981628dae6ccd7f6685ef8d9ab0e04ae";

export default node;
