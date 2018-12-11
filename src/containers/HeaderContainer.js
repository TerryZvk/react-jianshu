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
    handleFocused: () => {
     dispatch(actionCreators.getList());
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

    handleChangePage: (page, totalPage) => {
      if(page < totalPage){
        dispatch(actionCreators.ChangePageAction(page + 1))
      }else{
        dispatch(actionCreators.ChangePageAction(page = 1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
