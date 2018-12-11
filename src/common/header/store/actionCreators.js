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
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const MouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const MouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const ChangePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
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

