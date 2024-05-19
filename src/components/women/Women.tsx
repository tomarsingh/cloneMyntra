import { Box, Divider } from '@mui/material'
import { useState } from 'react';
import React from 'react';
import "./women.css";

function Women() {
   
    return (
        <Box className="maincontainer">
            <Box className="first">
                <ul className='unorderlist'>
                    <li className='heading'>Indian & Fusion Wear</li>
                    <li>Kurtas & Suits</li>
                    <li>Kurtis,Tunics & Tops</li>
                    <li>Sarees</li>
                    <li>Ethnic Wear</li>
                    <li>Leggings, Salwars & Churidars</li>
                    <li>Skirts & Palazzos</li>
                    <li>Dress Materials</li>
                    <li>Lehenga Choli's</li>
                    <li>Dupattas & Shawls</li>
                    <li>Jackets</li>
                    <Divider/>
                    <li  className='heading'>Belt, Scarves & More</li>
                    <li  className='heading'>Watches & Wearables</li>
                </ul>
            </Box>
            <Box className="second">
                <ul className='unorderlist'>
                    <li  className='heading'>Western Wear</li>
                    <li>Dresses</li>
                    <li>Tops Churidars</li>
                    <li>T-Shirts</li>
                    <li>Jeans</li>
                    <li>Trousers & Capris</li>
                    <li>Shorts & Skirts</li>
                    <li>PlaySuits</li>
                    <li>JumpSuits</li>
                    <li>Shrugs</li>
                    <li>Sweaters & Sweatshirts</li>
                    <li>Jackets & Coats</li>
                    <li>Blazers & WaistCoats</li>
                    <Divider />
                    <li  className='heading'>Plus Size</li>
                </ul>
            </Box>
            <Box className="third">
                <ul className='unorderlist'>
                    <li  className='heading'>Maternity</li>
                    <li  className='heading'>Sunglass & Frames</li>
                    <li  className='heading'>Footwear</li>
                    <li>Flats</li>
                    <li>Casuals Shoes</li>
                    <li>Heels</li>
                    <li>Boots</li>
                    <li>Sports Shoes & Floaters</li>
                    <Divider/>
                    <li  className='heading'>Sports & Active Wear</li>
                    <li>Cloting</li>
                    <li>Footwear</li>
                    <li>Sports Accessories</li>
                    <li> Sports Equiqments</li>
                </ul>
            </Box>
            <Box className="fourth">
                <ul className='unorderlist'>
                    <li  className='heading'>Lingerie & SleepWear</li>
                    <li>Bra</li>
                    <li>Briefs</li>
                    <li>Shapewear</li>
                    <li>Sleepwear & Loungwear</li>
                    <li>Swimwear</li>
                    <li>Camisoles & Thermals</li>
                    <Divider/>
                    <li  className='heading'>Beauty & Personal Care</li>
                    <li>Makeup</li>
                    <li>SkinCare</li>
                    <li>Premium Beauty</li>
                    <li>Lipsticks</li>
                    <li>Fragrances</li>
                </ul>
            </Box>
            <Box className="fifth">
                <ul className='unorderlist'>
                    <li  className='heading'>Gadgets</li>
                    <li>Smart Weaarables</li>
                    <li>Fitness Gadgets</li>
                    <li>Headphones</li>
                    <li>Speakers</li>
                    <Divider />
                    <li  className='heading'>Jewellery</li>
                    <li>Fashion Jewellery</li>
                    <li>Fine Jewellery</li>
                    <li>Earings</li>
                    <Divider/>
                    <li  className='heading'>BackPacks</li>
                    <li  className='heading'>Handbags, Bags & Wallets</li>
                    <li  className='heading'>Luggades & Trolleys</li>
                </ul>
            </Box>

        </Box>
    )
}

export default Women