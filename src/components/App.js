import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import Header from './Header';

library.add(faCalendarAlt);
library.add(faStar);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Header/>
        <Form/>
      </Provider>
    );
  }
}

export default App;
