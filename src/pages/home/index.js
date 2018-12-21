import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Download from './components/Download';
import BannerImg from './components/BannerImg';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
  componentDidMount(){
    this.props.changeHomeData()
  }

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

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
   const action = actionCreators.getHomeData();
   dispatch(action);
  }
})

export default connect(null, mapDispatchToProps)(Home);