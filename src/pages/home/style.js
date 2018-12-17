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
  width: 240px;
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