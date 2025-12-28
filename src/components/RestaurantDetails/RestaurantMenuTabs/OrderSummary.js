import React, { useState, useEffect  } from 'react';
import '../../../assets/css/RestaurantDetails.css';
import { Container, Row, Col } from 'reactstrap';
import dayjs from 'dayjs';
import ListGroup from 'react-bootstrap/ListGroup';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem  } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Link} from 'react-router-dom';

function OrderSummary() {
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
        if (window.pageYOffset > 300 && window.pageYOffset < 2700) {
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
            <ListGroup as="ol" numbered  style={{border:'0px !important'}}>
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
            <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    defaultValue="Delivery"
                    name="row-radio-buttons-group" class="deliveryRadioBtn"
                >
                    <Col lg="6" style={{textAlign:'center'}}>
                        <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                    </Col>
                    <Col lg="6">   
                        <FormControlLabel value="Take away" control={<Radio />} label="Take away" />
                    </Col>     
                </RadioGroup>
            </div>
            <div className='orderDate'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </div>
            <div className='orderTime'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                        'MobileTimePicker',
                        ]}
                    >
                        <DemoItem>
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className='orderNowBtn'>
            <Link to={'/OrderDetails'} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Order Now</Button>
            </Link>    
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
