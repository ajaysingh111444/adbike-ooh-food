import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import image1 from '../../assets/images/submitRider/icon_submit_1.svg';
import image2 from '../../assets/images/submitRider/icon_submit_2.svg';
import image3 from '../../assets/images/submitRider/icon_submit_3.svg';
import '../../assets/css/SubmitRestaurant.css';

function WhyWorkWithUs() {
  return (
    <div>
        <Container>
        <Row className='whySubmitSec'>
            <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                <div className='box_topic submit'>
                    <img src={image1} className="image1-img" />
                    <h3>Your compensation</h3>
                    <p>
                    What you earn per order depends on your experience and ratings.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                <div className='box_topic submit'>
                    <img src={image2} className="image1-img" />
                    <h3>Your compensation</h3>
                    <p>
                    What you earn per order depends on your experience and ratings.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} style={{textAlign: 'left'}}>
                <div className='box_topic submit'>
                    <img src={image3} className="image1-img" />
                    <h3>Your compensation</h3>
                    <p>
                    What you earn per order depends on your experience and ratings.
                    </p>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default WhyWorkWithUs
