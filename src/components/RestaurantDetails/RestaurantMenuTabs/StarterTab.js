import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../../assets/images/listing/food/thumb_detail_1.jpg';
import image2 from '../../../assets/images/listing/food/thumb_detail_2.jpg';
import image3 from '../../../assets/images/listing/food/thumb_detail_3.jpg';
import image4 from '../../../assets/images/listing/food/thumb_detail_4.jpg';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const rows = [
    { image: image1, Item: '1. Mexican Enchiladas', Price: 25},
    { image: image2, Item: '2. Fajitas', Price: 30},
    { image: image3, Item: '3. Royal Fajitas', Price: 35 },
    { image: image4, Item: '4. Chicken Enchilada Wrap', Price: 55},
  ];

function StarterTab() {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const items = [
  { Price: 25},
  { Price: 30},
  { Price: 35 }
];

const itemsIng = [
  { Price: 25},
  { Price: 30}
];
  return (
    <div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Order</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" className='menuItem'>
                    <img src={row.image} alt={row.name} style={{width: '60px', borderRadius: '4px', marginRight: '5px'}} /> <h>{row.Item}</h>
                </TableCell>
                <TableCell><CurrencyRupeeIcon style={{fontSize: '16px'}} /> {row.Price}</TableCell>
                <TableCell>
                    < AddCircleOutlineIcon 
                    style={{color: '#e54750', cursor: 'pointer', fontSize: '28px'}} 
                    onClick={handleOpen} />
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* select size */}
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{display: 'flex'}}>
            <Col lg={6} md={6} sm={6}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Select an option</FormLabel>
                  
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="Large" control={<Radio />} label="Large" />
                    <FormControlLabel value="Extra Large" control={<Radio />} label="Extra Large" />
                  </RadioGroup>
              </FormControl>             
            </Col>
            <Col lg={6} md={6} sm={6} style={{margin: 'auto', display: 'flex', justifyContent: 'end'}}>
              <div style={{paddingTop: '25px'}}>
                {items.map((row) => (
                <div style={{padding: '4px 0px', fontWeight: '400', fontSize: '18px'}}>
                  < AddIcon style={{fontSize: '14px'}} /><CurrencyRupeeIcon style={{fontSize: '16px'}} /> 
                   {row.Price}
                </div>
                ))}
              </div>
            </Col>
          </Typography>
          {/* select ingredients */}
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }} style={{display: 'flex'}}>
            <Col lg={8} md={8} sm={8}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Add ingredients</FormLabel>
                <FormControlLabel control={<Checkbox />} label="Extra Tomato" />
                <FormControlLabel control={<Checkbox />} label="Extra peppers" />
              </FormControl>           
            </Col>
            <Col lg={4} md={4} sm={4} style={{margin: 'auto', display: 'flex', justifyContent: 'end'}}>
              <div style={{paddingTop: '25px'}}>
                {itemsIng.map((row) => (
                <div style={{padding: '4px 0px', fontWeight: '400', fontSize: '18px'}}>
                  < AddIcon style={{fontSize: '14px'}} /><CurrencyRupeeIcon style={{fontSize: '16px'}} /> 
                  {row.Price}
                </div>
                ))}
              </div>
            </Col>
          </Typography>
          
          <div className='addtocart'>
              <Button variant="contained">Add to cart</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default StarterTab
