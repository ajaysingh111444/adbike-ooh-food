import React from 'react'
import Layout1 from '../components/Header1/Layout1'
import HeaderSection from '../components/RestaurantDetails/HeaderSection'
import MenuTabs from '../components/RestaurantDetails/RestaurantMenuTabs/MenuTabs';
import Footer from '../components/Footer/Footer'

function RestaurantDetails() {
  return (
    <div>
        < Layout1 />
        < HeaderSection />
        < hr />
        < MenuTabs />
        <Footer />

    </div>
  )
}

export default RestaurantDetails
