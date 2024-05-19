import React from 'react';
import { Box, Typography,Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./studio.css";
import  pic from '../picture/studioimg.png';

function Studio() {
    return (
        <>
            
            <Box className="mainBox">  
                     <Box className="boxpart1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0ianj9z4Di0WBa7tBhU0gpTWP_KChL7gz7Pcw6Y9BQ&s" className='image1'/>
                
                     <Typography className="studioheading" style={{display:"block"}}>Your Daily Inspiration for daily fashion</Typography>
                     </Box>

                     <Box className="boxpart2">
                <img src={pic} className='studioimage2'/>
                <Button variant="outlined" className='btnStudio' style={{color:'black', border:"1px solid black",width:"213px",height:"52px"}}>Explore Studio  <ArrowForwardIosIcon/></Button>
                </Box>
                </Box>  
                </>
    )
}

export default Studio