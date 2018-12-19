import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { Carousel } from 'antd';

class Home extends Component {
  render() {
    return (
      <HomeWraper>
        <HomeLeft>
          <Carousel autoplay>
            <img className='banner' src='//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
            <img className='banner' src='//upload.jianshu.io/admin_banners/web_images/4587/37a0abd67a60ad056442c351f94bc781eb36c704.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
            <img className='banner' src='//upload.jianshu.io/admin_banners/web_images/4586/2eff4db8c6dac6253049da311e4f65359e075775.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
            <img className='banner' src='//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
            <img className='banner' src='//upload.jianshu.io/admin_banners/web_images/4581/7d2de2315ecbba908b85d9278f5e96896027f28a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
          </Carousel> 
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