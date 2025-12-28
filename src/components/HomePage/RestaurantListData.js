import React from 'react'
import RestaurantList from './RestaurantList';
import Grid from '@mui/material/Grid';

function RestaurantListData() {

    const restaurantListData = [
        {
            id: 1,
            imageurl: (require('../../assets/images/restaurant1.jpg')),
            restaurantRating: '9.5',
            restaurantCategory: 'Italian',
            restaurantName: 'Spice Garden',
            restaurantAddress: 'Pi8 Patriot Square E2 9NFzza',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 35',
        },
        {
            id: 2,
            imageurl: (require('../../assets/images/restaurant2.jpg')),
            restaurantRating: '9.4',
            restaurantCategory: 'Vegitarian',
            restaurantName: 'Mr. Paper',
            restaurantAddress: '27 Old Gloucester St, 4563',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 30',
        },
        {
            id: 3,
            imageurl: (require('../../assets/images/restaurant3.jpg')),
            restaurantRating: '9.4',
            restaurantCategory: 'Vegitarian',
            restaurantName: 'Mr. Paper',
            restaurantAddress: '27 Old Gloucester St, 4563',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 30',
        },
        {
            id: 4,
            imageurl: (require('../../assets/images/restaurant4.jpg')),
            restaurantRating: '9.4',
            restaurantCategory: 'Vegitarian',
            restaurantName: 'Mr. Paper',
            restaurantAddress: '27 Old Gloucester St, 4563',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 30',
        },
        {
            id: 5,
            imageurl: (require('../../assets/images/restaurant5.jpg')),
            restaurantRating: '9.4',
            restaurantCategory: 'Vegitarian',
            restaurantName: 'Mr. Paper',
            restaurantAddress: '27 Old Gloucester St, 4563',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 30',
        },
        {
            id: 6,
            imageurl: (require('../../assets/images/restaurant6.jpg')),
            restaurantRating: '9.4',
            restaurantCategory: 'Vegitarian',
            restaurantName: 'Mr. Paper',
            restaurantAddress: '27 Old Gloucester St, 4563',
            restaurantOffers: '-30%',
            restaurantOfferPrice: 'Average price 30',
        },
      ]
  
      const restaurantList = restaurantListData.map((item) => (
      <RestaurantList 
      restaurantRating={item.restaurantRating} 
      url={item.imageurl} 
      restaurantCategory={item.restaurantCategory}
      restaurantName={item.restaurantName}
      restaurantAddress={item.restaurantAddress}
      restaurantOffers={item.restaurantOffers}
      restaurantOfferPrice={item.restaurantOfferPrice}
      />
      ));
  
  return (
    <div>
        <Grid direction='row' container >
            <Grid item xs={12} sm={12} style={{display: 'flex', flexWrap: 'wrap'}}>
                { restaurantList }
            </Grid>
        </Grid>
    </div>
  )
}

export default RestaurantListData
