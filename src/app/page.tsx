import React from 'react'

import About from './Components/About'
import ContactSection from './Components/Contact'
import Skills from './Components/Skils'
import Projects from './Components/Projects'
import Certificate from './Components/Certificate'
import PortfolioBanner from './Components/Hero'
import MyServices from './Components/Services'

export default function page() {
  return (
    <div>
      <PortfolioBanner></PortfolioBanner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <MyServices></MyServices>
      {/* <Certificate></Certificate> */}
      <ContactSection></ContactSection>
    </div>
  )
}
