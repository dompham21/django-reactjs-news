import {
    call,
    takeLatest,
    put
} from 'redux-saga/effects';
import { loginActionFailed } from '../Actions/auth_actions';
import { postLoginApi } from '../Apis/auth_apis';

function* loginSaga(payload) {
    const { dataToSubmit } = payload
    try {
        const resp = yield call(postLoginApi, dataToSubmit);
        const { status, data } = resp;

        if(status === 200) {
            console.log(data);

        }

    } catch (error) {
        yield put(loginActionFailed(error))
    }
    
}

export function* watchAuthSagas() {
    yield takeLatest("AUTH_LOGIN", loginSaga);
}