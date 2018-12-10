const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'FOCUSED_INPUT':
      return {
        focused: true
      };
    case 'BLUR_INPUT':
      return {
        focused: false
      };
    default:
      return state;  
  }
}