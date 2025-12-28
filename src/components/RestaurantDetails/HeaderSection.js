import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarRateIcon from '@mui/icons-material/StarRate';
import '../../assets/css/RestaurantDetails.css';
import RestaurantGallerySec from './RestaurantGallerySec';
import MenuTabs from './RestaurantMenuTabs/MenuTabs';
import { width } from '@mui/system';

export default function HeaderSection() {
  return (
    <div className='headerSec'>
        <Container>
          <Row>
            <Col lg='6' md='12' sm='12'>
                <Row>
                    <Col lg="12" md="12" sm="12" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h2>Pizzeria da Alfredo</h2>
                            <p>27 Old Gloucester St, 4530 London - <span style={{color: '#e54750'}}>Get directions</span></p>
                        </div>
                        <div className='rating' style={{width: '80px'}}>
                            <StarRateIcon style={{ color: 'white' }} /> <span>8.9</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{fontWeight: '500', marginTop: '10px'}}>
                        <div>
                            <h5>About "da Alfredo"</h5>
                            <p>
                            Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata voluptatum cu vix.
Sea error splendide at. Te sed facilisi persequeris definitiones, ad per scriptorem instructior, vim latine adipiscing no. Cu tacimates salutandi his, mel te dicant quodsi aperiri. Unum timeam his eu.
                            </p>
                            <p>
                            Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata voluptatum cu vix.
Sea error splendide at. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg="6" md="12" sm="12">
                < RestaurantGallerySec />
            </Col>
          </Row>
        </Container>
    
    </div>
  )
}
