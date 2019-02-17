import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import DateButton from './DateButton';
import StarRating from './StarRating';

const StyledLabel = styled(Form.Label)`
  word-wrap: break-word;
`;


const labelDefaultSize = 4;
const fieldDefaultSize = 6; 

class FormStructure extends Component {
  state = { open: false };

  handleClick = (e) => {
    e.preventDefault();
    
    this.setState({open: true});
  };

  handleChange = (date) => {
    console.log(date);
    this.setState({open: false});
  };

  createInputField = (field) => {
    switch(field.type){
      case 'datefield':
        return (
            <InputGroup>
              <Form.Control type="date" placeholder="DD/MM/AAAA" />
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupPrepend"><DateButton show={this.state.open} handleButton={this.handleClick} handleChange={this.handleChange}/></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
        );
      case 'ratingfield':
          return (
            <StarRating/>
          );
      case 'urlfield':
          return (
            <Form.Control type="url"/>
          );
      default:
          return(
            <Form.Control type="text"/>
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
  }

  createFormFields = () => {
    return (
      <Form>
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
    if (this.props.structure.length === 0) return;
    return (
      this.createFormFields()
    );
  }
}

export default FormStructure;