import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
  height: 56px;
  position: relative;
  margin: 0 auto;
  width: 1300px;
`

export const Logo = styled.a `
  height: 56px;
  position: absolute;
  width: 100px;
  top: 0;
  left: 0;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div `
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 50px;
  box-sizing: border-box;
`

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
  type: 'text'
}) `
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`
export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div `
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
export const Line = styled.div `
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #f0f0f0;
`

export const SearchWraper = styled.div `
  float: left;
  position: relative;

  .iconfont{
    position: absolute;
    right: 10px;
    top: 20px;
  }
  .spin{
    position: absolute;
    right: 60px;
    top: 19px;
    transition: all .2s ease-in;
    display: block;
    transform-origin: center center;
  }
  
`

export const SearchInfo = styled.div `
  position: absolute;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  left: 0;
  box-shadow: 0 0 8px rgba(0, 0 , 0, .2);
`

export const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span `
  font-size: 13px;
  float: right;
  cursor: pointer;
`
export const SearchInfoList = styled.div `
  overflow: hidden;
`

export const SearchInfoItem = styled.a `
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  display: block;
  float: left;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 12px;
  
`

