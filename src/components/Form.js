import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormTitle from './FormTitle';
import FormLayout from './FormLayout';
import FormStructure from './FormStructure';
import { getFormStructure } from '../api/apiClient';

const mapStateToProps = state => {
  return {
    structure: state.structure.structure,
    current_form: state.availableForms.current_form
  }
};

class Form extends Component {

  componentDidMount = () => {
    this.prepareForm();
  };

  prepareForm = async () => {
    const form = this.props.current_form;
    const response = await getFormStructure(form.name, form.id);
    if (response === 'error') return;
    this.props.dispatch({type: 'UPDATE', structure: response.form_structure});
  }

  render() {
    return(
      <FormLayout>
        <FormTitle/>
        <hr/>
        <FormStructure structure={this.props.structure}/>
        <hr/>
      </FormLayout>
    );
  }
}

export default connect(mapStateToProps)(Form);
