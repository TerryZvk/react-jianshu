import React, { Component } from 'react';
import { DownloadWrapper, DownloadQRcode, DownloadInfo } from '../style';

class Download extends Component {
  render() {
    return (
      <DownloadWrapper>
        <DownloadQRcode />
        <DownloadInfo>
          <div>下载简书手机App</div>
          <div>随时随地发现和创作内容</div>
        </DownloadInfo>
      </DownloadWrapper>
    );
  }
}

export default Download;