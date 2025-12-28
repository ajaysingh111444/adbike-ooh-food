import React, { useRef } from 'react'
import { Container } from '@mui/material';
import Layout1 from '../components/Header1/Layout1';
import Banner from '../assets/images/submitRestaurant/submitRestaurantBanner.jpg';
import '../assets/css/SubmitRestaurant.css';
import { Box } from '@mui/system';
import WhySubmitSec from '../components/SubmitRestaurant/WhySubmitSec';
import PricingPlan from '../components/SubmitRestaurant/PricingPlan';
import RestaurantSubmitForm from '../components/SubmitRestaurant/RestaurantSubmitForm';
import Button from '@mui/material/Button';
import Footer from '../components/Footer/Footer';

const SubmitRestaurant = () => {
  const footerRef = useRef(null);

  const handleButtonClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Layout1 />
        <div className='home' style={{ backgroundImage: `url(${Banner})`, Color: '#faf3cc'}}>
        <Container maxWidth="lg">
            <div className='headerContainer' style={{textAlign: 'center',color: '#fff'}}>
            <h1 style={{color: '#fff'}}>Attract New Customers</h1>
            <p style={{color: '#fff'}}>More bookings from diners around the corner</p>
            <Button variant="contained" onClick={handleButtonClick} className='submitBtn'
              style={{width: '13%', textTransform: 'capitalize'}}>
              Submit Now
            </Button>
            </div>
        </Container>
        </div>
        
        {/* sec-1 Why Submit to Call4need section */}

        <Box className='sec-1' sx={{ my: '4rem' }}>
        <Container maxWidth="lg">
          <div className='main_title center' style={{margin: 'auto'}}>
            <spam><em></em></spam>
            <h1 style={{paddingBottom: '0px'}}>Why Submit to Call4need</h1>
            <p style={{fontSize: '25px', fontWeight: '300'}}>
              Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className='main_content'>
            < WhySubmitSec />
          </div>
        </Container>
        </Box>

        {/* sec-1 Pricing plan */}

        <Box className='sec-1' sx={{ py: '4rem', backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <div className='main_title center' style={{margin: 'auto'}}>
            <spam><em></em></spam>
            <h1 style={{paddingBottom: '0px'}}>Our Pricing Plans</h1>
            <p style={{fontSize: '25px', fontWeight: '300'}}>
              Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className='main_content'>
            < PricingPlan />
          </div>
        </Container>
        </Box>

        {/* sec-4 Form */}

        <Box ref={footerRef} className='sec-1' sx={{ my: '4rem' }}>
        <Container maxWidth="lg">
          <div className='main_title center' style={{margin: 'auto'}}>
            <spam><em></em></spam>
            <h1 style={{paddingBottom: '0px'}}>Please fill the form below</h1>
            <p style={{fontSize: '25px', fontWeight: '300'}}>
              Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className='main_content'>
            < RestaurantSubmitForm />
          </div>
        </Container>
        </Box>
        < Footer />
    </div>
 
  )
}

export default SubmitRestaurant
