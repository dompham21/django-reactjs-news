import { combineReducers } from 'redux';
import ui from './ui_reducers'
import auth from './auth_reducers'

const rootReducer = combineReducers({
    ui,
    auth
})
export default rootReducer;