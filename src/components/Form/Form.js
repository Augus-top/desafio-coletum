import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormTitle from './FormTitle';
import FormLayout from './FormLayout';
import FormStructure from './FormStructure';
import { getFormStructure } from '../../api/apiClient';

const mapStateToProps = state => {
  return {
    ...state
  }
};

class Form extends Component {

  componentDidMount = () => {
    this.props.dispatch({type: 'SET_UPDATE_FLAG', updateFlag: true});
  };

  componentDidUpdate = () => {
    if (this.props.formStructure.updateFlag) this.updateStructure();
  };
  
  updateStructure = async () => {
    const form = this.props.availableForms.currentForm;
    const response = await getFormStructure(form.name, form.id);
    if (response === 'error') return;
    this.props.dispatch({type: 'UPDATE', structure: response.form_structure}); 
    this.props.dispatch({type: 'SET_UPDATE_FLAG', updateFlag: false});
    this.props.dispatch({type: 'RESET_FORM_VALUES'});
    this.props.dispatch({type: 'RESET_STAR_RATING'});
  }

  render() {
    if (this.props.formStructure.updateFlag) return null;
    return(
      <FormLayout>
        <FormTitle title={this.props.availableForms.currentForm.name}/>
        <hr/>
        <FormStructure structure={this.props.formStructure.structure}/>
        <hr/>
      </FormLayout>
    );
  }
}

export default connect(mapStateToProps)(Form);
