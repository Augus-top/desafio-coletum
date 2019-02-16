import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

library.add(faCalendarAlt);

const StyledButton = styled.button`
  border:none;
  background: none;
  cursor: pointer;
`;

const StyledDatePicker = styled(DatePicker)`
  display:none;
`;

const DateButton = (props) => {
  return (
    <div>
      <StyledButton onClick={props.handleButton}>
        <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon>
      </StyledButton>
      <StyledDatePicker 
        selected={new Date()} 
        open={props.show} 
        popperPlacement="auto"
        onChange={ props.handleChange }
      />
    </div>
  );
};

export default DateButton;

