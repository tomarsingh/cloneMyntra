import React from 'react';
import "./login.css";

import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <>
      <Box className="loginMainContainer">

        <Box className="loginSubBox">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" style={{width:"537px", height:"173px"}}/>
          <Box className="subboxlogin">
          <Typography className='loginorsignupHeading'>Login <span className='loginSpan'>or</span> Signup</Typography>
          <TextField variant="outlined"
            margin="normal" required
            fullWidth
            id="phoneNumber"
            label="Phone Number"

            type="tel" defaultValue=" +91 |" className='mobilenumfields'/>
          <Typography className='paraoflogin'>By Continuing, I agree to the <span className='pinkColorPara'>Terms of Use</span> & <span className='pinkColorPara'>Privacy Policy</span></Typography>

          <Button variant="contained" disableElevation>
            CONTINUE
          </Button>
          <Typography className='paraoflogin'>Have trouble loggin In?<span className='pinkColorPara'> Get Help </span></Typography>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default Login;