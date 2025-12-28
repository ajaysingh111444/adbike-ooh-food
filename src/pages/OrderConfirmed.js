import React from 'react'
import Layout1 from '../components/Header1/Layout1'
import Footer from '../components/Footer/Footer'
import { Container, Row, Col } from 'reactstrap';
import confirmed from '../assets/images/Confirmed.gif';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function OrderConfirmed() {
  return (
    <div>
      < Layout1 />
      <Container>
        <Row style={{textAlign: 'center'}}>
            <Col lg="4" md={8} sm={12}></Col>
            <Col lg="4" md={8} sm={12}>
                <div className='box_order' style={{ marginBottom: '70px'}}>
                    <div className='head'>
                        <h3>Pizzeria da Alfredo</h3>
                        <h6>27 Old Gloucester St, 4530 - <a href='' style={{color: '#fff'}}>Get directions</a></h6>
                    </div>
                    <div className='main' style={{ padding: '40px 0px', margin: '20px 0px'}}>
                    <Container>
                        <img src={confirmed} className="confirmed-img" style={{width: '120px'}} />
                        {/* < CheckCircleOutlineIcon style={{fontSize: '120px', color: '#64d664'}} /> */}
                        <h2>Order Confirmed!</h2>
                    </Container>
                    </div>
                </div>
            </Col>
            <Col lg="4" md={8} sm={12}></Col>
        </Row>
      </Container>
      < Footer />
    </div>
  )
}

export default OrderConfirmed
