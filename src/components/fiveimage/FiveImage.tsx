import { Box } from '@mui/material';
import React from 'react';
import "./fiveimage.css";


const FiveImage = () => {
    const allImage = [
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/30/ce5f2a2e-6ef6-4f0b-8e98-df96074da9ed1711774925858-Louis_Philippe-_Van_Heusen.png",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/30/754da4fa-fa9a-4734-a2cf-84e587ffcca01711774926332-Rare_Rabbit.png",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/29/84cf5a2f-6ab2-4f72-8613-9495db4ed5571711706587317-CMF_by_Nothing.png",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/29/50813817-e3d9-48ef-980a-900fd3d1e5db1711706588162-OnePlus.png",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/29/c159e4b7-7d34-430f-ae82-48b4abce39ca1711706588234-Guess-_nautica.png"
    ];

    return (
        <Box className="main-box">
    
        { allImage.map((imageUrl, index) => {
          return (
            <Box className='img1'><img key={index} src={imageUrl} alt={`Image ${index}`} /></Box>
  
          )
        })}
  
      </Box>
    )
}

export default FiveImage;
