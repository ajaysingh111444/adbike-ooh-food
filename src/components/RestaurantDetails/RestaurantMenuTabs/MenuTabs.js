import React, { useState, useEffect  } from 'react';
// import Scrollspy from 'react-scrollspy';
import { Container, Row, Col } from 'reactstrap';
import StarterTab from './StarterTab';
import MainCourseTab from './MainCourseTab';
import DessertsTab from './DessertsTab';
import DrinksTab from './DrinksTab';
import ReviwesTab from './ReviewsTabs';
import OrderSummary from './OrderSummary';

function MenuTabs() {
    const [activeTab, setActiveTab] = useState('section1');
  
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.pageYOffset > 300) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className='menuTabs'>
      <nav className={`navbar ${isScrolled ? "navbar-fixed" : ""}`}>
      <div
        items={['section1', 'section2', 'section3', 'section4', 'section5' ]}
        currentClassName="active" className='navTabs'
        onUpdate={(item) => setActiveTab(item.id)}
      >
        <ul class="nav nav-pills">
            <li class="nav-item"><a class="nav-link" href="#section1">Starters</a></li>
            <li class="nav-item"><a class="nav-link" href="#section2">Main Courses</a></li>
            <li class="nav-item"><a class="nav-link" href="#section3">Desserts</a></li>
            <li class="nav-item"><a class="nav-link" href="#section4">Drinks</a></li>
            <li class="nav-item"><a class="nav-link" href="#section5">Reviews</a></li>
        </ul>
      </div>
      </nav>
     <div class="bg_gray">
        <Container>
          <Row>
            <Col lg="8" sm="12" md="12">
              <section id="section1">
                <h4>Starters</h4>
                < StarterTab />
              </section>
              <section id="section2">
                <h4>Main Courses</h4>
                < MainCourseTab />
              </section>
              <section id="section3">
                <h4>Desserts</h4>
                < DessertsTab />  
              </section>
              <section id="section4">
                <h4>Drinks</h4>
                < DrinksTab />  
              </section>
              <section id="section5">
                <h4>Reviews</h4>
                < ReviwesTab />  
              </section>
            </Col>
            <Col lg="4" sm="12" md="12">
              < OrderSummary />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MenuTabs
