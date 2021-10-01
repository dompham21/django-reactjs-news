
import {
    call,
    takeLatest,
    put
} from 'redux-saga/effects';
import { loginActionFailed, loginActionSuccess } from '../Actions/auth_actions';
import { postLoginApi, postRegisterApi } from '../Apis/auth_apis';
import { toast } from 'react-toastify';

function* loginSaga(payload){
    const { dataToSubmit, navigate } = payload
    try {
        const resp = yield call(postLoginApi, dataToSubmit);
       console.log(resp)
        const { status, data } = resp;

        if(status === 200) { 
            localStorage.setItem("accessToken", data.access)
            localStorage.setItem("refreshToken", data.refresh)

            navigate('/admin');          
            yield put(loginActionSuccess(data))
        } 
       
       

    } catch (error) {
        toast.error(error.detail);
        yield put(loginActionFailed());
    }
    
}

function* registerSaga(payload ) {
    const { dataToSubmit, navigate } = payload
    try {
        const resp = yield call(postRegisterApi, dataToSubmit);
        console.log(resp)
        console.log(navigate)
        const { status, data } = resp;

        if(status === 201) { 
            toast.success("Created account successfully!")
            navigate('/login');
            // localStorage.setItem("data", data)          
            yield put(loginActionSuccess(data))
        } 
       
       

    } catch (error) {
        if(error.detail) {
            toast.error(error.detail);
        }
        else if(error.password) {
            toast.error(error.password.join(' '));
        }
        else if(error.email) {
            toast.error(error.email.join(' '));
        }
        yield put(loginActionFailed());
    }
    
}
function* rootSaga() {
    yield takeLatest("AUTH_LOGIN", loginSaga);
    yield takeLatest("AUTH_REGISTER", registerSaga);
}
export default rootSaga;
