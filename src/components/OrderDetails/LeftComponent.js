import React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import ccv from '../../assets/images/icon_ccv.gif';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import '../../assets/css/OrderDetails.css';

function LeftComponent() {
  return (
    <>
    {/* Personal Details */}
    <div className='box_order '>
        <div className='head'>
            <h3>Personal Details</h3>
        </div>
        <div className='main'>
          <Container>
          <Row style={{ marginTop: '20px'}}> 
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="First and Last Name" variant="outlined" />
              </Col>
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" />
              </Col>
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Phone" type="number" variant="outlined" />
              </Col>
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField
                  id="outlined-basic"
                  label="Full Address"
                  multiline
                  rows={2}
                  style={{width: '100%'}}
                />
              </Col>
          </Row>
            
          <Row style={{ paddingBottom: '20px', textAlign: 'center'}}>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <TextField id="outlined-basic" label="City" variant="outlined" />
            </Col>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <TextField id="outlined-basic" label="Postal Code" type="number" variant="outlined" />
            </Col>
          </Row>
          </Container>
        </div>
    </div>
    {/* Payment Method */}
    <div className='box_order' style={{marginBottom: '40px'}}>
      <div className='head'>
          <h3>Payment Method</h3>
      </div>
      <div className='main'>
          <Container className='paymentMethod'>
          <Row>
            <Col lg={12} md={12} sm={12} className='creditCard form-group'>
              <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
              < CreditCardIcon style={{marginTop: '8px'}}/>
            </Col>
            <Col lg={12} md={12} sm={12}  className='form-group'>
              <TextField id="outlined-basic" label="Name on card" variant="outlined" />
            </Col>
            <Col lg={12} md={12} sm={12} className='form-group'>
              <TextField id="outlined-basic" label="Card number" variant="outlined" />
            </Col>
            <Row style={{marginTop: '20px', padding: '0px 20px'}}>
              <Col lg={6} md={6} sm={12} className='form-group'>
                <h6>Expiration date</h6>
                <Row>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <TextField id="outlined-basic" label="mm" type="number" variant="outlined" />
                  </Col>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <TextField id="outlined-basic" label="yyyy" type="number" variant="outlined" />
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} className='form-group'>
                <h6>Security code</h6>
                <Row>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <TextField id="outlined-basic" label="CCV" type="number" variant="outlined" />
                  </Col>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <img src={ccv} className="ccv-img" /><br/>Last 3 digits
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col lg={12} md={12} sm={12} className='creditCard form-group'>
              <FormControlLabel value="Pay with cash" control={<Radio />} label="Pay with cash" />
              < PaymentsIcon style={{marginTop: '8px'}}/>
            </Col>
          </Row>    
          </Container>
      </div>
    </div>
    </>
  )
}

export default LeftComponent
