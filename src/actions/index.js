import { bindActionCreators } from 'redux'
import * as userInfoActions from '@/actions/userInfo'


export {
    userInfoActions,
}

export const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),

    }
}