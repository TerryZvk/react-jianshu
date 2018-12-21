import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
class List extends Component {
  render() {
    const { articleList, getMoreList } = this.props;
    return (
      <div>
        {
          articleList.map((item) => (
            <ListItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt='' />
              <ListInfo>
                <h1><a href='www.baidu.com'>{item.get('title')}</a></h1>
                <div className='abstract'>
                  {item.get('abstract')}
                </div>
                <div className='meta'>
                  <span>{item.get('author')}</span>
                  <span><i className="iconfont">&#xe625;</i> {item.get('commentsNum')}</span>
                  <span><i className="iconfont">&#xe61a;</i> {item.get('likeNum')}</span>
                </div>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={getMoreList}>加载更多</LoadMore>
       </div>
    );
  }
}
const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(){
    const action = actionCreators.getMoreList();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);