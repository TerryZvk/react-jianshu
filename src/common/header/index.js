import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, Line, SearchWraper } from './style';

const Header = (props) => (
  <Fragment>
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWraper>
          <CSSTransition 
            in={props.focused}
            timeout={200}
            classNames='slide'
            >
            <NavSearch 
              className={props.focused ? 'focused' : ''} 
              onFocus={props.handleFocused} 
              onBlur={props.handleBlur}>
            </NavSearch>
          </CSSTransition> 
          <i className='iconfont'>&#xe617;</i>
        </SearchWraper>
      </Nav>
      <Addition>
        <Button className='writting'><i className='iconfont'>&#xe624;</i> 写文章</Button>  
        <Button className='reg'>注册</Button>
      </Addition> 
    </HeaderWrapper>
    <Line />
  </Fragment>
)

export default Header;


