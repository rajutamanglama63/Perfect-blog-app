import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducers} from './reducers/authReducer' 
import {blogReducers} from './reducers/blogReducers' 

const middleware = [thunk];

const reducers = combineReducers({
    auth : authReducers,
    blog : blogReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;