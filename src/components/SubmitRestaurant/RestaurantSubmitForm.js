import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RestaurantSubmitForm() {
  return (
    <div>
      <Container>
        <Row className='submitForm'>
          <Col lg={3} md={12} sm={12}></Col>
          <Col lg={6} md={12} sm={12}>
            <h4>Personal Data</h4>
            <Row> 
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="First and Last Name" variant="outlined" />
              </Col>
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" />
              </Col>
            </Row>
            <h4>Restaurant Data</h4>
            <Row>  
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Restaurant Name" type="email" variant="outlined" />
              </Col>
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField
                  id="outlined-basic"
                  label="Restaurant Address"
                  multiline
                  rows={2}
                />
              </Col>
            </Row>
            <Row>  
              <Col lg={6} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="City" variant="outlined" />
              </Col>
              <Col lg={6} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Country" variant="outlined" />
              </Col>
            </Row>
            <h4>I am not a robot</h4>
            <Row>  
              <Col lg={12} md={12} sm={12} className='form-group'>
                <TextField id="outlined-basic" label="Human verify: 3 + 1 = ?" type="email" variant="outlined" />
              </Col>
              <Button variant="contained" style={{margin: 'auto', marginTop: '20px', width: '20%'}}>Submit</Button>
            </Row>  
            
          </Col>
          <Col lg={3} md={12} sm={12}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default RestaurantSubmitForm
