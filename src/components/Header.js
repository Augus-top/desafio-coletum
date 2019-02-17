import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { getAvailableForms } from '../api/apiClient';
import styled from 'styled-components';

const StyledDropdown = styled(NavDropdown)`
  background-color: #52a096;

  a {
    color: white
  }

  .nav-link {
    color: white !important
  }

  .dropdown-menu {
    background-color: #52a096;
  }
  
`;

const StyledNavbar = styled(Navbar)`
  .navbar-toggler {
    background-color: #52a096;
  }
`;

const mapStateToProps = state => {
  return {
    forms: state.availableForms.forms,
  }
};

class Header extends Component {
  componentDidMount = () => {
    this.getForms();
  };

  handleSelection = (formId) => {
    const form = this.props.forms.filter(f => f.id === formId);
    this.props.dispatch({type: 'SET_CURRENT_FORM', currentForm: form[0]});
    this.props.dispatch({type: 'SET_UPDATE_FLAG', updateFlag: true}); 
  };

  getForms = async () => {
    const response = await getAvailableForms();
    if (response === 'error') return;
    this.props.dispatch({type: 'SET_FORMS', forms: response.form});
  }

  populateDropdown = () => {
    return(
      <StyledDropdown onSelect={evt => this.handleSelection(evt)} title="Formulários Disponíveis">
      {this.props.forms.map(form => {
        return (
          <NavDropdown.Item key={form.id} eventKey={form.id}>{form.name}</NavDropdown.Item>
        );
      })}
      </StyledDropdown>
    );
  };

  render() {
    return(
    <StyledNavbar variant='dark' expand='md'>
      <StyledNavbar.Toggle aria-controls='basic-navbar-nav' />
      <StyledNavbar.Collapse>
        <Nav className="mr-auto">
          {this.populateDropdown()}
        </Nav>
      </StyledNavbar.Collapse>
    </StyledNavbar>
    );
  }
}

export default connect(mapStateToProps)(Header);
