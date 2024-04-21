import React from "react";
import "../../styles/Navbar.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavList = () => {
  
  const pathname = usePathname();
  const activeLink = "home";
  return (
    <div className="nav-con">
      <nav className="navbar">
        <div>
          <Link href="/" className={pathname==='/'?"active":""}>
            Home
          </Link>
        </div>
        <div>
          <Link href="/About" className={pathname==='/About'?"active":""}>About</Link>
        </div>
        <div>
          <Link href="#" className={pathname==='/Service'?"active":""}>Service</Link>
        </div>
        <div>
          <Link href="#" className={pathname==='/Portfolio'?"active":""}>Portfolio</Link>
        </div>
        <div>
          <Link href="#" className={pathname==='/Contact'?"active":""}>Contact</Link>
        </div>
      </nav>
      
    </div>
  );
};

export default NavList;
