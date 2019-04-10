import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../reducers";

function configureStore2(initialState) {
    const store = createStore(rootReducer, initialState,
        //触发redux-devtools(浏览器开发工具)
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store;
}

export default function configureStore() {
    // 创建一个中间件集合
    const middleware = [thunk]

    return compose(
        applyMiddleware(...middleware),
        //触发redux-devtools(浏览器开发工具)
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer)

}