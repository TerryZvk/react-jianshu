import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';

class Home extends Component {
  render() {
    return (
      <HomeWraper>
        <HomeLeft>
          <img className='banner' src='http://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWraper>
    );
  }
}

export default Home;