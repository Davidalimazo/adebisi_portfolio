import React from 'react'
import Carousel from "react-elastic-carousel";
import { carouselItems } from '../assets/data/carouselItems';
import { Box } from '@mui/material';





export default function CarouselD() {

  const [screen, setScreen] = React.useState(window.innerWidth)

  function getScreenSize(){
    setScreen(window.innerWidth)
  }
  React.useEffect(()=>{
   window.addEventListener('resize', getScreenSize);
   return ()=>window.removeEventListener('resize', getScreenSize)
  })


  const breakPoints = [
    { width: screen < 600 ? 2 : 4, itemsToShow: screen < 600 ? 2 : 4 }
   
  ];

  const carouselRef = React.useRef();


  const onEnd=(next, currentIndex)=>{
    if(currentIndex === carouselItems.length){
     carouselRef.current.goTo(0)
    }
  }
 

  return (

    <>
    <Box sx={{display:'flex', flexDirection:'row', alignContent:'center', overflow:'hidden', bgcolor:'inherit', mt:'1rem', width:'100%', height:'150px'}}>
      <Carousel breakPoints={breakPoints} enableAutoPlay enableSwipe enableMouseSwipe showArrows={false}
      ref={carouselRef}
      onNextEnd={onEnd}
      pagination={false}>
        {
          carouselItems && carouselItems.map((item)=>(
            <Box sx={{padding:'10px', display:'flex', alignItems:'center', height:'150px'}} key={item.id}>
            <img
            className="d-block w-100"
            style={{padding:'10px 0', objectFit:'cover', width:'100%', height:'100%'}}
            src={item.img}
            alt="First slide"
          />
            </Box>
          ))
        }
      </Carousel>
    </Box>
  </>

  )
}
