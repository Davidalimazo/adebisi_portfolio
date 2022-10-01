import React, { useState, useEffect } from 'react'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import Navbar from './Navbar'
import me_colored from '../assets/images/me_colored.png'
import bottomShape from '../assets/images/BottomShape.png'
import emojigirl from '../assets/images/emojigirl.png'
import {FaPhoneSquareAlt} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import Footer from './Footer'
import Form from './Form'
import {motion} from 'framer-motion'


export default function About() {
  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div style={{backgroundColor:'#0E0824', color:'white', display:'block', maxWidth:'1280px'}}>
        <Navbar/>
    <Box sx={{flexGrow:1, color:'white', backgroundImage:`url(${bottomShape})`, backgroundRepeat: 'repeat-x'}}>
        <Box sx={{display:'flex', width:'100%', flexDirection:'row', flexWrap:'wrap'}}>
        <Box sx={{order:{xs:2, sm:1}, width:{xs:'100%',sm:'60%'}, alignItems:'flex-start', p:'1rem 4rem 0.5rem 4rem', display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
        <Typography variant='h3' component='div' sx={{mb:'2rem', fontFamily:'Libre Baskerville', display:'flex', alignItems:'center'}}>About Me</Typography>
        <Typography variant='h6' sx={{fontSize:'1.20rem', fontFamily:'IBM Plex Mono', mb:'1.5rem'}}>3 years of experience</Typography>
        </Box>

        <Box sx={{order:{xs:1, sm:2}, width:{xs:'100%', sm:'40%'}, display:'flex', flexDirection:'column', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{borderRadius:'60%',height:'88%'}}><motion.img 
        initial={{x:width > 767 ? '200vw' : 0}}
        animate={{x:0}}
        transition={{duration:2, delay:-2}}
        
        src={me_colored} style={{width:'100%', objectFit:'cover', borderRadius:'60%', height:'90%'}} alt="adebisi temi" /></Box> 
        </Box>
    </Box>
        </Box>
        <Box>
        <Typography variant='body2' component='p' sx={{fontFamily:'IBM Plex Mono', lineHeight:'2rem', p:'1rem 4rem 2.5rem 4rem', color:'rgba(223, 223, 223, 0.8)', mb:'3rem'}}>Hi there 👋, I am a Digital Product Designer, passionate about solving complex users' problems through intuitive, user-friendly and beautiful designs. I have 3 years of experience working across diverse sectors, creating amazing digital experiences. I have a profound interest in creating aesthetically pleasing, functional, and usable digital products with strategic design thinking process to provide great user experience and to aid business growth & profitability. 

        I love designing and few times when I'm not designing, I'm either watching movie or listening to music.
        
        I am willing to help with the end-to-end design of your project by using well thought-off design strategies that will create an intriguing product experience to target users which will enable maximal usability, drive product growth and lead to higher conversion rate.
        I look forward to working with you to help convert your project idea into an amazing digital experience.</Typography>
        </Box>
    <Box sx={{p:'2rem 4rem 0.5rem 4rem', display:'flex', mb:'5rem', gap:'1rem', width:'100%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{display:'flex', gap:'1rem', width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center', position:'relative'}}>
        <div className='spike_mobile' style={{
        position: "absolute",
        left: "180px",
        height: "0.3rem",
        width: "6rem", 
        backgroundColor: "grey",
        opacity:0.5,
        borderRadius:'0 30% 30% 0',
        zIndex:1
        }}></div>
        <Box sx={{fontSize:{xs:'1.6rem', sm:'2rem'}}}>Thanks for Visiting</Box>
        <div className='spike_mobile' style={{
          position: "absolute",
          right: "180px",
          height: "0.3rem",
          width: "6rem", 
          backgroundColor: "grey",
          borderRadius:'30% 0 0 30%',
          opacity:0.5,
          zIndex:1
          }}></div>
        </Box>
        <Box sx={{display:'flex', width:'100%', gap:'1rem', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{display:'flex', mb:'2rem', alignItems:'center', justifyContent:'center'}}><img src={emojigirl} className='about_emoji' alt="" /></Box>
          <Box sx={{display:'flex', fontSize:{xs:'0.9rem', sm:"1.2rem"}, textAlign:{xs:'center', sm:'center'}, flexDirection:'column', alignItems:'center', justifyContent:'center', color:'rgba(223, 223, 223, 0.8)'}}>Looking forward to having a conversation with you</Box>
          <Box sx={{display:'flex', flexWrap:'wrap', mt:'1.4rem', gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Box sx={{display:'flex', fontSize:"0.6rem", gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <span><FaPhoneSquareAlt fontSize='20px' color='rgba(213, 184, 255, 0.6)'/></span>
              <span><a  href='tel:+2348069810575'  target='_blank'>+2348069810575</a></span>
            </Box>
            <Box sx={{display:'flex', fontSize:"0.6rem", gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <span><IoMdMail fontSize='20px' color='rgba(213, 184, 255, 0.6)'/></span>
              <span><a href='mailto:temiiadebisi@gmail.com'  target='_blank'>temiiadebisi@gmail.com</a></span>
            </Box>
            <Box sx={{display:'flex', fontSize:"0.6rem", gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <span><FaLinkedin fontSize='20px' color='rgba(213, 184, 255, 0.6)'/></span>
              <span><a href='https://www.linkedin.com/in/adebisi-kupoluyi' target='_blank'>LinkedIn</a></span>
            </Box>
            <Box sx={{display:'flex', fontSize:"0.6rem", gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <span><FaBehanceSquare fontSize='20px' color='rgba(213, 184, 255, 0.6)'/></span>
              <span><a href='https://www.behance.net/adebisikupoluyi' target='_blank'>Behance</a></span>
            </Box>
            <Box sx={{display:'flex', fontSize:"0.6rem", gap:'1rem', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <span><AiFillInstagram fontSize='20px' color='rgba(213, 184, 255, 0.6)'/></span>
              <span><a href='https://instagram.com/designlotw?igshid=YmMyMTA2M2Y=' target='_blank'>Instagram</a></span>
            </Box>
          </Box>
        </Box>
          <Form id='#contact'/>
        </Box>
        <Footer/>
        <style>
        {
          `
          @media(max-width:600px){
            .spike_mobile{
              display:none;
            }
          }
          `
        }
        </style>
    </div>
  )
}
