import React, { Fragment, PureComponent } from 'react';
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

class Header extends PureComponent {

  getListArea(){
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if(newList.length){
      for(let i = (page - 1)* 10;i < page * 10;i++){
        if(newList[i]){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if(focused || mouseIn){
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i className='iconfont spin' ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }

  render(){
    const { focused, list, handleFocused, handleBlur} = this.props;

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
                in={focused}
                timeout={200}
                classNames='slide'
                >
                <NavSearch 
                  className={focused ? 'focused' : ''} 
                  onFocus={() => handleFocused(list)} 
                  onBlur={handleBlur}>
                </NavSearch>
              </CSSTransition> 
              <i className='iconfont'>&#xe617;</i>
            {this.getListArea(focused)}
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



