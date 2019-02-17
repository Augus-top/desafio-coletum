import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormTitle from './FormTitle';
import FormLayout from './FormLayout';
import FormStructure from './FormStructure';
import { getFormStructure } from '../api/apiClient';

const mapStateToProps = state => {
  return {
    structure: state.structure
  }
};

class Form extends Component {

  componentDidMount = () => {
    this.prepareForm();
  };

  prepareForm = async () => {
    const response = await getFormStructure('', 6950);
    if (response === 'error') return;
    this.props.dispatch({type: 'UPDATE', structure: response.form_structure});
  }

  render() {
    return(
      <FormLayout>
        <FormTitle/>
        <hr/>
        <FormStructure/>
        <hr/>
      </FormLayout>
    );
  }
}

export default connect(mapStateToProps)(Form);
