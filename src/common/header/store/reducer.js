import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.FOCUSED_INPUT:
      return state.set('focused', true);
    case actionTypes.BLUR_INPUT:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data)  
    default:
      return state;  
  }
}