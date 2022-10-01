import React from 'react'
import { Container } from '@mui/material'
import Navbar from './Navbar'
import Hero from './Hero'
import Specialization from './Specialization'
import Services from './Services'
import FeaturedProjects from './FeaturedProjects'
import Footer from './Footer'

export default function Layout() {
 
  return (
    <div style={{backgroundColor:'#0E0824', color:'white', display:'block', maxWidth:'1280px'}}>
      <Navbar/>
      <Hero/>
      <Specialization/>
      <Services/>
      <FeaturedProjects/>
      <Footer/>
    </div>
  )
}
