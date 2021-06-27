import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import logoutUser from '../api';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="px-5"light expand="md">
        <NavbarBrand href="/">fitness_frontend</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/LoginRegister">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/activities">Activities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/routines">Routines</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Routine Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Choose a Workout
                </DropdownItem>
                <DropdownItem>
                  Build a Workout
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem 
                href="/logout"
                onClick={<logoutUser/>}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;