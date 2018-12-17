import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo} from '../style';

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item) => (
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
       </div>
    );
  }
}
const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps, null)(List);