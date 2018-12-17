import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }
]
});

export default (state = defaultState, action) => {
  switch(action.type){
   default: 
    return state
  }
}