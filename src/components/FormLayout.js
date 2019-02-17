import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const StyledLayout = styled(Container)`
  margin: 2em 8em 2em 8em;
  padding: 1em;
  border: 2px solid #DDD;
  background: white
`;

const FormLayout = (props) => (
   <StyledLayout>
     {props.children}
   </StyledLayout>
);

export default FormLayout;