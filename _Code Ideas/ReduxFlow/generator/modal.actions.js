import {
  TRIGGER_VERIFY_EMAIL_MODAL,
  TRIGGER_VERIFY_EMAIL_MODAL_SUCCESS,
  TRIGGER_VERIFY_EMAIL_MODAL_FAILURE
} from "constants/action-types";

export const modalActions = { triggerVerifyEmailModal };

export const sagas = function*() {
  yield takeLatest(TRIGGER_VERIFY_EMAIL_MODAL, triggerVerifyEmailModalWorker);
  yield takeLatest(
    TRIGGER_VERIFY_EMAIL_MODAL_SUCCESS,
    triggerVerifyEmailModalSuccessWorker
  );
  yield takeLatest(
    TRIGGER_VERIFY_EMAIL_MODAL_FAILURE,
    triggerVerifyEmailModalFailureWorker
  );
};
