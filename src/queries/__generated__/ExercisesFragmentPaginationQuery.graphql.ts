/**
 * @generated SignedSource<<89eea2d771aab387744d9c50ebd48d96>>
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
  and?: ReadonlyArray<ExerciseTypeWhereInput> | null | undefined;
  description?: string | null | undefined;
  descriptionContains?: string | null | undefined;
  descriptionContainsFold?: string | null | undefined;
  descriptionEqualFold?: string | null | undefined;
  descriptionGT?: string | null | undefined;
  descriptionGTE?: string | null | undefined;
  descriptionHasPrefix?: string | null | undefined;
  descriptionHasSuffix?: string | null | undefined;
  descriptionIn?: ReadonlyArray<string> | null | undefined;
  descriptionLT?: string | null | undefined;
  descriptionLTE?: string | null | undefined;
  descriptionNEQ?: string | null | undefined;
  descriptionNotIn?: ReadonlyArray<string> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: ExerciseTypeWhereInput | null | undefined;
  or?: ReadonlyArray<ExerciseTypeWhereInput> | null | undefined;
};
export type ExerciseWhereInput = {
  and?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  hasEquipment?: boolean | null | undefined;
  hasEquipmentWith?: ReadonlyArray<EquipmentWhereInput> | null | undefined;
  hasExerciseTypes?: boolean | null | undefined;
  hasExerciseTypesWith?: ReadonlyArray<ExerciseTypeWhereInput> | null | undefined;
  hasMusclesGroups?: boolean | null | undefined;
  hasMusclesGroupsWith?: ReadonlyArray<MusclesGroupWhereInput> | null | undefined;
  hasRoutineExercises?: boolean | null | undefined;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null | undefined;
  hasRoutines?: boolean | null | undefined;
  hasRoutinesWith?: ReadonlyArray<RoutineWhereInput> | null | undefined;
  hasUsers?: boolean | null | undefined;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  hasWorkoutLogs?: boolean | null | undefined;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null | undefined;
  hasWorkouts?: boolean | null | undefined;
  hasWorkoutsWith?: ReadonlyArray<WorkoutWhereInput> | null | undefined;
  howTo?: string | null | undefined;
  howToContains?: string | null | undefined;
  howToContainsFold?: string | null | undefined;
  howToEqualFold?: string | null | undefined;
  howToGT?: string | null | undefined;
  howToGTE?: string | null | undefined;
  howToHasPrefix?: string | null | undefined;
  howToHasSuffix?: string | null | undefined;
  howToIn?: ReadonlyArray<string> | null | undefined;
  howToIsNil?: boolean | null | undefined;
  howToLT?: string | null | undefined;
  howToLTE?: string | null | undefined;
  howToNEQ?: string | null | undefined;
  howToNotIn?: ReadonlyArray<string> | null | undefined;
  howToNotNil?: boolean | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: ExerciseWhereInput | null | undefined;
  or?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  userID?: string | null | undefined;
  userIDContains?: string | null | undefined;
  userIDContainsFold?: string | null | undefined;
  userIDEqualFold?: string | null | undefined;
  userIDGT?: string | null | undefined;
  userIDGTE?: string | null | undefined;
  userIDHasPrefix?: string | null | undefined;
  userIDHasSuffix?: string | null | undefined;
  userIDIn?: ReadonlyArray<string> | null | undefined;
  userIDIsNil?: boolean | null | undefined;
  userIDLT?: string | null | undefined;
  userIDLTE?: string | null | undefined;
  userIDNEQ?: string | null | undefined;
  userIDNotIn?: ReadonlyArray<string> | null | undefined;
  userIDNotNil?: boolean | null | undefined;
};
export type UserWhereInput = {
  activated?: number | null | undefined;
  activatedGT?: number | null | undefined;
  activatedGTE?: number | null | undefined;
  activatedIn?: ReadonlyArray<number> | null | undefined;
  activatedLT?: number | null | undefined;
  activatedLTE?: number | null | undefined;
  activatedNEQ?: number | null | undefined;
  activatedNotIn?: ReadonlyArray<number> | null | undefined;
  and?: ReadonlyArray<UserWhereInput> | null | undefined;
  createdAt?: string | null | undefined;
  createdAtContains?: string | null | undefined;
  createdAtContainsFold?: string | null | undefined;
  createdAtEqualFold?: string | null | undefined;
  createdAtGT?: string | null | undefined;
  createdAtGTE?: string | null | undefined;
  createdAtHasPrefix?: string | null | undefined;
  createdAtHasSuffix?: string | null | undefined;
  createdAtIn?: ReadonlyArray<string> | null | undefined;
  createdAtLT?: string | null | undefined;
  createdAtLTE?: string | null | undefined;
  createdAtNEQ?: string | null | undefined;
  createdAtNotIn?: ReadonlyArray<string> | null | undefined;
  email?: string | null | undefined;
  emailContains?: string | null | undefined;
  emailContainsFold?: string | null | undefined;
  emailEqualFold?: string | null | undefined;
  emailGT?: string | null | undefined;
  emailGTE?: string | null | undefined;
  emailHasPrefix?: string | null | undefined;
  emailHasSuffix?: string | null | undefined;
  emailIn?: ReadonlyArray<string> | null | undefined;
  emailLT?: string | null | undefined;
  emailLTE?: string | null | undefined;
  emailNEQ?: string | null | undefined;
  emailNotIn?: ReadonlyArray<string> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  hasRoutineExercises?: boolean | null | undefined;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null | undefined;
  hasRoutines?: boolean | null | undefined;
  hasRoutinesWith?: ReadonlyArray<RoutineWhereInput> | null | undefined;
  hasTokens?: boolean | null | undefined;
  hasTokensWith?: ReadonlyArray<TokenWhereInput> | null | undefined;
  hasWorkoutLogs?: boolean | null | undefined;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null | undefined;
  hasWorkouts?: boolean | null | undefined;
  hasWorkoutsWith?: ReadonlyArray<WorkoutWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: UserWhereInput | null | undefined;
  or?: ReadonlyArray<UserWhereInput> | null | undefined;
  username?: string | null | undefined;
  usernameContains?: string | null | undefined;
  usernameContainsFold?: string | null | undefined;
  usernameEqualFold?: string | null | undefined;
  usernameGT?: string | null | undefined;
  usernameGTE?: string | null | undefined;
  usernameHasPrefix?: string | null | undefined;
  usernameHasSuffix?: string | null | undefined;
  usernameIn?: ReadonlyArray<string> | null | undefined;
  usernameLT?: string | null | undefined;
  usernameLTE?: string | null | undefined;
  usernameNEQ?: string | null | undefined;
  usernameNotIn?: ReadonlyArray<string> | null | undefined;
  version?: number | null | undefined;
  versionGT?: number | null | undefined;
  versionGTE?: number | null | undefined;
  versionIn?: ReadonlyArray<number> | null | undefined;
  versionLT?: number | null | undefined;
  versionLTE?: number | null | undefined;
  versionNEQ?: number | null | undefined;
  versionNotIn?: ReadonlyArray<number> | null | undefined;
};
export type TokenWhereInput = {
  and?: ReadonlyArray<TokenWhereInput> | null | undefined;
  expiry?: string | null | undefined;
  expiryContains?: string | null | undefined;
  expiryContainsFold?: string | null | undefined;
  expiryEqualFold?: string | null | undefined;
  expiryGT?: string | null | undefined;
  expiryGTE?: string | null | undefined;
  expiryHasPrefix?: string | null | undefined;
  expiryHasSuffix?: string | null | undefined;
  expiryIn?: ReadonlyArray<string> | null | undefined;
  expiryLT?: string | null | undefined;
  expiryLTE?: string | null | undefined;
  expiryNEQ?: string | null | undefined;
  expiryNotIn?: ReadonlyArray<string> | null | undefined;
  hasUsers?: boolean | null | undefined;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  not?: TokenWhereInput | null | undefined;
  or?: ReadonlyArray<TokenWhereInput> | null | undefined;
  scope?: string | null | undefined;
  scopeContains?: string | null | undefined;
  scopeContainsFold?: string | null | undefined;
  scopeEqualFold?: string | null | undefined;
  scopeGT?: string | null | undefined;
  scopeGTE?: string | null | undefined;
  scopeHasPrefix?: string | null | undefined;
  scopeHasSuffix?: string | null | undefined;
  scopeIn?: ReadonlyArray<string> | null | undefined;
  scopeLT?: string | null | undefined;
  scopeLTE?: string | null | undefined;
  scopeNEQ?: string | null | undefined;
  scopeNotIn?: ReadonlyArray<string> | null | undefined;
  userID?: string | null | undefined;
  userIDContains?: string | null | undefined;
  userIDContainsFold?: string | null | undefined;
  userIDEqualFold?: string | null | undefined;
  userIDGT?: string | null | undefined;
  userIDGTE?: string | null | undefined;
  userIDHasPrefix?: string | null | undefined;
  userIDHasSuffix?: string | null | undefined;
  userIDIn?: ReadonlyArray<string> | null | undefined;
  userIDLT?: string | null | undefined;
  userIDLTE?: string | null | undefined;
  userIDNEQ?: string | null | undefined;
  userIDNotIn?: ReadonlyArray<string> | null | undefined;
};
export type RoutineWhereInput = {
  and?: ReadonlyArray<RoutineWhereInput> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  hasRoutineExercises?: boolean | null | undefined;
  hasRoutineExercisesWith?: ReadonlyArray<RoutineExerciseWhereInput> | null | undefined;
  hasUsers?: boolean | null | undefined;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: RoutineWhereInput | null | undefined;
  or?: ReadonlyArray<RoutineWhereInput> | null | undefined;
  reminderID?: string | null | undefined;
  reminderIDContains?: string | null | undefined;
  reminderIDContainsFold?: string | null | undefined;
  reminderIDEqualFold?: string | null | undefined;
  reminderIDGT?: string | null | undefined;
  reminderIDGTE?: string | null | undefined;
  reminderIDHasPrefix?: string | null | undefined;
  reminderIDHasSuffix?: string | null | undefined;
  reminderIDIn?: ReadonlyArray<string> | null | undefined;
  reminderIDIsNil?: boolean | null | undefined;
  reminderIDLT?: string | null | undefined;
  reminderIDLTE?: string | null | undefined;
  reminderIDNEQ?: string | null | undefined;
  reminderIDNotIn?: ReadonlyArray<string> | null | undefined;
  reminderIDNotNil?: boolean | null | undefined;
  userID?: string | null | undefined;
  userIDContains?: string | null | undefined;
  userIDContainsFold?: string | null | undefined;
  userIDEqualFold?: string | null | undefined;
  userIDGT?: string | null | undefined;
  userIDGTE?: string | null | undefined;
  userIDHasPrefix?: string | null | undefined;
  userIDHasSuffix?: string | null | undefined;
  userIDIn?: ReadonlyArray<string> | null | undefined;
  userIDLT?: string | null | undefined;
  userIDLTE?: string | null | undefined;
  userIDNEQ?: string | null | undefined;
  userIDNotIn?: ReadonlyArray<string> | null | undefined;
};
export type RoutineExerciseWhereInput = {
  and?: ReadonlyArray<RoutineExerciseWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  not?: RoutineExerciseWhereInput | null | undefined;
  or?: ReadonlyArray<RoutineExerciseWhereInput> | null | undefined;
  restTime?: string | null | undefined;
  restTimeContains?: string | null | undefined;
  restTimeContainsFold?: string | null | undefined;
  restTimeEqualFold?: string | null | undefined;
  restTimeGT?: string | null | undefined;
  restTimeGTE?: string | null | undefined;
  restTimeHasPrefix?: string | null | undefined;
  restTimeHasSuffix?: string | null | undefined;
  restTimeIn?: ReadonlyArray<string> | null | undefined;
  restTimeIsNil?: boolean | null | undefined;
  restTimeLT?: string | null | undefined;
  restTimeLTE?: string | null | undefined;
  restTimeNEQ?: string | null | undefined;
  restTimeNotIn?: ReadonlyArray<string> | null | undefined;
  restTimeNotNil?: boolean | null | undefined;
};
export type WorkoutWhereInput = {
  and?: ReadonlyArray<WorkoutWhereInput> | null | undefined;
  createdAt?: string | null | undefined;
  createdAtContains?: string | null | undefined;
  createdAtContainsFold?: string | null | undefined;
  createdAtEqualFold?: string | null | undefined;
  createdAtGT?: string | null | undefined;
  createdAtGTE?: string | null | undefined;
  createdAtHasPrefix?: string | null | undefined;
  createdAtHasSuffix?: string | null | undefined;
  createdAtIn?: ReadonlyArray<string> | null | undefined;
  createdAtLT?: string | null | undefined;
  createdAtLTE?: string | null | undefined;
  createdAtNEQ?: string | null | undefined;
  createdAtNotIn?: ReadonlyArray<string> | null | undefined;
  description?: string | null | undefined;
  descriptionContains?: string | null | undefined;
  descriptionContainsFold?: string | null | undefined;
  descriptionEqualFold?: string | null | undefined;
  descriptionGT?: string | null | undefined;
  descriptionGTE?: string | null | undefined;
  descriptionHasPrefix?: string | null | undefined;
  descriptionHasSuffix?: string | null | undefined;
  descriptionIn?: ReadonlyArray<string> | null | undefined;
  descriptionIsNil?: boolean | null | undefined;
  descriptionLT?: string | null | undefined;
  descriptionLTE?: string | null | undefined;
  descriptionNEQ?: string | null | undefined;
  descriptionNotIn?: ReadonlyArray<string> | null | undefined;
  descriptionNotNil?: boolean | null | undefined;
  duration?: string | null | undefined;
  durationContains?: string | null | undefined;
  durationContainsFold?: string | null | undefined;
  durationEqualFold?: string | null | undefined;
  durationGT?: string | null | undefined;
  durationGTE?: string | null | undefined;
  durationHasPrefix?: string | null | undefined;
  durationHasSuffix?: string | null | undefined;
  durationIn?: ReadonlyArray<string> | null | undefined;
  durationLT?: string | null | undefined;
  durationLTE?: string | null | undefined;
  durationNEQ?: string | null | undefined;
  durationNotIn?: ReadonlyArray<string> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  hasUsers?: boolean | null | undefined;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  hasWorkoutLogs?: boolean | null | undefined;
  hasWorkoutLogsWith?: ReadonlyArray<WorkoutLogWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  not?: WorkoutWhereInput | null | undefined;
  or?: ReadonlyArray<WorkoutWhereInput> | null | undefined;
  sets?: number | null | undefined;
  setsGT?: number | null | undefined;
  setsGTE?: number | null | undefined;
  setsIn?: ReadonlyArray<number> | null | undefined;
  setsLT?: number | null | undefined;
  setsLTE?: number | null | undefined;
  setsNEQ?: number | null | undefined;
  setsNotIn?: ReadonlyArray<number> | null | undefined;
  userID?: string | null | undefined;
  userIDContains?: string | null | undefined;
  userIDContainsFold?: string | null | undefined;
  userIDEqualFold?: string | null | undefined;
  userIDGT?: string | null | undefined;
  userIDGTE?: string | null | undefined;
  userIDHasPrefix?: string | null | undefined;
  userIDHasSuffix?: string | null | undefined;
  userIDIn?: ReadonlyArray<string> | null | undefined;
  userIDLT?: string | null | undefined;
  userIDLTE?: string | null | undefined;
  userIDNEQ?: string | null | undefined;
  userIDNotIn?: ReadonlyArray<string> | null | undefined;
  volume?: number | null | undefined;
  volumeGT?: number | null | undefined;
  volumeGTE?: number | null | undefined;
  volumeIn?: ReadonlyArray<number> | null | undefined;
  volumeLT?: number | null | undefined;
  volumeLTE?: number | null | undefined;
  volumeNEQ?: number | null | undefined;
  volumeNotIn?: ReadonlyArray<number> | null | undefined;
};
export type WorkoutLogWhereInput = {
  and?: ReadonlyArray<WorkoutLogWhereInput> | null | undefined;
  createdAt?: string | null | undefined;
  createdAtContains?: string | null | undefined;
  createdAtContainsFold?: string | null | undefined;
  createdAtEqualFold?: string | null | undefined;
  createdAtGT?: string | null | undefined;
  createdAtGTE?: string | null | undefined;
  createdAtHasPrefix?: string | null | undefined;
  createdAtHasSuffix?: string | null | undefined;
  createdAtIn?: ReadonlyArray<string> | null | undefined;
  createdAtLT?: string | null | undefined;
  createdAtLTE?: string | null | undefined;
  createdAtNEQ?: string | null | undefined;
  createdAtNotIn?: ReadonlyArray<string> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  not?: WorkoutLogWhereInput | null | undefined;
  or?: ReadonlyArray<WorkoutLogWhereInput> | null | undefined;
};
export type EquipmentWhereInput = {
  and?: ReadonlyArray<EquipmentWhereInput> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: EquipmentWhereInput | null | undefined;
  or?: ReadonlyArray<EquipmentWhereInput> | null | undefined;
};
export type MusclesGroupWhereInput = {
  and?: ReadonlyArray<MusclesGroupWhereInput> | null | undefined;
  hasExercises?: boolean | null | undefined;
  hasExercisesWith?: ReadonlyArray<ExerciseWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: MusclesGroupWhereInput | null | undefined;
  or?: ReadonlyArray<MusclesGroupWhereInput> | null | undefined;
};
export type ExercisesFragmentPaginationQuery$variables = {
  count?: number | null | undefined;
  cursor?: any | null | undefined;
  exerciseTypeWhereInput?: ReadonlyArray<ExerciseTypeWhereInput> | null | undefined;
  id: string;
  musclesGroupWhereInput?: ReadonlyArray<MusclesGroupWhereInput> | null | undefined;
  orderby?: OrderDirection | null | undefined;
};
export type ExercisesFragmentPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ExercisesFragment">;
  } | null | undefined;
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
    "cacheID": "de4b6d5ea6a1502e94594300acada2bb",
    "id": null,
    "metadata": {},
    "name": "ExercisesFragmentPaginationQuery",
    "operationKind": "query",
    "text": "query ExercisesFragmentPaginationQuery(\n  $count: Int = 4\n  $cursor: Cursor\n  $exerciseTypeWhereInput: [ExerciseTypeWhereInput!] = []\n  $musclesGroupWhereInput: [MusclesGroupWhereInput!] = []\n  $orderby: OrderDirection = DESC\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ExercisesFragment_1FK7Ak\n    id\n  }\n}\n\nfragment ExerciseCardFragment on Exercise {\n  id\n  name\n  image {\n    ...ImageFragment\n  }\n  howTo\n  musclesGroups {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  exerciseTypes {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ExercisesFragment_1FK7Ak on User {\n  id\n  exercises(after: $cursor, first: $count, where: {hasExerciseTypesWith: $exerciseTypeWhereInput, hasMusclesGroupsWith: $musclesGroupWhereInput}, orderBy: {direction: $orderby, field: ID}) {\n    edges {\n      node {\n        id\n        ...ExerciseCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  src\n  srcset\n  width\n  height\n  priority\n  loading\n  fetchPriority\n  decoding\n  layout\n  aspectRatio\n  objectFit\n  breakpoints\n  alt\n  role\n  sizes\n  style {\n    aspectRatio\n    height\n    maxHeight\n    maxWidth\n    width\n  }\n}\n"
  }
};
})();

(node as any).hash = "cf700d5e6905bb7b054815db9da35d89";

export default node;
