import * as actionTypes from '../constants/actionTypes'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}


export function logout() {
    const data={}
   return login(data)
}
