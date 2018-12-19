import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';

class BannerImg extends Component {
  render() {
    const { bannerImgList } =this.props;
    return (
      <Carousel autoplay>
        {
          bannerImgList.map(item => (
            <img key={item.get('id')} className='banner' src={item.get('imgUrl')} alt=''/>
          ))
        }
      </Carousel> 
    );
  }
}

const mapStateToProps = (state) => ({
  bannerImgList: state.getIn(['home', 'bannerImgList'])
})

export default connect(mapStateToProps, null)(BannerImg);