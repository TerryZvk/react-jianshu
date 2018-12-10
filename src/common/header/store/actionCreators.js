import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const focusedAction = () => ({
  type: actionTypes.FOCUSED_INPUT
})

export const blurAction = () => ({
  type: actionTypes.BLUR_INPUT
})

export const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeListAction(data.data));
    }).catch(() => {
      console.log('err');
    })
  }
}

