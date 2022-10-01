
import React from 'react'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import Navbar from './Navbar'
import bottomShape from '../assets/images/BottomShape.png'
import Footer from './Footer'
import { mywork } from './../assets/data/mywork';


export default function MyWork() {
  return (
    <div style={{backgroundColor:'#0E0824', color:'white', display:'block', maxWidth:'1280px' }}>
        <Navbar/>
        <Box sx={{flexGrow:1, color:'white', backgroundImage:`url(${bottomShape})`, backgroundRepeat: 'repeat-x'}}>
        <Box sx={{display:'flex', width:'100%', flexDirection:'row', flexWrap:'wrap'}}>
        <Box sx={{alignItems:'flex-start', p:'1rem 4rem 0.5rem 4rem', display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
        <Typography variant='h3' component='div' sx={{mb:'2rem', mt:'3rem', fontFamily:'Libre Baskerville', display:'flex', alignItems:'center'}}>My Work</Typography>
        </Box>
        </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', borderRadius:'10px', margin:'4rem 2rem', bgcolor:"rgba(26, 18, 58, 0.6)", padding:'15px 0', alignItems:'center', justifyContent:'center'}}>
        <Typography variant='h5' component='div' sx={{mb:'2rem', mt:'3rem', fontFamily:'Libre Baskerville', display:'flex', }}>Selected Projects</Typography>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', flexWrap:'wrap', m:'25px 0 25px 0', gap:'1rem'}}>
          {
            mywork && mywork.map(item=>{
              const {id, name, type, text, img, active, link} = item;
              return(
                <Box sx={{width:{xs:'100%', sm:'48%', md:'49%'}, display:'flex',  flexDirection:'column', gap:'1rem', mb:'2rem'}} key={id}>
                  <Box><img src={img} alt={name} style={{objectFit:'cover', width:'100%'}}/></Box>
                  <Box sx={{alignItems:'center', justifyContent:'right'}}><span style={{float:'right', marginRight:'2rem', borderRadius:'60px', background:'#DFDCF4', padding:'6px 10px', color:'#8E66E1', fontSize:'12px'}}>{type}</span></Box>
                  <Box sx={{fontSize:'24px', lineHeight:'32px', ml:'2rem', fontWeight:'700', color:'#F7F7F8'}}>{name}</Box>
                  <Box sx={{fontFamily:'IBM Plex Mono', fontSize:'16px', fontWeight:500, height:'170px', lineHeight:'28px', letterSpacing:'0.2px', color:'rgba(223, 223, 223, 0.8)', mr:'2rem', ml:'2rem'}}>{text}</Box>
                  <Box variant='contained' sx={{ml:'2rem', mr:'2rem'}}><a style={{float:'left', marginRight:'2rem', textAlign:'center', borderRadius:'30px', background:!active ? 'rgba(45, 36, 81, 0.6)':'linear-gradient(283.57deg, #7A66E1 6.6%, #8881D7 69.5%, rgba(102, 173, 204, 0.9) 116.55%)', padding:'10px', color:!active ? '#6F6D93' : '#F7F7F8', fontSize:'14px', fontWeight:500, lineHeight:'18.23px', fontFamily:'DM Sans'}} href={link}>View Case Study</a></Box>
                </Box>
              )
            })
          }
          
        </Box>
        </Box>
        <Footer/>
    </div>
  )
}




