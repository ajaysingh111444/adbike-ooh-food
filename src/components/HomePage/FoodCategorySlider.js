import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FoodCategoryList from './FoodCategoryList';

function FoodCategorySlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const foodCategoryData = [
      {
          id: 1,
          imageurl: (require('../../assets/images/home_cat_pizza.jpg')),
          name: 'Pizza'
      },
      {
          id: 2,
          imageurl: (require('../../assets/images/burger.jpg')),
          name: 'Burger'
      },
      {
          id: 3,
          imageurl: (require('../../assets/images/chienese.jpg')),
          name: 'Chienese'
      },
      {
          id: 4,
          imageurl: (require('../../assets/images/dosa.jpg')),
          name: 'Dosa'
      },
      {
          id: 5,
          imageurl: (require('../../assets/images/fries.jpg')),
          name: 'Fries'
      },
      {
          id: 6,
          imageurl: (require('../../assets/images/vegitarian.jpg')),
          name: 'North Indian'
      },
      {
          id: 6,
          imageurl: (require('../../assets/images/bakery.jpg')),
          name: 'Bakery'
      },
    ]

    const foodCategory = foodCategoryData.map((item) => (
    <FoodCategoryList 
    name={item.name} 
    url={item.imageurl} 
    />
    ));

  return (
    <div>
      <Carousel responsive={responsive}>
        {foodCategory}
      </Carousel>
    </div>
  )
}

export default FoodCategorySlider
