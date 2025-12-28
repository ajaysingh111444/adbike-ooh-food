import React from 'react';
import { Box } from '@mui/system';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopCategoriesImages from './TopCategoriesImages';
import TopRatedRestaurant from './TopRatedRestaurant';
import Grid from '@mui/material/Grid';
import { Pagination } from '@mui/material';
import {Link} from 'react-router-dom';

function RightSideComponent() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4.5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4.5
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const topCategoriesImagesData = [
          {
              id: 1,
              imageurl: (require('../../../assets/images/home_cat_pizza.jpg')),
          },
          {
              id: 2,
              imageurl: (require('../../../assets/images/burger.jpg')),
          },
          {
              id: 3,
              imageurl: (require('../../../assets/images/chienese.jpg')),
          },
          {
              id: 4,
              imageurl: (require('../../../assets/images/dosa.jpg')),
          },
          {
              id: 5,
              imageurl: (require('../../../assets/images/fries.jpg')),
          },
          {
              id: 6,
              imageurl: (require('../../../assets/images/vegitarian.jpg')),
          },
          {
              id: 6,
              imageurl: (require('../../../assets/images/bakery.jpg')),
          },
        ]
    
        const topCategoriesImages = topCategoriesImagesData.map((item) => (
        <TopCategoriesImages 
        url={item.imageurl} 
        />
        )); 

    const topRatedRestaurantData = [
      {
          id: 1,
          dishName: 'Burghers',
          restaurantOffers: '-30%',
          imageurl: (require('../../../assets/images/listing/restaurant/restaurant1.jpg')),
          restaurantName: 'M.K. Burghers',
          restaurantOfferPrice: '35',
          restaurantRating: '9.5',
      },
      {
        id: 2,
        dishName: 'Pizza',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant2.jpg')),
        restaurantName: 'Dominos',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 3,
        dishName: 'Vegitarians',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant3.jpg')),
        restaurantName: 'Spice Garden',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 4,
        dishName: 'Chienese',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant4.jpg')),
        restaurantName: 'Chienese',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 5,
        dishName: 'Burger',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant5.jpg')),
        restaurantName: 'Spice Garden',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 6,
        dishName: 'Pizza',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant6.jpg')),
        restaurantName: 'Pizza Hut',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 7,
        dishName: 'Dosa',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant7.jpg')),
        restaurantName: 'Raja Sweets',
        restaurantOfferPrice: '35',
        restaurantRating: '8.5',
      },
      {
        id: 8,
        dishName: 'Mexican',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant8.jpg')),
        restaurantName: 'Spice Garden',
        restaurantOfferPrice: '35',
        restaurantRating: '7.5',
      },
      {
        id: 9,
        dishName: 'Burger',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant9.jpg')),
        restaurantName: 'Spice Garden',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 10,
        dishName: 'Bakery',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant10.jpg')),
        restaurantName: 'City Heart',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 11,
        dishName: 'Mexican',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant11.jpg')),
        restaurantName: 'City Plaza',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
      {
        id: 12,
        dishName: 'Chienese',
        restaurantOffers: '-30%',
        imageurl: (require('../../../assets/images/listing/restaurant/restaurant12.jpg')),
        restaurantName: 'Spice Garden',
        restaurantOfferPrice: '35',
        restaurantRating: '9.5',
      },
    ]
    const topRatedRestaurant = topRatedRestaurantData.map((item) => (
      <TopRatedRestaurant 
      dishName={item.dishName}
      restaurantOffers={item.restaurantOffers}
      url={item.imageurl} 
      restaurantName={item.restaurantName}
      restaurantOfferPrice={item.restaurantOfferPrice}
      restaurantRating={item.restaurantRating}
      />
      ));
    return (
    <div>
    {/* sec 1 */}
    <Box className='sec-1' sx={{ my: '2rem' }}>
        <div className='main_title' style={{textAlign: 'left'}}>
          <h5>Top Categories</h5>
          <Carousel responsive={responsive}>
                { topCategoriesImages }
            </Carousel>
        </div>
    </Box>
    {/* sec 2 */}
    <div className='sec-2' style={{textAlign: 'left'}}>
      <h5>Top Rated</h5>
        <Link to={'/RestaurantDetails'} style={{ textDecoration: 'none'}}>
          <Grid direction='row' container >
            <Grid item xs={12} sm={12} style={{display: 'flex', flexWrap: 'wrap'}}>
            { topRatedRestaurant }
            </Grid>
          </Grid>   
        </Link> 
    </div>
    <div style={{justifyContent: 'center', display: 'flex', marginTop: '30px'}}>
      <Pagination count={5} />
    </div>
  </div>
  )
}

export default RightSideComponent
