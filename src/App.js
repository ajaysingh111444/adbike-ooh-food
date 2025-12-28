import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import RestaurantDetails from './pages/RestaurantDetails';
import OrderDetails from './pages/OrderDetails';
import OrderConfirmed from './pages/OrderConfirmed';
import SubmitRestaurant from './pages/SubmitRestaurant';
import SubmitRider from './pages/SubmitRider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/RestaurantDetails" element={<RestaurantDetails />} />
        <Route path="/OrderDetails" element={<OrderDetails/>} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed/>}/>
        <Route path="/SubmitRestaurant" element={<SubmitRestaurant/>}/>
        <Route path="/SubmitRider" element={<SubmitRider/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;
