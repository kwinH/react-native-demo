import * as actionTypes from '../constants/actionTypes';
//import  storage from '../util/storage';

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})



let defaultState = _loadUserInfo()

export default function userInfoReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            _saveUserInfo(action.data)
            return action.data

        default:
            return state
    }
}


function _saveUserInfo(userInfo) {
    storage.save({
        key: 'userInfo',
        data: userInfo,
        //expires为有效时间
        expires: null
    });
    //localStorage.setItem('userInfo', JSON.stringify(userInfo)) 
}

function _loadUserInfo() {

    storage.load({
        key: 'userInfo'
    }).then(ret => {
        // 如果找到数据，则在then方法中返回
        //console.log('_readData11==' + ret);
        // this.setState({age: ret.age})
        //retunr ret;
    }).catch(err => {
        // 如果没有找到数据且没有sync方法，
        // 或者有其他异常，则在catch中返回
        // console.warn('_readData11 error =' + err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    });











    // let userInfo = localStorage.getItem('userInfo') 
    // if(userInfo){
    //      userInfo = JSON.parse(userInfo)
    //  }else{
    //      userInfo = {}
    //  }
    //  return userInfo
    return {};
}