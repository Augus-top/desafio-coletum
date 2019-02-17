import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../redux/store";
import FormTitle from './FormTitle';
import FormLayout from './FormLayout';
import FormStructure from './FormStructure';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt);
library.add(faStar);

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <FormLayout>
        <FormTitle/>
        <hr/>
        <FormStructure/>
        <hr/>
      </FormLayout>
      // </Provider>
    );
  }
}

export default App;
