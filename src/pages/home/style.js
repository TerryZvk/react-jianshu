import styled from 'styled-components';

export const HomeWraper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  padding-top: 30px;
  margin-left: 15px;
  .banner{
    width: 625px;;
    display: block;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
`

export const TopicItem = styled.div `
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 10px;

  .topic-pic{
    width: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`
export const ListItem = styled.div `
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 18px;
  margin-bottom: 20px;
  img{
    width: 150px;
    float: right;
  }
`

export const ListInfo = styled.div `
  width: 470px;
  .abstract {
    margin: 0 0 8px;
    font-size: 14px;
    line-height: 24px;
    color: #999;
  }
  h1 {
    margin-bottom: 5px;
  }
  h1 a{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #000;
    text-decoration: none;
  }

  h1 a:hover{
    text-decoration: underline;
  }

  .meta{
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #999;
    font-size: 14px;

    .iconfont{
      font-size: 13px;
    }
  }

  .meta span {
    display: inline-block;
    margin-right: 10px;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  height: 52px;
  width: 280px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const DownloadWrapper = styled.div`
  width: 280px;
  height: 82px;
  padding: 10px 22px;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
`

export const DownloadQRcode = styled.div`
  width: 60px;
  height: 60px;
  float: left;
  background: url(http:////cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png);
  background-size: contain;
`
export const DownloadInfo = styled.div`
  float: left;
  margin: 10px;
`
export const WriterWrapper = styled.div`
  margin-top: 24px;
  .avatar{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .title{
    overflow: hidden;
    font-size: 14px;
    color: #969696;margin-bottom: 10px;
    .left-side{
      float: left
    }
    .right-side{
      float: right;
    }
  }
  .writer{
    overflow: hidden;
    margin-bottom: 15px;
    .avatar{
      float: left;

    }
    .writer-list{
      float: left;
      .name{
        padding-top: 5px;
        font-size: 14px;
      }
      .writer-info{
        font-size: 12px;
        color: #969696;
      }
    }
    .follow{
      float: right;
      margin-top: 5px;
      padding: 0;
      a{
        font-size: 13px;
        color: #42c02e;
      }  
    }
  }
  .all-writer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    a{
      display: block;
      color: #787878;
      font-size: 13px;
    }
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  bottom: 100px;
  right: 100px;
  font-size: 14px;
`