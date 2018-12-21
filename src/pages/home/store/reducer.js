import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA } from './constants';

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
    default: 
      return state
  }
}