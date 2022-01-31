import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const initialSate = {};

const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialSate,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;