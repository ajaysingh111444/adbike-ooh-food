import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Button from '@mui/material/Button';

function PricingPlan() {
  return (
    <div>
      <Container maxWidth="lg">
        <Row>
            <Col lg={4} md={4} sm={12} className="plan">
                <div className='plan-title'>
                    <h3>1 Month</h3>
                    <p>Free of charge one standard listing</p>
                </div>
                <p className='plan-price'>Free</p>
                <ul className='plan-features'>
                    <li><strong>Check and go</strong> included</li>
                    <li><strong>1 month</strong> valid</li>
                    <li><strong>Unsubscribe</strong> anytime</li>
                </ul>
                <Button variant="contained">Submit</Button>
            </Col>
            <Col lg={4} md={4} sm={12} className="plan plan-tall ">
                <div className='plan-title'>
                    <h3>6 Month</h3>
                    <p>Free of charge one standard listing</p>
                </div>
                <p className='plan-price'>Free</p>
                <ul className='plan-features'>
                    <li><strong>Premium</strong> support</li>
                    <li><strong>Check and go</strong> included</li>
                    <li><strong>APP</strong> included</li>
                    <li><strong>6 months</strong> valid</li>
                    <li><strong>Unsubscribe </strong> anytime</li>
                </ul>
                <Button variant="contained">Submit</Button>
            </Col>
            <Col lg={4} md={4} sm={12} className="plan">
                <div className='plan-title'>
                    <h3>12 Month</h3>
                    <p>Free of charge one standard listing</p>
                </div>
                <p className='plan-price'>Free</p>
                <ul className='plan-features'>
                    <li><strong>Premium</strong> support</li>
                    <li><strong>Check and go</strong> included</li>
                    <li><strong>12 months</strong> valid</li>
                    <li><strong>Unsubscribe </strong> anytime</li>
                </ul>
                <Button variant="contained">Submit</Button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PricingPlan
