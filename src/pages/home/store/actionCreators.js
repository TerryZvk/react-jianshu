import axios from 'axios';
import { CHANGE_HOME_DATA, LOAD_MORE_LIST } from './constants';
import { fromJS } from 'immutable';

const homeData = (result) => ({
  type: CHANGE_HOME_DATA,
  articleList: result.articleList,
  bannerImgList: result.bannerImgList,
  recommendList: result.recommendList,
  recommendWriter: result.recommendWriter,
  topicList: result.topicList
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res)=>{
      const result = res.data.data;
      dispatch(homeData(result));
    })
  }
}

const loadMoreList = (list) => ({
  type: LOAD_MORE_LIST,
  list: fromJS(list)
})

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(loadMoreList(result));
    })
  }
}