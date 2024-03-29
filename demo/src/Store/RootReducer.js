import { combineReducers } from 'redux';

import AuthReducer from './Reducer/AuthReducer';

const rootReducer = combineReducers({
  
    authReducer: AuthReducer,
    
});

export default rootReducer;