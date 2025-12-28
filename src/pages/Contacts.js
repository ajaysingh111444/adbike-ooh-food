import React from 'react'
import Layout1 from '../components/Header1/Layout1';
import Footer from '../components/Footer/Footer';
import Banner from '../assets/images/submitRestaurant/submitRestaurantBanner.jpg';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/contact.css';
import SupportIcon from '@mui/icons-material/Support';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BackupIcon from '@mui/icons-material/Backup';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleMap from '../components/Contacts/GoogleMap';

function Contacts() {
    const address = {
        lat: 25.5941,
        lng: 85.1376
      };
  return (
    <div>
      <Layout1>

        <div className='home' style={{ backgroundImage: `url(${Banner})`, Color: '#faf3cc'}}>
            <Container maxWidth="lg">
                <div className='headerContainer' style={{textAlign: 'center',color: '#fff'}}>
                <h1 style={{color: '#fff'}}>Contact call4need</h1>
                <p style={{color: '#fff'}}>A successful restaurant experience</p>
                </div>
            </Container>
        </div>

        <Box className='sec-1 contact' sx={{ py: '2rem', backgroundColor: '#f9fafb' }}>
            <Container>
            <Row className='whySubmitSec'>
                <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                    <div className='box_contact'>
                        <SupportIcon />
                        <h2>Help Center</h2>
                        <p>
                        +91-73522-33444 - aishntech@gmail.com
                        </p>
                        <p>
                        MON to FRI 9am-6pm SAT 9am-2pm
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                    <div className='box_contact'>
                        <LocationOnIcon />
                        <h2>Address</h2>
                        <p>
                        123 Stree Near Meera Resorts,
                        Bazar Samiti More, South Panchsheel Nagar, Gola Road,
                        Patna (Bihar)-800012
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                    <div className='box_contact'>
                        <BackupIcon />
                        <h2>Submissions</h2>
                        <p>
                        01246347999 - aishntech@gmail.com
                        </p>
                        <p>MON to FRI 9am-6pm SAT 9am-2pm</p>
                    </div>
                </Col>
            </Row>
            </Container>
        </Box>

        <Box className='sec-2 contact' sx={{ my: '4rem' }}>
            <Container>
            <Row className='whySubmitSec'>
                <Col lg={5} md={5} sm={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        <h3>Drop Us a Line</h3>
                        </Col>
                        <Col lg={12} md={12} sm={12} className='form-group'>
                            <TextField id="outlined-basic" label="First and Last Name" variant="outlined" />
                        </Col>
                        <Col lg={12} md={12} sm={12} className='form-group'>
                            <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" />
                        </Col>
                        <Col lg={12} md={12} sm={12} className='form-group'>
                            <TextField
                            id="outlined-basic"
                            label="Restaurant Address"
                            multiline
                            rows={2}
                            />
                        </Col>
                        <Col lg={12} md={12} sm={12} className='form-group'>
                            <TextField id="outlined-basic" label="Human verify: 3 + 1 = ?" type="email" variant="outlined" />
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Button variant="contained" style={{margin: 'auto', marginTop: '20px', width: '100%'}}>Submit</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={7} md={7} sm={12}>
                    < GoogleMap address={address} />
                </Col>
            </Row>
            </Container>
        </Box>
      <Footer />
      </Layout1>
    </div>
  )
}

export default Contacts
