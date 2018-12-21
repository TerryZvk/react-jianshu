import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, LOAD_MORE_LIST, BACK_TOP } from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  recommendWriter: [],
  bannerImgList: [],
  showScroll: false
});

const homeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    recommendWriter: fromJS(action.recommendWriter),
    bannerImgList: fromJS(action.bannerImgList)
  })
}

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_HOME_DATA:
      return homeData(state, action)
    case LOAD_MORE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.list))
    case BACK_TOP:
      return state.set('showScroll', action.value)
    default: 
      return state
  }
}