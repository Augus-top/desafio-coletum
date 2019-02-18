import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: Arial;
  color: #a4a5b2;

  @media (max-width: 768px) { 
    text-align: center;
  }

  @media (max-width: 425px) { 
    margin: 0;
    padding: 0.5em 0 0 0;
  }
`;

const FormTitle = (props) => {
  return (
    <StyledTitle>
      {props.title}
    </StyledTitle>
  );
}

export default FormTitle;