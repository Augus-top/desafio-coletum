import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableForms } from '../api/apiClient';

const mapStateToProps = state => {
  return {
    forms: state.forms,
  }
};

class Header extends Component {
  componentDidMount = () => {
    this.getForms();
  };

  getForms = async () => {
    const response = await getAvailableForms();
    if (response === 'error') return;
    this.props.dispatch({type: 'SET_FORMS', forms: response.form});
  }

  render() {
    return(
      null
    );
  }
}

export default connect(mapStateToProps)(Header);
