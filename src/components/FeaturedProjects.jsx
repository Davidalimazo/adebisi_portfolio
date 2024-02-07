import React from 'react'
import { Box, Link, Typography } from '@mui/material';
import { projects } from '../assets/data/project';

const Projects=({data})=>{
    return(
    <Box sx={{width:'100%', display:'flex', flexDirection:'row', flexWrap:'wrap', m:'25px 0 25px 0', gap:'1rem'}}>

        {
            data && data.map((item, i)=>(
                <Box sx={{width:{xs:'100%', sm:'48%', md:'49%'}}}  key={item.id}>
                    <Link href=''><img src={item.img} style={{objectFit:'cover', width:'100%'}} alt=""/></Link>
                </Box>
            ))
        }
    </Box>
    )
}

export default function FeaturedProjects() {
  return (
    <>
    <Box sx={{pl:'2rem', display:'flex', flexWrap:'wrap', p:'5rem 0 5rem 0', flexDirection:'column', m:'4rem 2rem 4rem 2rem', alignItems:'center', justifyContent:'center', bgcolor:'rgba(26, 18, 58, 0.6)'}}>
    <Typography component='div' variant='h6' sx={{fontFamily:'inherit', fontSize:'1.5rem'}}>Featured Projects</Typography>
        <Projects data={projects} />
        <Typography component='div' variant='h6' sx={{fontFamily:'inherit'}}><Link sx={{color:'white', textDecoration:'underline', fontSize:'inherit'}} href='https://www.behance.net/adebisikupoluyi' target='_blanck'>View all projects on behance</Link></Typography>
    </Box>
    </>
  )
}
