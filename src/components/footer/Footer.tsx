import { Box, Typography } from '@mui/material';
import React from 'react'
import "./footer.css";

const Footer = () => {
    return (<>
        <Box className="main-container">
            <Box className="box1">
                <Box className="box2">
                    <Box className="material">
                        <Typography className='onlineHeading'>ONLINE SHOPPING</Typography>
                        <Typography className='men'>Men</Typography>
                        <Typography className='women'>Women</Typography>
                        <Typography className='kids'>Kids</Typography>
                        <Typography className='homeLiving'>Home & Living</Typography>
                        <Typography className='men'>Beauty</Typography>
                        <Typography className='giftsCards'>Gifts Card</Typography>
                        <Typography className='myntrainsider'>Myntra Insider</Typography>
                        <Typography className='usefullinks'>Useful Links</Typography>
                        <Typography className='blog'>Blogs</Typography>
                        <Typography className='careers'>Careers</Typography>
                        <Typography className='sitemap'>Site Map</Typography>
                        <Typography className='cororateinformation'>Corporate information</Typography>
                        <Typography className='whitehat'>Whitehat</Typography>
                        <Typography className='cleartrips'>Cleartrip</Typography>

                    </Box>
                    <Box className="material2">
                        <Typography className='customerpolicies'>CUSTOMER POLICIES</Typography>
                        <Typography className='subheading'>Contact Us</Typography>
                        <Typography className='subheading'>FAQ</Typography>
                        <Typography className='subheading'>T&C</Typography>
                        <Typography className='subheading'>Terms Of Use</Typography>
                        <Typography className='subheading'>Track Orders</Typography>
                        <Typography className='subheading'>Shippings</Typography>
                        <Typography className='subheading'>Cancellations</Typography>
                        <Typography className='subheading'>Returns</Typography>
                        <Typography className='subheading'>Privacy Policy</Typography>
                        <Typography className='subheading'>Grievance Officers</Typography>
                    </Box>
                    <Box className="material3">
                        <Typography className='onlineHeading'> EXPERIENCE MYNTRA APP ON MOBILE </Typography>
                        <Box>
                            <img src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' className='playstore' />
                            <img src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' className='appleplaystore' />
                        </Box>
                        <Box className="keep-intouch">KEEP IN TOUCH </Box>
                        <Box>
                            <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' style={{ height: "20px", width: "20px", marginRight: "20px" }} />
                            <img src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' style={{ height: "20px", width: "20px", marginRight: "20px" }} />
                            <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' style={{ height: "20px", width: "20px", marginRight: "20px" }} />
                            <img src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png' style={{ height: "20px", width: "20px", marginRight: "20px" }} />
                        </Box>
                    </Box>
                    {/* <Box className="desktop-promises">
                    <Box className="first">
                        <Box className="dsktop-original">
                            <img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png'  style={{width:"48px",height:"40px"}}/>
                        </Box>
                        <Box className="original-text">
                            <Typography>
                                <Typography>100% ORIGINAL </Typography>
                                guarantee for all products at myntra.com

                            </Typography>
                        </Box>


                    </Box>
                    <Box className="second">
                        <Box className="desktop-section">
                            <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" style={{width:"48px",height:"40px"}}/>

                        </Box>
                        <Box>
                            <Typography>
                                <Typography>Return within 14days</Typography>
                                of receiving your order
                            </Typography>
                        </Box>

                    </Box>

                  </Box> */}
                    <Box className="desktop-promise">
                        <Box className="original">
                            <Box className="desoriginal"><img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" style={{width:"48px",height:"40px"}}/></Box>
                         <Box> <span style={{fontWeight:"bold",color:"black",}}>100% ORIGINAL </span>guarantee for<br></br> all products at myntra.com</Box> 
                           {/* <Typography style={{ display: "inline-block" }}>100% ORIGINAL guarantee for all products at myntra.com</Typography> */}
                        </Box>
                        <Box className="original" style={{marginTop:"57px"}}>
                            <Box className="desoriginal"><img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" style={{width:"48px",height:"40px"}}/></Box>
                         <Box> <span style={{fontWeight:"bold",color:"black",}}> Return within 14days</span> of<br></br> receives your order</Box> 
                           {/* <Typography style={{ display: "inline-block" }}>100% ORIGINAL guarantee for all products at myntra.com</Typography> */}
                        </Box>
                        

                    </Box>

                </Box>

            </Box>

        </Box>

    </>
    )
}

export default Footer;