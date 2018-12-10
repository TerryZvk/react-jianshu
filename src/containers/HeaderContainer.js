import Header from '../common/header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused: () => {
     const action = {
       type: 'FOCUSED_INPUT'
     };
     dispatch(action);
    },
  
    handleBlur: () => {
      const action = {
        type: 'BLUR_INPUT'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
