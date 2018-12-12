import Header from '../common/header';
import { connect } from 'react-redux';
import { actionCreators } from '../common/header/store/';

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused: (list) => {
     (list.size === 0) &&  dispatch(actionCreators.getList());
     dispatch(actionCreators.focusedAction());
    },
  
    handleBlur: () => {
      dispatch(actionCreators.blurAction());
    },

    handleMouseEnter: () => {
      dispatch(actionCreators.MouseEnterAction())
    },

    handleMouseLeave: () => {
      dispatch(actionCreators.MouseLeaveAction())
    },

    handleChangePage: (page, totalPage, spin) => {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';

      if(page < totalPage){
        dispatch(actionCreators.ChangePageAction(page + 1))
      }else{
        dispatch(actionCreators.ChangePageAction(page = 1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
