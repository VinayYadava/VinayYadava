import React from "react";
import '/styles/Navbar.css';
import Link from 'next/link';
const NavList = () => {
  const activeLink="home"

  return (

    <nav className="navbar">
      <Link href="/" className="active">Home</Link>
      <Link href="/About">About</Link>
      <Link href="#">Service</Link>
      <Link href="#">Portfolio</Link>
      <Link href="#">Contact</Link>
    </nav>

  );
}

export default NavList;
