import React from 'react'
import PortfolioBanner from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import ContactSection from './Components/Contact'
import Skills from './Components/Skils'

export default function page() {
  return (
    <div><PortfolioBanner></PortfolioBanner>
    <About></About>
    {/* <Projects></Projects> */}
    <ContactSection></ContactSection>
    <Skills></Skills>
    </div>
  )
}
