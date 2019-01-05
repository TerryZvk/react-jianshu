import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props;
    return (
      <div>
        {
          articleList.map((item, index) => (
            <Link key={index} to='/detail'>
              <ListItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h1>{item.get('title')}</h1>
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
            </Link>
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