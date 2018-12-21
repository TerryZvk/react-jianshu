import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, LOAD_MORE_LIST } from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  recommendWriter: [],
  bannerImgList: []
});

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        recommendWriter: fromJS(action.recommendWriter),
        bannerImgList: fromJS(action.bannerImgList)
      })
    case LOAD_MORE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.list))
    default: 
      return state
  }
}