import { applyMiddleware, createStore, combineReducers } from 'redux'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { routerReducer } from 'react-router-redux'

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(
                    combineReducers({
                        reducer,
                        middleware,
                        routing: routerReducer
                    })
                )