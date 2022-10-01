import React from 'react'
import { Box } from '@mui/system'
import desktop from '../assets/images/laptop1.png'
import mobile from '../assets/images/mobile2.png'
import app from '../assets/images/app.png'

export default function Specialization() {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', flexDirection:'column', gap:'6px', mt:'15px', mb:'20px', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{mb:"25px", fontSize:'1.5rem'}}>Areas of Specialization</Box>
        <Box sx={{background:'rgba(26, 18, 58, 0.6)', p:'60px 30px', width:'85%', borderRadius:'18px', display:'flex', flexWrap:'wrap', flexDirection:'row'}} className='as_bx'>
            <Box sx={{background:'rgba(26, 18, 58, 0.6)', width:{xs:'100%', sm:'40%', md:'30%'}, margin:'40px 10px', borderRadius:'18px', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} className='as_it'>
               <Box sx={{display:'flex', alignItems:'center', mb:'auto', justifyContent:'center', p:'10px'}}><img style={{objectFit:'cover', paddingTop:'20px', width:'60%'}} src={desktop} alt="web design" /></Box>
                <Box>Web Design</Box>
            </Box>
            
            <Box sx={{background:'rgba(26, 18, 58, 0.6)', width:{xs:'100%', sm:'50%', md:'30%'}, margin:'40px 10px', borderRadius:'18px', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} className='as_it'>
               <Box sx={{display:'flex', alignItems:'center', mb:'auto', justifyContent:'center', p:'10px'}}><img style={{objectFit:'cover', paddingTop:'20px', width:'60%'}} src={mobile} alt="web design" /></Box>
                <Box>Mobile App Design</Box>
            </Box>

             
            <Box sx={{background:'rgba(26, 18, 58, 0.6)', width:{xs:'100%', sm:'50%', md:'30%'}, margin:'40px 10px', borderRadius:'18px', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} className='as_it'>
               <Box sx={{display:'flex', alignItems:'center', mb:'auto', justifyContent:'center', p:'10px'}}><img style={{objectFit:'cover', paddingTop:'20px', width:'60%'}} src={app} alt="web design" /></Box>
                <Box fontSize='12px'>Web Applications Design</Box>
            </Box>
        </Box>
    </Box>
  )
}
