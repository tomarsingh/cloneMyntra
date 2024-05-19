import { Box } from '@mui/material';
import "./Men.css";
import React, { useState } from 'react';


export default function Men() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
   <Box >
        <Box className="boxCOntainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Box className="first"> 
              <ul>
                <li className='head'>TopWear</li>
                <li>T-Shirts</li>
                <li>Casual Shirts</li>
                <li>Formal Shirts</li>
                <li>SweatShirts</li>
                <li>Sweaters</li>
                <li>Jackets</li>
                <li>Blazer and Coats</li>
                <li>Suits</li>
                <li>Rain Jackets</li>
                <hr className='line'/>
                <li className='head'>Indian and Festive Wear</li>
                <li>Kurta and Kurtas set</li>
                <li>Sherwanis</li>
                <li>Nehru Jacket</li>
                <li>Dhoti</li>
              </ul>
            </Box>
            <Box className="second">
              <ul>
                <li className='head'>BottomWear</li>
                <li>Jeans</li>
                <li>Casual Trousers</li>
                <li>Formal Trousers</li>
                <li>Shorts</li>
                <li> Track Pants & Joggers</li>
                <hr  className='line'/>
                <li className='head'>InnerWear and Slipper</li>
                <li>Briefs & Trunks</li>
                <li>Boxers</li>
                <li>Vests</li>
                <li>SleepWear & LoungeWear</li>
                <li>Thermal</li>
                <hr  className='line'/>
                <li className='head'>Plus Size</li>
              </ul>
            </Box>
            <Box className="third">
<ul>
    <li className='head'>Footwear</li>
    <li>Casual Shoes</li>
    <li>Sports Shoes</li>
    <li>Formal Shoes</li>
    <li>Sneakers</li>
    <li>Sandals & Floaters</li>
    <li>Flip Flops</li>
    <li>Socks</li>
    <hr className='line'/>
    <li className='head'>Personal Care & Grooming</li>
    <li className='head'>Sunglass & Frames</li>
    <li className='head'>Watches</li>
</ul>
            </Box>
            <Box className="fourth">
<ul>
    <li className='head'>Sports & Active Wear</li>
    <li>Sports Shoes</li>
    <li>Sports Sandals</li>
    <li>Active T-Shirts</li>
    <li>Track Pants & Shorts</li>
    <li>Track Suit</li>
    <li>Jacket & SweatShirts</li>
    <li>Sports Accessories</li>
    <li>Swimwear</li>
    <hr  className='line'/>
    <li className='head'>Gadgets</li>
    <li>Smart Wearables</li>
    <li>Fitness Gadgets</li>
    <li>HeadPhones</li>
    <li>Speakers</li>
</ul>
            </Box>
            <Box className="fifth">
               <ul>
                <li className='head'>Fashion Accessories</li>
                <li>Wallets</li>
                <li>Belts</li>
                <li>Perfume & Body mist</li>
                <li>Trimmers</li>
                <li>Deodrants</li>
                <li>Ties,cufflinks & Pocket Square</li>
                <li>Accessory gift Sets</li>
                <li>Caps & Hats</li>
                <li>Mufflers,Scavers & Gloves</li>
                <li>Phone Cases</li>
                <li>Rings & WristWear</li>
                <li>Helmets</li>
                <hr className='line'/>
                <li className='head'>Bags & BackPacks</li>
                <li className='head'>Luggages & Trolley</li>
               </ul>
            </Box>

        </Box>

    </Box>
  )
}
