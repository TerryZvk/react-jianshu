import React, { Fragment, Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  Line, 
  SearchWraper, 
  SearchInfo, 
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {

  getListArea(show){
    if(show){
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }

  render(){
    return(
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
                in={this.props.focused}
                timeout={200}
                classNames='slide'
                >
                <NavSearch 
                  className={this.props.focused ? 'focused' : ''} 
                  onFocus={this.props.handleFocused} 
                  onBlur={this.props.handleBlur}>
                </NavSearch>
              </CSSTransition> 
              <i className='iconfont'>&#xe617;</i>
            {this.getListArea(this.props.focused)}
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
    }
  }

export default Header;



