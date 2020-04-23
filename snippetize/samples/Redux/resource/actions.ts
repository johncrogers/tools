import { takeLeading } from "redux-saga/effects";

import { GET_$3 } from "constants/action-types";
import { clear$2 } from "actions/$1/clear$2.action";
import { get$2, get$2Worker } from "actions/$1/get$2.action";

/*
    TODO:
        - Fill names:
            1: resource
            2: Resource
            3: RESOURCE
 */

export const $1Actions = { clear$2, get$2 };

export const packageSagas = function* () {
  yield takeLeading(GET_$3, get$2Worker);
};
