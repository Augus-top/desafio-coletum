import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: Arial;
  color: #a4a5b2
`;

const FormTitle = (props) => {
  return (
    <StyledTitle>
      {props.title}
    </StyledTitle>
  );
}

export default FormTitle;