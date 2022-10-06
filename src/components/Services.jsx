import React from 'react'
import { Box, Grid, Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material'
import bg_gradient from '../assets/images/bg_gradient.png'
import Diamond from '../assets/images/Diamond.png'
import iconcon from '../assets/images/iconcon.png'
import dev from '../assets/images/dev.png'
import piechart from '../assets/images/piechart.png'
import Typed from "react-typed";
import { motion } from "framer-motion/dist/es/index";

export default function Services() {
  return (
    <Box sx={{display:{xs:'block', sm:'flex'}, gap:'1rem', flexDirection:'row', mt:'50px', mb:'50px'}}>
        <motion.div 
        initial={{ 
            x: "-100vw" 
          }}
          animate={{ 
            x: 0
         }}
         transition={{duration:2, delay:-2}}
        style={{flex:1, display:'flex', marginLeft:'35px', alignItems:'center', justifyContent:'center', position:'relative'}}>
        <img src={bg_gradient} style={{objectFit:'cover', width:'75%'}} alt="bg_gradient" />
        <Box sx={{position:'absolute', left:{xs:'70px', sm:'120px'}, fontSize:{xs:'25px', sm:'35px'}}}>
        <Typed
                strings={["Get the best professional Experience.."]}
                typeSpeed={150}
                backSpeed={100}
                backDelay={250}
                startDelay={250}
                loop
              />
       </Box>
    </motion.div>

    <Box sx={{flex:1.3, display:'flex', alignItems:'center', justifyContent:'center', mt:{xs:'2rem'}, mr:{xs:'0px', sm:'2rem'}, color:'black', position:'relative'}}>
    <div className='circle' style={{
        position: "absolute",
        right: "10px",
        borderRadius: "50%",
        backgroundColor: "#19113A",
        zIndex:1
      }}></div>
      <Grid container spacing={2} sx={{mr:{xs:'1rem', sm:'4rem'}, ml:{xs:'1rem'}, position:'relative', alignItems:'center', zIndex:2, justifyContent:'center',}}>
        <Grid item xs={12} sm={6} md={6} sx={{ borderRadius:'12px'}}>
        <Card sx={{ borderRadius:'12px'}}>
            <CardHeader 
            avatar={
                <Avatar sx={{bgcolor:'white'}}><img src={Diamond} style={{width:'80%'}} alt='my services'/></Avatar>
            }
            />
            <CardContent>
            <Typography variant='body' sx={{fontWeight:'bold', mb:'1rem', fontSize:'12.5px'}} component='div'>Bring your ideas to life</Typography>
                <Typography sx={{height:'150px', fontSize:'13px', overflow:'hidden', color:'#858585', lineHeight:'1.5rem'}} variant='body' component='div'>With the use of extensive qualitative and quantitative research methodologies, I help convert project ideas into cohesive and coherent flows which will match the identified business requirements.</Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ borderRadius:'12px'}}>
        <Card sx={{ borderRadius:'12px'}}>
            <CardHeader 
            avatar={
                <Avatar sx={{bgcolor:'white'}}><img src={iconcon} style={{width:'80%'}} alt='my services'/></Avatar>
            }
            />
            <CardContent>
            <Typography variant='body' sx={{fontWeight:'bold', mb:'1rem', fontSize:'12.5px'}} component='div'>End-to-end design</Typography>
                <Typography sx={{height:'150px', fontSize:'13px', overflow:'hidden', color:'#858585', lineHeight:'1.5rem'}} variant='body' component='div'>Using well thought-off design stategies to create well tailored and unique interfaces for your project to target users which will enhance usability.</Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ borderRadius:'12px'}}>
        <Card sx={{ borderRadius:'12px'}}>
        <CardHeader 
        avatar={
            <Avatar sx={{bgcolor:'white'}}><img src={dev} style={{width:'70%'}} alt='my services'/></Avatar>
        }
        />
        <CardContent>
        <Typography variant='body' sx={{fontWeight:'bold', mb:'1rem', fontSize:'12.5px'}} component='div'>Prepare design for handoff</Typography>
            <Typography sx={{height:'150px', fontSize:'13px', overflow:'hidden', color:'#858585', lineHeight:'1.5rem'}} variant='body' component='div'>Smooth and efficient handoff of design files and assets to developers using appropriate tool for seamless and perfect implementation of interface designs by developers.</Typography>
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ borderRadius:'12px'}}>
        <Card sx={{ borderRadius:'12px'}}>
            <CardHeader 
            avatar={
                <Avatar sx={{bgcolor:'white'}}><img src={piechart} style={{width:'80%'}} alt='my services'/></Avatar>
            }
            />
            <CardContent>
            <Typography variant='body' sx={{fontWeight:'bold', mb:'1rem', fontSize:'12.5px'}} component='div'>Build designs that scale</Typography>
                <Typography sx={{height:'150px', fontSize:'13px', overflow:'hidden', color:'#858585', lineHeight:'1.5rem'}} variant='body' component='div'>Creating design systems with reusable components & assets that automatically scale to fit diverse users` screens thereby enabling responsiveness and providing seamless experience to users.</Typography>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
    </Box>
    <style>
            {
                `
                .circle{
                    height: 691px;
                    width: 691px; 
                    position: absolute;
                }
                @media(max-width:1024px){
                    .circle{
                        height: 35rem;
                        width: 35rem; 
                    }
                    
                }
                @media(max-width:600px){
                    .circle{
                        height: 25rem;
                        width: 25rem; 
                    }
                   
                }
                `
            }
    </style>
  </Box>
  )
}
