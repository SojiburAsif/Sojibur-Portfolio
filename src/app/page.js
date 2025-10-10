import React from 'react'
import PortfolioBanner from './Components/Hero'
import About from './Components/About'
import ContactSection from './Components/Contact'
import Skills from './Components/Skils'
import Projects from './Components/Projects'
import Certificate from './Components/Certificate'

export default function page() {
  return (
    <div><PortfolioBanner></PortfolioBanner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Certificate></Certificate>
      <ContactSection></ContactSection>

    </div>
  )
}
