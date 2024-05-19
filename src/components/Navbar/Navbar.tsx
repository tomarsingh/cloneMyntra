import { Avatar, Typography, } from '@mui/material';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import React from 'react'
import "./navbar.css";
import ima from "../images/logo.jpg";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Tooltip from '@mui/material/Tooltip';
import Men from '../Men/Men';
import { useNavigate } from 'react-router-dom';
import Women from '../women/Women';
import Kids from '../kids/Kids';
import Home from '../home&Living/Home';
import Studio from '../studio/Studio';
import Profile from '../profile/Profile';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f5f5f6",
  width: "200%",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,


  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(1),
  //   width: 'auto',
  // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',


  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '65ch',
      height: "45px",
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

function open() {
  <>
    <Men />
  </>

}

// function openNow(){

//   <>
//   <Men/>

//   </>

// }


export default function Navbar({isActive, setIsAcive}:any) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isWomenHovered, setIsWomenHovered] = useState(false);
  const [iskidsEnter, setiskidsEnter] = useState(false);
  const [isHomeEnter, setHomeEnter] = useState(false);
  const [isStudioEnter, setStudioEnter] = useState(false);
  const [isProfileEnter, setProfileEnter] = useState(false);
  let localState = localStorage.getItem("hover")

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    if (isActive) {
    setIsAcive(false)
    setIsWomenHovered(false);
      setIsHovered(false);
      setiskidsEnter(false);
      setHomeEnter(false);
      setStudioEnter(false);
      
    }
  }, [isActive])

  const handleMouseLeave = () => {
    // setIsHovered(false);
  };

  const handleWomenMouseEnter = () => {
    setIsWomenHovered(true);
    setIsHovered(false);
  };

  const handleWomenMouseLeave = () => {
    setIsHovered(false);
  }

  const kidsenter = () => {
    setiskidsEnter(true);
    setIsWomenHovered(false);
    setIsHovered(false);
  }
  const kidsleaves = () => {
    // setiskidsEnter(false);
    // setIsWomenHovered(false);
    // setIsHovered(false);

  }
  const myntraImage = () => {
    navigate("/")

  }

  const homeEnter = () => {
    setHomeEnter(true);

  }

  const homeLeave = () => {
    // setHomeEnter(false);
  }

  const studioEnter = () => {
    setStudioEnter(true);
  }

  const studioLeave = () => {
    // setStudioEnter(false);
  }

  const profileEnter = () => {
    setProfileEnter(true);
  }

  const profileLeave = () => {
    setProfileEnter(false);
  }


  return (
    <Box >
      <Box className="mainContainer">
        <img src={ima} className='logoImg' onClick={myntraImage} />
        <Box className="navbarName">

          <ul className='listAll'>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >MEN</li>
            <li onMouseEnter={handleWomenMouseEnter} onMouseLeave={handleWomenMouseLeave}>WOMEN</li>
            <li onMouseEnter={kidsenter} onMouseLeave={kidsleaves}>KIDS</li>
            <li onMouseEnter={homeEnter} onMouseLeave={homeLeave}>HOME LIVING</li>

            <li onMouseEnter={studioEnter} onMouseLeave={studioLeave}>STUDIO <span className='new'>NEW</span></li>
          </ul>
        </Box>


        <Box className="searchIcon">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products brands and more..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box className="profile" onMouseEnter={profileEnter} onMouseLeave={profileLeave}>
          <Person3OutlinedIcon />
          <p className='para'  >Profile</p>
        </Box>
        <Box className="whislist">
          <FavoriteBorderIcon />
          <p className='para'>Wishlist</p>
        </Box>

        <Box className="shopping">
          <ShoppingBagOutlinedIcon />
          <p className='para'>Bag</p>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{isHovered && <Men />}</Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{isWomenHovered && <Women />}</Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{iskidsEnter && <Kids />}</Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{isHomeEnter && <Home />}</Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{isStudioEnter && <Studio />}</Box>
      <Box sx={{ position: 'absolute', top: "90px", left: "90px", zIndex: "5" }}>{isProfileEnter && <Profile />}</Box>
    </Box>
  )
};
