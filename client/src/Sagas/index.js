import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest,
    take,
    all
} from 'redux-saga/effects';
import { postLoginApi } from '../Apis/auth_apis';

function* loginSaga(payload) {
    const { dataToSubmit } = payload
    const resp = yield call(postLoginApi, dataToSubmit);
    const { status, data } = resp;
    console.log(resp);
}

function* rootSaga() {
    yield takeLatest("AUTH_LOGIN", loginSaga);
}
export default rootSaga;
