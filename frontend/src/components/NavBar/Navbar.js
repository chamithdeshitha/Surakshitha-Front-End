import React from "react";
import {Nav, NavLink, NavMenu} from "./NavBarElement";

export const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/" activestyle="true">
          Home
        </NavLink>
        <NavLink to="/news" activestyle="true">
          News
        </NavLink>
        <NavLink to="/events" activestyle="true">
          Events
        </NavLink>
        <NavLink to="/aboutus" activestyle="true">
          About Us
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
