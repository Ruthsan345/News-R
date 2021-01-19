import { combineReducers } from 'redux';

import { reducer as homeReducer } from "../modules"

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer });

export default rootReducer;