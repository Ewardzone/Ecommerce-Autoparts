import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'

const initialState = {}
const middleware = []

export const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)