import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import Omgdeals from '../../components/omgDeals/Omgdeals'
import FiveImage from '../../components/fiveimage/FiveImage'
import CardHeading from '../../components/Cardheading/CardHeading'
import MainCard from '../../components/MainCard/MainCard'
import LowerSection from '../../components/lowersection/LowerSection'
import Footer from '../../components/footer/Footer'
import { Box } from '@mui/material'

const Landing = () => {
  const [isActive,setIsAcive] = useState(false)

  const handleMouseEnter = () => {
    setIsAcive(true)
  };

  return (
    <>
      <Navbar isActive={isActive} setIsAcive={setIsAcive}/> 
      <Box onMouseEnter={handleMouseEnter}>
      <Carousel />
      <Omgdeals/> 
      <FiveImage/>
      <CardHeading/>
      <MainCard/>
      <LowerSection/>
      <Footer/>
      </Box>    
    </>
  )
}

export default Landing