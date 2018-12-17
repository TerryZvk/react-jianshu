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
  img{
    width: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`