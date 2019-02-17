import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import DateButton from './DateButton';
import StarRating from './StarRating';

const StyledLabel = styled(Form.Label)`
  word-wrap: break-word
`;

const labelDefaultSize = 2;
const fieldDefaultSize = 4; 

class FormStructure extends Component {
  state = { open: false };

  handleClick = (e) => {
    e.preventDefault();
    
    this.setState({open: true});
    console.log(this.state.open);
  };

  handleChange = (date) => {
    console.log(date);
    this.setState({open: false});
  };

  render() {
    return (
      <Form>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <StyledLabel className='text-right' column xs={labelDefaultSize}>
          Password
        </StyledLabel>
        <Col xs={fieldDefaultSize}>
          <Form.Control type="password" placeholder="Password" />
          <small className='form-text text-muted'>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </small>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextDate">
        <StyledLabel className='text-right' column xs={labelDefaultSize}>
          Date
        </StyledLabel>
        <Col xs={fieldDefaultSize}>
          <InputGroup>
            <Form.Control type="text" placeholder="DD/MM/AAAA" />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroupPrepend"><DateButton show={this.state.open} handleButton={this.handleClick} handleChange={this.handleChange}/></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextStar">
        <StyledLabel className='text-right' column xs={labelDefaultSize}>
          Força
        </StyledLabel>
        <Col xs={fieldDefaultSize}>
          <StarRating/>
        </Col>
      </Form.Group>
    </Form>
    );
  }
}

export default FormStructure;