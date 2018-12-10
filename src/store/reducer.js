import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/sore';

export default combineReducers({
  header: headerReducer
})