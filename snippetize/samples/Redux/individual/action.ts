import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

import { networkActions } from "actions/network.actions";
import { $2, $2_SUCCESS, $2_FAILURE } from "constants/action-types";
import { $3Services } from "services/$3.services";

/*
    TODO:
        - Fill names:
            1: actionGenerator
            2: ACTION_TAG
            3: resource
            4: ActionTag
        - Enter correct types
 */

export function $1(payload: I$4PayloadType) {
  return { type: $2, payload };
}
export function $1Success(response: any) {
  return { type: $2_SUCCESS, payload: response };
}
export function $1Failure(error: any) {
  return { type: $2_FAILURE, payload: error };
}

export function* $1Worker(action: I$4ActionType) {
  try {
    const requestOptions = yield call($3Services.$1, action.payload);
    const response = yield call(
      networkActions.makeAuthenticatedRequest,
      requestOptions
    );
    yield put($1Success(response));
  } catch (error) {
    yield put($1Failure(error));
  }
}

export function* $1SuccessWorker() {
  toast.success(`Success!`);
}

export function* $1FailureWorker() {
  toast.error(`Failure!`);
}

export interface I$4PayloadType {
  key: any;
}

export interface I$4ActionType {
  type: typeof $2;
  payload: I$4PayloadType;
}
export interface I$4SuccessActionType {
  type: typeof $2_SUCCESS;
  payload: any;
}
export interface I$4FailureActionType {
  type: typeof $2_FAILURE;
  payload: any;
}
