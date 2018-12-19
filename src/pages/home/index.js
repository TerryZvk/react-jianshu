import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Download from './components/Download';
import BannerImg from './components/BannerImg';

class Home extends Component {
  render() {
    return (
      <HomeWraper>
        <HomeLeft>
          <BannerImg />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
      </HomeWraper>
    );
  }
}

export default Home;