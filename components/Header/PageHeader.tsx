"use client"
import React from 'react'
import {useState} from 'react'
import NavList from './NavList'
import '/styles/PageHeader.css'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageHeader = () => {
  const [isHidden, setHidden] = useState(false)

  const toggleVisibility: ()=>void = () => {
    setHidden(!isHidden);
    console.log(isHidden);
  };
  return (
    <header className='header' >
        <div className="logo-div">
          <a href="" className="logo">VinayYadava.</a>
          <button className="toggle-button" onClick={toggleVisibility} name='bars'>
          <FontAwesomeIcon className="bar" icon={faBarsStaggered} size='2x'/>
          </button>
        </div>
        
        <div className={`${isHidden ? 'hidden' : ' '}navlist`}>
          <NavList/>
        </div>
    </header>
  );
};

export default PageHeader