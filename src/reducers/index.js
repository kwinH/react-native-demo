import { combineReducers } from 'redux'

import userInfo from './userInfo'
console.log(userInfo);
const rootReducer = combineReducers({
    userInfo,
});

export default rootReducer