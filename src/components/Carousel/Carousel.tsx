import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';                    
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {

    imgPath:
      'https://media.istockphoto.com/id/1468157150/photo/hologram-shoes-and-sports-for-fitness-run-and-speed-for-health-tracking-outdoor-future.webp?b=1&s=170667a&w=0&k=20&c=JKQOi4kdoPRz42MbxHfebtYRiY53s7wvfGF0H-cFrOI=',
    label: 'Shoes with Great Prices',
    label1: 'New Lunch',
  },
  {
    label: 'Buy Shirts',
    label1:"50% OFF",
    imgPath:
      'https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8=',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://media.istockphoto.com/id/544358286/photo/pride-man-smiling.jpg?s=612x612&w=0&k=20&c=o7xWnlzKLdrPWdnml8s0kfaiXlme62N4iVWGC0TO0C8=',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://media.istockphoto.com/id/1035905432/photo/classic-blue-mens-jeans-and-purple-denim-skirt-on-blue-background-the-view-from-the-top-flat.jpg?s=612x612&w=0&k=20&c=Tbn0fg8ZS5jCVvIXr4YhZxXMb8c_bwmaDQEU4gPlJ4Q=',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Box sx={{ maxWidth: 1900, flexGrow: 1, display: "flex", }}>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: 'block',
                    maxWidth: 1200,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Paper
          square
          elevation={0}
          sx={{
            
            alignItems: 'center',
            height: 50,
            // pl: 2,
            bgcolor: 'background.default',
            marginTop:"90px",
            marginRight:"250px"

          }}
        >
          <Typography variant='h4'>{images[activeStep].label}</Typography>
          <Typography variant='h6'>{images[activeStep].label1}</Typography>
          <hr/>
          <Typography sx={{color:"grey"}}>+ Explore</Typography>
        </Paper>

      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >

            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}

          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;