import React, { useState, useEffect  } from 'react';
import '../../assets/css/OrderDetails.css';
import ListGroup from 'react-bootstrap/ListGroup';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Link} from 'react-router-dom';

function RightComponent() {

    const [items, setItems] = useState([
        { item: "1x Enchiladas", age: 125 },
        { item: "2x Burrito", age: 304 },
        { item: "1x Chicken", age: 345 },
        { item: "2x Corona Beer", age: 325 },
        { item: "2x Cheese Cake", age: 135 },
    ]);

    const handleRowRemove = (item) => {
        setItems(items.filter((row) => row.item !== item));
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.pageYOffset > 100 && window.pageYOffset < 600) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className={`box_order ${isScrolled ? "box_order-fixed" : ""}`}>
        <div className='head'>
            <h3>Order Summary</h3>
        </div>
        <div className='main'>
            <table style={{margin: '20px'}}>
                <tbody>
                    <tr>
                        <td style={{width: '75%'}}>Date</td>
                        <td style={{width: '20%'}}>Today 23/11/2019</td>
                    </tr>
                    <tr>
                        <td style={{width: '75%'}}>Hour</td>
                        <td style={{width: '20%'}}>08.30pm</td>
                    </tr>
                    <tr>
                        <td style={{width: '75%'}}>Type</td>
                        <td style={{width: '20%'}}>Delivery</td>
                    </tr>
                </tbody>
            </table>
            < hr style={{margin:'0px 20px'}}/>
            <table style={{margin: '20px'}}>
                <tbody>
                    {items.map((row) => (
                    <tr key={row.item}>
                        <td style={{width: '10%'}}>
                        < RemoveCircleOutlineIcon style={{fontSize: '18px'}} onClick={() => handleRowRemove(row.item)} />
                        </td>
                        <td style={{width: '75%'}}>{row.item}</td>
                        <td style={{width: '20%'}}><CurrencyRupeeIcon style={{fontSize: '14px'}} /> {row.age}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <ListGroup as="ol" numbered  style={{border:'0px !important', marginBottom: '0px'}}>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subtotal</div>
                    </div>
                    <div>
                        <CurrencyRupeeIcon style={{fontSize: '14px'}} />549
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Delivery fee</div>
                    </div>
                    <div>
                        <CurrencyRupeeIcon style={{fontSize: '14px'}} />10
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><h3>Total</h3></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CurrencyRupeeIcon style={{fontSize: '20px'}} /><h5>545</h5>
                    </div>
                </ListGroup.Item>
            </ListGroup>    
            <div className='orderNowBtn'>
            <Link to={'/OrderConfirmed'} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Order Now</Button>
            </Link>    
            </div>
        </div>
    </div>
  )
}

export default RightComponent
