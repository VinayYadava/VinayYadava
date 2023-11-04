import React from 'react'
import NavList from './NavList'
import '/styles/PageHeader.css'
const PageHeader = () => {
  return (
    <header className='header  md:flex-row items-center' >
        <a href="" className="logo">VinayYadava.</a>
        <NavList/>
    </header>
  )
}

export default PageHeader