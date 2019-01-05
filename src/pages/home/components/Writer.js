import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper } from '../style';

class Writer extends PureComponent {
  render() {
    const { recommendWriter } = this.props;
    return (
      <WriterWrapper>
        <div className='title'> 
          <span className='left-side'>推荐作者</span><span className='right-side'><i className='iconfont'>&#xe851;</i>换一批</span>
        </div>
        <ul>
        {
          recommendWriter.map(item => (
            <li key={item.get('id')} className='writer'>
              <img src={item.get('avatar')} alt='' className='avatar'/>
              <div className='writer-list'>
                <div className='name'>
                  {item.get('author')}
                </div>
                <div className='writer-info'>
                  <span>写了{item.get('writeNum')}</span>.<span>{item.get('likeNum')}喜欢</span>
                </div>
              </div>
              <div className='follow'>
                <a href='www.baidu.com'>+关注</a>
              </div>
            </li>
          ))
        }
        </ul>
        <div　className='all-writer'>
          <a href='http://www.baidu.com'>查看全部 ></a>
        </div>
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendWriter: state.getIn(['home', 'recommendWriter'])
})

export default connect(mapStateToProps, null)(Writer);