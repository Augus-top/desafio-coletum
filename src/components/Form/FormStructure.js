import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from './StarRating';

const StyledLabel = styled(Form.Label)`
  word-wrap: break-word;
`;

const labelDefaultSize = 4;
const fieldDefaultSize = 6; 

const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    currentForm: state.availableForms.currentForm
  }
};

class FormStructure extends Component {

  handleChange = (e) => {
    this.props.dispatch({type: 'UPDATE_VALUE', updateField: e.target.name, updateValue: e.target.value});
    console.log(this.props.formValues);
  };

  createInputField = (field) => {
    switch(field.type){
      case 'datefield':
        return (
            <InputGroup>
              <Form.Control name={field.componentId} type="date" placeholder="DD/MM/AAAA" onChange={e => {this.handleChange(e)}}/>
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
        );
      case 'ratingfield':
          return (
            <StarRating name={field.componentId}/>
          );
      case 'urlfield':
          return (
            <Form.Control name={field.componentId} type="url" onChange={e => {this.handleChange(e)}}/>
          );
      default:
          return(
            <Form.Control name={field.componentId} type="text" onChange={e => {this.handleChange(e)}}/>
          );
    }
  };

  createHelpBlock = (field) => {
    if (field.helpBlock === null) {
      return
    }
    return (
      <small className='form-text text-muted'>
        {field.helpBlock}
      </small>
    )
  };

  createFormFields = () => {
    return (
      <Form onSubmit={e => {this.handleSubmit(e)}}>
        {this.props.structure.map(field => {
          return (
            <Form.Group as={Row} controlId={field.componentId} key={field.componentId}>
              <StyledLabel className='text-right' column xs={labelDefaultSize + 1}  column sm={labelDefaultSize}>
                {field.label}
              </StyledLabel>
              <Col xs={fieldDefaultSize}>
                {this.createInputField(field)}
                {this.createHelpBlock(field)}
              </Col>
            </Form.Group>
          );
        })}
      </Form>
    );
  };

  render() {
    if (this.props.structure.length === 0 || this.props.structure === undefined) return null;
    return (
      this.createFormFields()
    );
  }
}

export default connect(mapStateToProps)(FormStructure);