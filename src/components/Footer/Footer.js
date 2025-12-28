import React from 'react'
import { Container, Row, Col} from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
            <Col lg='3' md='4' sm='6'>
            <h6>QUICK LINKS</h6>
              <ListGroup className='footerList'>
                <ListGroup.Item >About us</ListGroup.Item>
                <ListGroup.Item>Add your restaurant</ListGroup.Item>
                <ListGroup.Item>My account</ListGroup.Item>
                <ListGroup.Item>Blog</ListGroup.Item>
                <ListGroup.Item>Contacts</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h6>CATEGORIES</h6>
              <ListGroup className='footerList'>
                <ListGroup.Item >Top Categories</ListGroup.Item>
                <ListGroup.Item>Best Rated</ListGroup.Item>
                <ListGroup.Item>Best Price</ListGroup.Item>
                <ListGroup.Item>Latest Submissions</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
            <h6>CONTACTS</h6>
              <ListGroup className='footerList-contact'>
                <ListGroup.Item >
                  <span><HomeOutlinedIcon /></span> 97845 Baker st. 567<br />Los Angeles - US
                </ListGroup.Item>
                <ListGroup.Item>
                  <span><PhoneAndroidOutlinedIcon /></span> +94 423-23-221
                </ListGroup.Item>
                <ListGroup.Item>
                  <span><MailOutlineOutlinedIcon /></span> info@domain.com
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h6>KEEP IN TOUCH</h6>
              {/* <Form.Label>Please enter a valid email address.</Form.Label>
              <Form.Control type="email" placeholder="Enter email" /> */}
              <div className='mailbox'>
                <input type="email" placeholder='Enter your email' />
                <span>< ChevronRightIcon /></span>
              </div>
              <div className='social-link' style={{ marginTop: '30px' }}>
                <h6>FOLLOW US</h6>
                <div className='social-icon'>
                  <span>< FacebookIcon /></span>  
                  <span>< TwitterIcon /></span>  
                  <span>< InstagramIcon /></span>  
                  <span>< YouTubeIcon /></span>  
                </div>
              </div>
            </Col>
        </Row>
        <hr />
        <row>
          <Col lg='12' md='12' sm='12'>
            <div style={{ textAlign: 'center' }}>
            copyright ©️ call4need - 2023, all right reserved
            </div>
          </Col>
        </row>
      </Container>
    </div>
  )
}

export default footer
