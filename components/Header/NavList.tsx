import React, { useState } from "react";
import "/styles/Navbar.css";
import Link from "next/link";

const NavList = () => {
  const activeLink = "home";

  return (
    <div className="nav-con">
      <nav className="navbar">
        <div>
          <Link href="/" className="active">
            Home
          </Link>
        </div>
        <div>
          <Link href="/About">About</Link>
        </div>
        <div>
          <Link href="#">Service</Link>
        </div>
        <div>
          <Link href="#">Portfolio</Link>
        </div>
        <div>
          <Link href="#">Contact</Link>
        </div>
      </nav>
      
    </div>
  );
};

export default NavList;
