import { Box, Divider } from '@mui/material'
import React from 'react';
import "./kids.css";

function Kids() {
    return (
        <Box className="mainbox">
            <Box className="first">
                <ul>
                    <li className='mainheading'>Boys Clothing</li>
                    <li>T-shirts</li>
                    <li>Shirts</li>
                    <li>Shorts</li>
                    <li>Jeans</li>
                    <li>Trousers</li>
                    <li>Clothing Sets</li>
                    <li>Ethnic Wear</li>
                    <li>Track Pants & Pajamas</li>
                    <li>Jacket,Sweater & Sweatshrits</li>
                    <li>Party Wear</li>
                    <li>InnerWear & Thermals</li>
                    <li>Nightwear & Loungewear</li>
                    <li>Value Packs</li>
                </ul>
            </Box>
            <Box className="second">
                <ul>
                    <li className='mainheading'>Girls Clothing</li>
                    <li>Dresses</li>
                    <li>Tops</li>
                    <li>Tshirts</li>
                    <li>Clothing Set</li>
                    <li>Lehenga Choli</li>
                    <li>Kurta Set</li>
                    <li>Party Wear</li>
                    <li>Dungaress & jumpsuits</li>
                    <li>Skirts & Shorts</li>
                    <li>Tights & Leggings</li>
                    <li>Jeans,Trousers & Capris</li>
                    <li>Jacket,Sweater & Sweartshirts</li>
                    <li>InnerWear & Thermals</li>
                    <li>Nightwear & LoungeWear</li>
                    <li>Value Packs</li>
                </ul>
            </Box>
            <Box className="third">
                <ul>
                    <li className='mainheading'>Footwear</li>
                    <li>Casual Shoes</li>
                    <li>Flipflops</li>
                    <li>Sports Shoes</li>
                    <li>Flats</li>
                    <li>Sandals</li>
                    <li>Heels</li>
                    <li>School Shoes</li>
                    <li>Socks</li>
                    <Divider />
                    <li className='mainheading'>Toys & Games</li>
                    <li>Learning & Developement</li>
                    <li>Activity Toys</li>
                    <li>Soft Toys</li>
                    <li>Action Figure /Play Set</li>
                </ul>
            </Box>
            <Box className="fourth">
                <ul>
                    <li className='mainheading'>Infants</li>
                    <li>BodySuits</li>
                    <li>Rompers & Sleepsuits</li>
                    <li>Clothing Sets</li>
                    <li>TShirts & Tops</li>
                    <li>Dresses</li>
                    <li>Bottom Wear</li>
                    <li>Winter Wear</li>
                    <li>InnerWear & Sleeper</li>
                    <li>Infant Care</li>
                    <Divider/>
                    <li className='mainheading'>Home & Bath</li>
                    <li className='mainheading'>Personal Care</li>
                </ul>
            </Box>
            <Box className="fifth">
                <ul>
                    <li className='mainheading'>Kids Accessiories</li>
                    <li>Bags & Backpacks</li>
                    <li>Watches</li>
                    <li>Jewellery & Hair Accessiories</li>
                    <li>Sunglasses</li>
                    <li>Masks & Protective Gears</li>
                    <li>Caps & Hats</li>
                    <Divider/>
                    <li className='mainheading'>Brands</li>
                    <li>H&M</li>
                    <li>Max Kids</li>
                    <li>Pantaloons</li>
                    <li>United Colors Of Benettons Kids</li>
                    <li>YK</li>
                    <li>U.S.Polo Assn.kids</li>
                    <li>MotherCare</li>
                    <li>HRX</li>
                </ul>
            </Box>

        </Box>
    )
}

export default Kids;