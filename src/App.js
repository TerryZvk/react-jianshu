import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import { GlobalStyle } from './style.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <HeaderContainer />
      </Provider>
    );
  }
}

export default App;
