import React, { Component, Fragment } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, Line } from './style';


class Header extends Component {
  render() {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo href='/' />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>Aa</NavItem>
            <NavSearch></NavSearch>
          </Nav>
          <Addition>
            <Button className='writting'>写文章</Button>  
            <Button className='reg'>注册</Button>
          </Addition> 
        </HeaderWrapper>
        <Line />
      </Fragment>
    );
  }
}

export default Header;