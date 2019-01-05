import React, { PureComponent } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import { GlobalStyle } from './style.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
        <GlobalStyle />
        <HeaderContainer />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/detail' exact component={Detail}/>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
