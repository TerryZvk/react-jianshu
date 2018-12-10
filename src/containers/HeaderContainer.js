import Header from '../common/header';
import { connect } from 'react-redux';
import { actionCreators } from '../common/header/store/';

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused: () => {
     dispatch(actionCreators.focusedAction());
    },
  
    handleBlur: () => {
      dispatch(actionCreators.blurAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
