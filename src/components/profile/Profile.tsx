import React from 'react';
import { Box, Typography,Button, Divider } from '@mui/material';
import "./profile.css";

function Profile() {
  return (
    <Box className="mainContainerprofile">
     <Typography variant="h6" className="welcomeheading">Welcome</Typography>
     <Typography className="subprofileheading">To access account and manage orders</Typography>
     <Button variant="outlined" className='loginbuttonprofile'>LOGIN / SIGNUP</Button>
     <Divider className='profiledivider'/>
     <Typography className="subprofileheading">Orders</Typography>
     <Typography className="subprofileheading">Whislist</Typography>
     <Typography className="subprofileheading">Gift Cards</Typography>
     <Typography className="subprofileheading">MYntra Insider <span className='profileNew'>New</span></Typography>
     <Typography className="subprofileheading">Myntra Credit</Typography>
     <Typography className="subprofileheading">Coupons</Typography>
     <Typography className="subprofileheading">Saved Cards</Typography>
     <Typography className="subprofileheading">Saved VPA</Typography>
     <Typography className="subprofileheading">Saved Address</Typography>
    </Box>
  )
}

export default Profile;