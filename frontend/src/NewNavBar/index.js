import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../NewNavBar/NavBArElemnts';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img className="Logo" src={process.env.PUBLIC_URL+"/logo2.jpg"}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            User
          </NavLink>
          <NavLink to='/services' activeStyle>
            Editor
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Reviewer
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;