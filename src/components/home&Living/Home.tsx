import React from 'react';
import { Box, Divider } from '@mui/material';
import "./home.css";

const Home = () => {
  return (
    <Box className="maincontainer">
        <Box className="first">
            <ul>
                <li className='mainHeading'>Bed Linen & Furnishing</li>
            <li>Bed Runners</li>
            <li>Mattress Protectors</li>
            <li>Bed Sheets</li>
            <li>Bedding Sheets</li>
            <li>Blankets,Quilts & Dohars</li>
            <li>Pillows & Pillows Cover</li>
            <li>Bed Covers</li>
            <li>Chairs Pad & Covers</li>
            <li>Sofa Covers</li>
            <Divider className='divider'/>
            <li className='mainHeading'>Flooring</li>
            <li>Floor Runners</li>
            <li>Carpets</li>
            <li>Floor Mats & Dhurries</li>
            <li>Door Mats</li>
            </ul>
        </Box>
        <Box className="second">
            <ul>
                <li className='mainHeading'>Bath</li>
                <li>Bath Towels</li>
                <li>Hand & face Towels</li>
                <li>Beach Towels</li>
                <li>Towel Set</li>
                <li>Bath Rugs</li>
                <li>Bath Robes</li>
                <li>Bathroom Accessories</li>
                <li>Shower Curtain</li>
                <Divider className='ivider'/>
                <li className='mainHeading'>Lamps & Lighting</li>
                <li>Floor lamps</li>
                <li>Ceiling lamps</li>
                <li>Table Lamps</li>
                <li>Wall Lamps</li>
                <li>Outdoor Lamps</li>
                <li>Strings Light</li>

            </ul>
        </Box>
        <Box className="third">
            <ul>
                <li className='mainHeading'>Home Decor</li>
                <li>Plants & Planters</li>
                <li>Aromas & Candles</li>
                <li>Clocks</li>
                <li>Mirrors</li>
                <li>Wall Decor</li>
                <li>Festive Decor</li>
                <li>Pooja Essentials</li>
                <li>Wall Shelves</li>
                <li>Fountains</li>
                <li>Showpieces & Vases</li>
                <li>ottoman</li>
                <Divider className='divider'/>
                <li className='mainHeading'>Cushions & Cushions Cover</li>
                <li className='mainHeading'>Curtains</li>
            </ul>
        </Box>
        <Box className="fourth">
            <ul>
                <li className='mainHeading'>Home Gift Sets</li>
                <li className='mainHeading'>Kitchen & Table</li>
                <li>table Runners</li>
                <li>Dinnerware & Serveware</li>
                <li>Cups & Mugs</li>
                <li>Bakeware & Cookware</li>
                <li>Kitchen Storage & Tools</li>
                <li>Bar & Drinkware</li>
                <li>Table Cover & Furnishing</li>
                <Divider className='divider'/>
                <li className='mainHeading'>Storage</li>
                <li>Bins</li>
                <li>Hangers</li>
                <li>Organiers</li>
                <li>Hooks & Holders</li>
                <li>Laundry Bags</li>
            </ul>
        </Box>
        <Box className="fifth">
            <ul>
                <li  className='mainHeading'>Brands</li>
                <li>H&M</li>
                <li>Marks & Spencer</li>
                <li>Home Center</li>
                <li>Spaces</li>
                <li>D'Decor</li>
                <li>Story@Home</li>
                <li>Pure Home & Living</li>
                <li>Swayam</li>
                <li>raymond Home</li>
                <li>Maspar</li>
                <li>My trident</li>
                <li>Cortina</li>
                <li>Random</li>
                <li>Ellementry</li>
                <li>ROMEE</li>
                <li>SEj BY Nisha Gupta</li>
            </ul>
        </Box>
    </Box>
  )
}

export default Home