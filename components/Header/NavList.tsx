import React from "react";
import '/styles/Navbar.css';

const NavList = () => {
  const activeLink="home"

  return (

    <nav className="navbar">
      <a href="#" className="active">Home</a>
      <a href="/About">About</a>
      <a href="#">Service</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
    </nav>

  );
}

export default NavList;
