import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Men from './components/Men/Men';
import Carousel from './components/Carousel/Carousel';
import Heading from './components/Heading/Heading';
import CardHeading from './components/Cardheading/CardHeading';
import MainCard from './components/MainCard/MainCard';
import LowerSection from './components/lowersection/LowerSection';
import Omgdeals from './components/omgDeals/Omgdeals';
import FiveImage from './components/fiveimage/FiveImage';
import Footer from './components/footer/Footer';
import Landing from './Screens/LandingPage/Landing';
import { Typography } from '@mui/material';
import { Routes,Route } from 'react-router-dom';
import Studio from './components/studio/Studio';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';




function App() {
  return (
    // <div  style={{width:"100%",}}>
    
    // <Men/>
        
    //   {/* <Landing/> */}
     
  
      
    // </div>
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
  );
}

export default App;
