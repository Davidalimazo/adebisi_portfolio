import React from 'react'
import { Box, Button } from '@mui/material'
import contact_img from '../assets/images/contact_img.png'

export default function Form() {
  return (
    <Box sx={{background:'rgba(26, 18, 58, 0.6)', borderRadius: "20px", mt:'3.5rem', width:{sx:'100%', sm:'60%', lg:'50%'}}} className='contact' id='contact'>
          <form className='ab_form' style={{flexDirection:'column'}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
              <Box sx={{fontSize:'24px', fontWeight:'700', lineHeight:'40px'}}>Contact me</Box>
              <Box sx={{fontSize:'12px', fontWeight:'400', lineHeight:'16px', textAlign:'center', color:'rgba(223, 223, 223, 0.8)'}}>Get in touch with me👋🏽 and i will respond shortly.....</Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', width:'100%', justifyContent:'center', flexDirection:'column', mt:'2.5rem'}}>
            <input placeholder='Enter your name' type={'text'} className='adb_txf'/>
            <input placeholder='Enter your email address' type={'text'} className='adb_txf'/>
            <textarea placeholder='Type your message...' type={'text'} rows={10} className='adb_txf adb_message'/>
            <Button variant='contained' type='submit' sx={{mt:'2rem', padding:'5px 25px', borderRadius:'30px', background:'linear-gradient(247.96deg, #A145A9 -31.52%, #636BBC 63.23%, #4A7BC4 106.42%)', padding:'10px 20px'}}>send  message</Button>
          </Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <img src={contact_img} className='about_emoji' style={{filter: 'grayscale(70%)'}} alt="" />
          </Box>
          </form>
          <style>
            {
                `
                .adb_txf{
                    flexGrow:0;
                    alignSelf:stretch;
                    color:rgba(223, 223, 223, 0.8);
                    flex:none;
                    background:#181133;
                    width:100%;
                    padding:15px;
                    border-radius:10px;
                    border:none;
                    outline:none;
                    margin-bottom:15px;
                  }
                  .adb_txf:focus{
                    outline:1px solid white;
                  }
                  .ab_form{
                    padding:5rem 5rem 1rem 5rem;
                    display:flex;
                    alignItems:center;
                    justifyContent:center;
                    gap:1rem;
                    width:100%;
                  }
                  .about_emoji{
                    width: 20%;
                  }
                  @media(max-width:600px){
                    .about_emoji{
                      width: 45%;
                    }
                    .ab_form{
                      padding:1rem 2rem 1rem 2rem;
                    }
                  }
                `
            }
          </style>
        </Box>
  )
}
