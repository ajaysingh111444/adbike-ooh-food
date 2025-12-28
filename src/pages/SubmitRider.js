import React, { useRef } from 'react'
import { Container } from '@mui/material';
import Layout1 from '../components/Header1/Layout1'
import Footer from '../components/Footer/Footer';
import Banner from '../assets/images/submitRider/submitRiderBanner.jpg';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import WhyWorkWithUs from '../components/SubmitRider/WhyWorkWithUs';
import RiderSubmitForm from '../components/SubmitRider/RiderSubmitForm';

function SubmitRider() {
  const footerRef = useRef(null);

  const handleButtonClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
        <Layout1/>
            <div className='home' style={{ backgroundImage: `url(${Banner})`, Color: '#faf3cc'}}>
            <Container maxWidth="lg">
                <div className='headerContainer' style={{textAlign: 'center',color: '#fff'}}>
                <h1 style={{color: '#fff'}}>Become a call4need Rider</h1>
                <p style={{color: '#fff'}}>Flexible work, competitive fees</p>
                <Button variant="contained" onClick={handleButtonClick}
                    style={{width: '13%', textTransform: 'capitalize'}}>
                    Apply Now
                </Button>
                </div>
            </Container>
            </div>
            
            {/* sec-2 Why Work with Us section */}

            <Box className='sec-1' sx={{ my: '4rem' }}>
            <Container maxWidth="lg">
            <div className='main_title center' style={{margin: 'auto'}}>
                <spam><em></em></spam>
                <h1 style={{paddingBottom: '0px'}}>Why Work with Us</h1>
            </div>
            <div className='main_content'>
                <WhyWorkWithUs/>
            </div>
            </Container>
            </Box>

            {/* sec-3 Form */}

            <Box ref={footerRef} className='sec-1' sx={{ py: '4rem', backgroundColor: '#f9fafb' }}>
            <Container maxWidth="lg">
                <div className='main_title center' style={{margin: 'auto'}}>
                    <spam><em></em></spam>
                    <h1 style={{paddingBottom: '0px'}}>Apply Now</h1>
                    <p style={{fontSize: '25px', fontWeight: '300'}}>
                    Note that you must be over 18 years old</p>
                </div>
                <div className='main_content'>
                    <RiderSubmitForm/>
                </div>
            </Container>
            </Box>

        <Footer/>
    </div>
  )
}

export default SubmitRider
