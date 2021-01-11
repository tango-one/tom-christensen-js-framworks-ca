// libraries
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

// styles
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='navbar px-5' dark expand='md'>
      <Link className='navbar-brand' to='/'>
        Game World
      </Link>
      <NavbarToggler className='ml-auto' onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
