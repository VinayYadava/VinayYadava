import React from 'react'
import Image from 'next/image'
import AboutComponent from "../../components/About/Intro"
import CompanyLogo from "../../components/AppHome/CompanyLogo"

export default function About(){
  return (
    <section>
      <AboutComponent/>
      <CompanyLogo/>
    </section>
  )
}

