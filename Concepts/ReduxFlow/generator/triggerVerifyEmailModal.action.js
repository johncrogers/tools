import {
  TRIGGER_VERIFY_EMAIL_MODAL,
  TRIGGER_VERIFY_EMAIL_MODAL_SUCCESS,
  TRIGGER_VERIFY_EMAIL_MODAL_FAILURE
} from "constants/action-types";

export function triggerVerifyEmailModal(
  payload: TriggerVerifyEmailPayloadType
) {
  return { type: TRIGGER_VERIFY_EMAIL_MODAL, payload };
}
export function triggerVerifyEmailModalSuccess(response: object) {
  return { type: TRIGGER_VERIFY_EMAIL_MODAL_SUCCESS, payload: response };
}
export function triggerVerifyEmailModalFailure(error: object) {
  return { type: TRIGGER_VERIFY_EMAIL_MODAL_FAILURE, payload: error };
}

export function* triggerVerifyEmailModalWorker(
  action: TriggerVerifyEmailModalType
) {
  try {
    const response = yield call(
      modalService.triggerVerifyEmailModal,
      action.payload
    );
    yield put(triggerVerifyEmailModalSuccess(response));
  } catch (error) {
    yield put(triggerVerifyEmailModalFailure(error));
  }
}
export function* triggerVerifyEmailModalSuccessWorker() {
  toast.success(`Success!`);
}
export function* triggerVerifyEmailModalFailureWorker() {
  toast.error(`Failure!`);
}

type TriggerVerifyEmailPayloadType = { key: type };
type TriggerVerifyEmailModalActionType = {
  type: typeof TRIGGER_VERIFY_EMAIL_MODAL,
  payload: TriggerVerifyEmailPayloadType
};
type TriggerVerifyEmailModalSuccessActionType = {
  type: typeof TRIGGER_VERIFY_EMAIL_MODAL_SUCCESS,
  payload: object
};
type TriggerVerifyEmailModalFailureActionType = {
  type: typeof TRIGGER_VERIFY_EMAIL_MODAL_FAILURE,
  payload: object
};
