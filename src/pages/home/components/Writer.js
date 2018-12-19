import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, AllWriter } from '../style';

class Writer extends Component {
  render() {
    const { recommendWriter } = this.props;
    return (
      <WriterWrapper>
        <div className='title'> 
          <span>推荐作者</span><span>换一批</span>
        </div>
        <ul>
        {
          recommendWriter.map(item => (
            <li key={item.get('id')}>
              <img src={item.get('avatar')} alt='' className='avatar'/>
              <div>
                <div>
                  {item.get('author')}
                </div>
                <div>
                  <span>写了{item.get('writeNum')}</span>.<span>{item.get('likeNum')}喜欢</span>
                </div>
              </div>
              <div>
                <a href='www.baidu.com'>+关注</a>
              </div>
            </li>
          ))
        }
        </ul>
        <AllWriter />
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendWriter: state.getIn(['home', 'recommendWriter'])
})

export default connect(mapStateToProps, null)(Writer);