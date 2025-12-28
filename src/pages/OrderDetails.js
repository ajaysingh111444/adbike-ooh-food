import React from 'react';
import Layout1 from '../components/Header1/Layout1'
import Footer from '../components/Footer/Footer'
import LeftComponent from '../components/OrderDetails/LeftComponent';
import RightComponent from '../components/OrderDetails/RightComponent';
import { Container, Row, Col } from 'reactstrap';

function OrderDetails() {
  return (
    <div>
      < Layout1 />
      <Container>
        <Row>
          <Col lg="1"></Col>
          <Col lg="6" md={12} sm={12}>
            < LeftComponent />
          </Col>
          <Col lg="4" md={12} sm={12}>
            < RightComponent />
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
      < Footer />
    </div>
  )
}

export default OrderDetails
