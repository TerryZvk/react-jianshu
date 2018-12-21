import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight, BackTop } from './style';
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
    this.props.changeHomeData();
    this.bindEvents();
  }

  handleScrollTop(){
    window.scrollTo(0, 0)
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
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
        {this.props.showScroll ? ( <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> ): null}
       
      </HomeWraper>
    );
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
   const action = actionCreators.getHomeData();
   dispatch(action);
  },

  changeScrollTopShow(){
    const scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop > 200){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);