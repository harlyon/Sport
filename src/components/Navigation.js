import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>

        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Sports Arena</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="a">
                    Soccer
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="a">
                    Basketball
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="a">
                    Racing
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="a">
                    Cycling
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="a">
                    Golf
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;