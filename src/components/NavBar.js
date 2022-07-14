import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
  
}

const NavBarBackdropStyles = {
  display:"inline-block",
  background:" grey",
  wordSpacing:"50px",
  width:"100%"
 

}

function NavBar() {
  return (
    <div style={NavBarBackdropStyles}>
      <ul>
      <NavLink to='/' style={linkStyles}>
        <li>Home</li>
      </NavLink>
      <NavLink to='/movies' style={linkStyles}>
        <li>Movies</li>
      </NavLink>
      <NavLink to='/directors' style={linkStyles}>
        <li>Directors</li>
      </NavLink>
      <NavLink to='/actors' style={linkStyles}>
        <li>Actors</li>
      </NavLink>
      </ul>
    </div>
  )
}

export default NavBar;
