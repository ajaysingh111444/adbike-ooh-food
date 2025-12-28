import React from 'react';
import { Container } from '@mui/material';
import Layout from '../components/Header/Layout';
import Banner from '../assets/images/banner.jpg';
import Banner2 from '../assets/images/banner_bg_desktop.jpg';
import AutoComplete from '../components/HomePage/AutoComplete';
import '../assets/css/style.css';
import { Box } from '@mui/system';
import FoodCategorySlider from '../components/HomePage/FoodCategorySlider';
import RestaurantListData from '../components/HomePage/RestaurantListData';
import Button from '@mui/material/Button';
import HomePageSec4 from '../components//HomePage/HomePageSec4';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Layout>

      <div className='home' style={{ backgroundImage: `url(${Banner})`, Color: '#faf3cc'}}>
        <Container maxWidth="lg">
          <div className='headerContainer'>
            <h1>Delivery or Takeaway Food</h1>
            <p>The best restaurants at the best price</p>
            <AutoComplete />
            <h4><b>Trending: </b>Sushi, Burgher, Chinese, Pizza</h4>
          </div>
        </Container>
      </div>

      {/* sec-1 popular category section */}

      <Box className='sec-1' sx={{ my: '4rem' }}>
      <Container maxWidth="lg">
        <div className='main_title center' style={{margin: 'auto'}}>
          <spam><em></em></spam>
          <h1>Popular Categories</h1>
          <FoodCategorySlider />
        </div>
      </Container>
      </Box>

      {/* sec-2 popular restaurant section */}

      <div style={{backgroundColor: '#f9fafb'}}>
        <Box className='sec-2' sx={{ py: '4rem' }}>
        <Container maxWidth="lg">
          <div className='main_title'>
            <spam><em></em></spam>
            <h1>Top Rated Restaurants</h1>
            <RestaurantListData />  
          </div>
        </Container>
        </Box>
      </div>

      {/* sec-3 delivery banner */}

      <div style={{backgroundColor: '#f9fafb'}}>
      <Container maxWidth="lg" sx={{paddingBottom: '4rem'}}>
        <box className='sec-3' style={{ backgroundImage: `url(${Banner2})`}}>
          <Container>
          <div className='banner2Container'>
            <h1>We Deliver to your Office</h1>
            <p>Enjoy a tasty food in minutes!</p>
            <Button variant="contained">Start Now!</Button>
          </div>
          </Container>
        </box>
      </Container>
      </div>
      {/* sec-4 Start Ordering Now */}

      <HomePageSec4 />

      {/* sec-5 footer */}

      <Footer />
      
    </Layout>

  )
}

export default Home
