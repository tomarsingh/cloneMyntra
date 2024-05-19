import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'
import './card.css'

const MainCard = () => {
  const imageUrls = [
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/5d6586e5-3bb8-40a4-957f-1bd000439df01712152740109-Shop-By-Category_HP_02.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/f3da9509-01a6-486b-9960-db6bec4bc95e1712152740118-Shop-By-Category_HP_03.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/94058b10-c3c0-448f-8b07-43cf863950cc1712152740128-Shop-By-Category_HP_04.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/a04940dc-2f12-46d2-b797-dffa7d6297e21712152740137-Shop-By-Category_HP_05.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/aabf06e0-df03-422d-a113-5bf5eaf630a11712152740147-Shop-By-Category_HP_06.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/202ee2aa-846d-4f0e-b70c-f6c804686ef91712152740156-Shop-By-Category_HP_07.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/2779bcd5-39a9-49b0-89e3-0555638806771712152740165-Shop-By-Category_HP_08.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/063e4b79-6d37-4310-8be3-10850ee13a541712152740175-Shop-By-Category_HP_09.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/3686492f-8843-4b51-820b-2b7427ff0dfe1712152740184-Shop-By-Category_HP_10.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/433b9dac-f3bc-439b-bf30-3fd5262b28161712152740194-Shop-By-Category_HP_11.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/ae8f6e00-4445-442a-aadd-0d1f3ea407a21712152740204-Shop-By-Category_HP_12.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/0d5bcc44-7f22-4f70-97b0-ce1f5f60f9801712152740215-Shop-By-Category_HP_13.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/4979d9c5-0457-462e-869e-9ac6dffabd841712152740226-Shop-By-Category_HP_14.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/7216e2ea-c4e7-44f8-939f-438b4fb82fa61712152740236-Shop-By-Category_HP_15.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/ee752d95-f755-45b7-9edd-6d3c7e5a39dc1712152740246-Shop-By-Category_HP_16.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/a958269d-1489-4114-84ca-50630bf316b51712152740256-Shop-By-Category_HP_17.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/782f35c2-2618-449c-9be3-f4093f75fc1a1712152740265-Shop-By-Category_HP_18.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/ddb560a8-8af2-4ff4-9ae6-8513bee6d1b81712152740275-Shop-By-Category_HP_19.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/bacd9f7b-5200-4461-baa3-9bb96b05dd351712152740284-Shop-By-Category_HP_20.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/5c923d27-a727-4a5e-922f-5840451181671712152740294-Shop-By-Category_HP_21.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/7ac07280-f91a-4fc4-8f02-b9782ad9767e1712152740304-Shop-By-Category_HP_22.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/a9253419-67f3-4469-aa13-845f9a8864711712152740314-Shop-By-Category_HP_23.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/d4b16995-5131-4f8f-ae8c-6f492cea5f8b1712152740323-Shop-By-Category_HP_24.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/97329744-2c18-4fbb-951d-e6a5caa3f0801712152740334-Shop-By-Category_HP_25.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/cf9bcb0e-bed1-4854-8a4d-7a96e7819eca1712152740345-Shop-By-Category_HP_26.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/f2495356-de4f-475b-89b7-9bcfd46e5d9d1712152740355-Shop-By-Category_HP_27.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/ce583eda-1e77-4d8c-9110-bb291896cb4e1712152740367-Shop-By-Category_HP_28.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/7893cbd3-b90b-4530-82b4-03aff917b7e61712152740378-Shop-By-Category_HP_29.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/fe83535a-fb24-4479-9d3e-18c26a22f8681712152740389-Shop-By-Category_HP_30.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/78981fbf-62fe-4e7a-a59e-2905141aef851712152740400-Shop-By-Category_HP_31.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/6f859275-6e74-4a72-992b-0c6da64ded4f1712152740410-Shop-By-Category_HP_33.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/f0116b01-caa8-4911-be45-9b8cafb2a4da1712152740431-Shop-By-Category_HP_35.jpg",
    

  ];
  return (
    <Box className="card-box">
      {/* <img src='https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/5d6586e5-3bb8-40a4-957f-1bd000439df01712152740109-Shop-By-Category_HP_02.jpg' /> */}
      {imageUrls.map((imageUrl, index) => {
        return (
          <Box className='img-div'><img key={index} src={imageUrl} alt={`Image ${index}`} /></Box>

        )
      })}

    </Box>
  )
};

export default MainCard;



// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/f3da9509-01a6-486b-9960-db6bec4bc95e1712152740118-Shop-By-Category_HP_03.jpg",
//     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/94058b10-c3c0-448f-8b07-43cf863950cc1712152740128-Shop-By-Category_HP_04.jpg",
//     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/a04940dc-2f12-46d2-b797-dffa7d6297e21712152740137-Shop-By-Category_HP_05.jpg",
//     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/aabf06e0-df03-422d-a113-5bf5eaf630a11712152740147-Shop-By-Category_HP_06.jpg",
//     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/202ee2aa-846d-4f0e-b70c-f6c804686ef91712152740156-Shop-By-Category_HP_07.jpg",
//     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/2779bcd5-39a9-49b0-89e3-0555638806771712152740165-Shop-By-Category_HP_08.jpg",
// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/063e4b79-6d37-4310-8be3-10850ee13a541712152740175-Shop-By-Category_HP_09.jpg",
// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/3686492f-8843-4b51-820b-2b7427ff0dfe1712152740184-Shop-By-Category_HP_10.jpg",
// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/433b9dac-f3bc-439b-bf30-3fd5262b28161712152740194-Shop-By-Category_HP_11.jpg",
// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/ae8f6e00-4445-442a-aadd-0d1f3ea407a21712152740204-Shop-By-Category_HP_12.jpg",
// "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/3/0d5bcc44-7f22-4f70-97b0-ce1f5f60f9801712152740215-Shop-By-Category_HP_13.jpg",


