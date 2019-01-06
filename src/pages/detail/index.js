import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <img src='//upload-images.jianshu.io/upload_images/13090773-57a0dc8eb9e76b55?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp' alt='' />
        <Content>
        {this.props.content}
        </Content>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

export default connect(mapStateToProps, null)(Home);