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
  },
  {
    id: 6,
    title: '图片',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id: 7,
    title: '文字',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id: 8,
    title: 'JavaScript',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id: 9,
    title: 'Ruby',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }
],
  articleList: [
    {
      id: 3,
      title: '如今Python那么火，我只推荐这两本书',
      abstract: ' 经常有同学问我Python入门及进阶的学习书籍，所以今天给大家分享两本书。 Python编程：从入门到实践 Python 从入门到实践，豆瓣评分...',
      author: 'IT白鸽',
      commentsNum: 12,
      likeNum: 123,
      imgUrl: '//upload-images.jianshu.io/upload_images/13090773-57a0dc8eb9e76b55?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '为什么那么多自学Python的放弃了？斯坦福教授学习方法大揭秘!',
      abstract: '目前信息化产业发展势头很好，互联网就成为了很多普通人想要涉及的行业，因为相比于传统行业，互联网行业涨薪幅度大，机会也多，所以就会大批的人想要转行...',
      author: 'Python小哥哥',
      commentsNum: 2,
      likeNum: 23,
      imgUrl: '//upload-images.jianshu.io/upload_images/12778909-8951ca654c6e680e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 5,
      title: 'BAT出品的这10款工具，每个都很厉害的不得了',
      abstract: ' 腾讯出品 1：腾讯设计导航 http://idesign.qq.com 腾讯设计导航是腾讯出品的一个良心工具，是腾讯内部设计师使用的设计网站。 ...',
      author: '木子琪',
      commentsNum: 2,
      likeNum: 43,
      imgUrl: '//upload-images.jianshu.io/upload_images/3283382-3cc8dd9fefa74fcb.jpg!thumbnail?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 13,
      title: '如今Python那么火，我只推荐这两本书',
      abstract: ' 经常有同学问我Python入门及进阶的学习书籍，所以今天给大家分享两本书。 Python编程：从入门到实践 Python 从入门到实践，豆瓣评分...',
      author: 'IT白鸽',
      commentsNum: 12,
      likeNum: 123,
      imgUrl: '//upload-images.jianshu.io/upload_images/13090773-57a0dc8eb9e76b55?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 14,
      title: '为什么那么多自学Python的放弃了？斯坦福教授学习方法大揭秘!',
      abstract: '目前信息化产业发展势头很好，互联网就成为了很多普通人想要涉及的行业，因为相比于传统行业，互联网行业涨薪幅度大，机会也多，所以就会大批的人想要转行...',
      author: 'Python小哥哥',
      commentsNum: 2,
      likeNum: 23,
      imgUrl: '//upload-images.jianshu.io/upload_images/12778909-8951ca654c6e680e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 15,
      title: 'BAT出品的这10款工具，每个都很厉害的不得了',
      abstract: ' 腾讯出品 1：腾讯设计导航 http://idesign.qq.com 腾讯设计导航是腾讯出品的一个良心工具，是腾讯内部设计师使用的设计网站。 ...',
      author: '木子琪',
      commentsNum: 2,
      likeNum: 43,
      imgUrl: '//upload-images.jianshu.io/upload_images/3283382-3cc8dd9fefa74fcb.jpg!thumbnail?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  switch(action.type){
   default: 
    return state
  }
}