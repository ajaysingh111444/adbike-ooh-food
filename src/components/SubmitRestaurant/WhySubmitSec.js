import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import BoostyourBookings from '../../assets/images/submitRestaurant/about_1.svg';
import ManageEasly from '../../assets/images/submitRestaurant/about_2.svg';
import ReachNewCustomers from '../../assets/images/submitRestaurant/about_3.svg';
import '../../assets/css/SubmitRestaurant.css';

function WhySubmitSec() {
  return (
    <div>
      <Container>
        <Row className='whySubmitSec'>
            <Col lg={6} md={6} sm={12} style={{textAlign: 'left'}}>
                <h4>Boost your Bookings</h4>
                <p>
                Est falli invenire interpretaris id, magna libris sensibus mel id.
                Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.
                </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <img src={BoostyourBookings} className="BoostyourBookings-img" />
            </Col>
        </Row>
        <Row className='whySubmitSec'>
            <Col lg={6} md={6} sm={12}>
                <img src={ManageEasly} className="ManageEasly-img" />
            </Col>
            <Col lg={6} md={6} sm={12} style={{textAlign: 'left'}}>
                <h4>Manage Easly</h4>
                <p>
                Est falli invenire interpretaris id, magna libris sensibus mel id.
                Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.
                </p>
            </Col>
        </Row>
        <Row className='whySubmitSec'>
            <Col lg={6} md={6} sm={12} style={{textAlign: 'left'}}>
                <h4>Reach New Customers</h4>
                <p>
                Est falli invenire interpretaris id, magna libris sensibus mel id.
                Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.
                </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <img src={ReachNewCustomers} className="ReachNewCustomers-img" />
            </Col>  
        </Row>
      </Container>
    </div>
  )
}

export default WhySubmitSec
