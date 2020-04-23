import { defaultState } from "stores/default-state";

/*
    TODO:
        - Fill names:
            1: actionGenerator
            2: ActionTag
            3: Default state location
        - Enter types
 */

export function $1Success(action: I$2SuccessActionType) {
  return action.payload;
}
export function $1Failure() {
  return defaultState.$3;
}
