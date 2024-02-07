
import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import Navbar from './Navbar'
import bottomShape from '../assets/images/BottomShape.png'
import Footer from './Footer'
import { posts } from './../assets/data/posts';


export default function Posts() {
  return (
    <div style={{backgroundColor:'#0E0824', color:'white', display:'block', maxWidth:'1280px' }}>
        <Navbar/>
        <Box sx={{flexGrow:1, color:'white', backgroundImage:`url(${bottomShape})`, backgroundRepeat: 'repeat-x'}}>
        <Box sx={{display:'flex', width:'100%', flexDirection:'row', flexWrap:'wrap'}}>
        <Box sx={{alignItems:'flex-start', p:'1rem 4rem 0.5rem 4rem', display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
        <Typography variant='h3' component='div' sx={{mb:'2rem', mt:'3rem', fontFamily:'Libre Baskerville', display:'flex', alignItems:'center'}}>Posts</Typography>
        </Box>
        </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', borderRadius:'10px', margin:'4rem 2rem', bgcolor:"rgba(26, 18, 58, 0.6)", padding:'15px 0', alignItems:'center', justifyContent:'center'}}>
        <Typography variant='h5' component='div' sx={{mb:'2rem', mt:'3rem', fontFamily:'Libre Baskerville', display:'flex' }}>My Posts</Typography>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', flexWrap:'wrap', m:'25px 0 25px 0', gap:'1rem'}}>
          {
            posts && posts.map(item=>{
              const {id, img, link} = item;
              return(
                <Box sx={{width:{xs:'100%', sm:'48%', md:'49%'}, display:'flex',  flexDirection:'column', gap:'1rem', mb:'2rem'}} key={id}>
                  <Box><Link href={link} target='_blank'><img src={img} alt='' style={{objectFit:'cover', width:'100%'}}/></Link></Box>
                </Box>
              )
            })
          }
        </Box>
        <Typography component='div' variant='h6' sx={{fontFamily:'inherit'}}><Link sx={{color:'white',  fontStyle:'normal', fontWeight:'700', lineHeight:'28px',  textDecoration:'underline', fontSize:'18px'}} href='https://instagram.com/designlotw?igshid=YmMyMTA2M2Y=' target='_blanck'>View all posts on instagram</Link></Typography>
        </Box>
        <Footer/>
    </div>
  )
}




