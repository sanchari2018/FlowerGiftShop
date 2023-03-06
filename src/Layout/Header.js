import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  

  return (
    <Navbar style={{ position: 'absolute', top: 0, backgroundColor: 'transparent', color: 'black' }} light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Home
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {props.user?.email ? props.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {props.user ? (
            <>
              <NavItem>
                <NavLink
                  onClick={() => {
                    props.setUser(null);
                  }}
                  className="text-white"
                >
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Cart" className="text-white">
                  Cart
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/Signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
