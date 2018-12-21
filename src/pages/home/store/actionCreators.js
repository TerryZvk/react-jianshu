import axios from 'axios';
import { CHANGE_HOME_DATA } from './constants';

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