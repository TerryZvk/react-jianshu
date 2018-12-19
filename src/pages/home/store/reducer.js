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
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  recommendWriter: [
    {
      id: 1,
      author: '木清琳',
      avatar: 'http://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writeNum: '216.5k',
      likeNum: '1.2k'
    },
    {
      id: 2,
      author: '遛遛心情的溜妈',
      avatar: 'http:////upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writeNum: '566.5k',
      likeNum: '2.2k'
    },
    {
      id: 3,
      author: '三儿王屿',
      avatar: 'http:////upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writeNum: '253.5k',
      likeNum: '3.2k'
    },
    {
      id: 4,
      author: '老沈',
      avatar: 'http:////upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writeNum: '216.5k',
      likeNum: '4.2k'
    },
    {
      id: 5,
      author: '吴晓布',
      avatar: 'http:////upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writeNum: '221.5k',
      likeNum: '5.2k'
    }
  ],
  bannerImgList: [
    {
      id: 1,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4587/37a0abd67a60ad056442c351f94bc781eb36c704.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 3,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4586/2eff4db8c6dac6253049da311e4f65359e075775.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 4,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 5,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4581/7d2de2315ecbba908b85d9278f5e96896027f28a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
});

export default (state = defaultState, action) => {
  switch(action.type){
   default: 
    return state
  }
}