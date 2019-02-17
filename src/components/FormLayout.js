import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const StyledLayout = styled(Container)`
  background: white

  @media (min-width: 576px) { 
    margin: auto;
    width: 50%;
    padding: 1em;
    border: 2px solid #DDD;
  }

  @media (max-width: 425px) { 
    height: 100vh
  }

  @media (min-width: 576px) { 
    margin: auto;
    width: 50%;
    padding: 1em;
    border: 2px solid #DDD;
  }

`;

const FormLayout = (props) => (
   <StyledLayout>
     {props.children}
   </StyledLayout>
);

export default FormLayout;