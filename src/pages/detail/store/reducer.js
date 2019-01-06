import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '如今Python那么火，我只推荐这两本书',
  content: "Python 从入门到实践，豆瓣评分9.1分，基于Python3.5也兼顾了2.7。书前半部分（11章）是对Python基础知识的讲解，而后半部分（9章）分别讲述了三个项目实践，从「外星人入侵」游戏，数据可视化，Django WEB开发进行实践。可以说是真的兼顾了「入门」和「实践」。难能可贵的是作者专门拿出一章来讲如何进行单元测试，单元测试我觉得是一个程序员从入门到进阶的必备技能。Python书籍有很多入门兼顾实践的，比如「Python基础教程」但这一本我觉得是讲的更大更细，更完整的书籍，尤其是后面的Django项目，非常紧跟企业工程化开发。"
})

export default (state = defaultState, action) => {
  switch(action.type){
    default: 
      return state
  }
}