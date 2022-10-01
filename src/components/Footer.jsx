import React from 'react'
import { Box } from '@mui/material'
import bottomShape from '../assets/images/BottomShape.png'
import MyLogo from '../assets/images/MyLogo.png'

export default function Footer() {
  return (
    <Box>
    <Box sx={{height:'6rem', backgroundImage:`url(${bottomShape})`, backgroundRepeat: 'repeat-x'}}></Box>
      <hr style={{background:'rgba(26, 18, 58, 0.6)', marginTop:'5rem'}}/>
      <Box sx={{ marginTop:'2rem', p:'0.5rem 0 2rem 0', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={MyLogo} alt="" style={{width:'70px'}}/>
      </Box>
      
    </Box>
  )
}
