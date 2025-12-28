import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import image1 from '../../../assets/images/listing/food/thumb_detail_5.jpg';
import image2 from '../../../assets/images/listing/food/thumb_detail_6.jpg';
import image3 from '../../../assets/images/listing/food/thumb_detail_3.jpg';
import image4 from '../../../assets/images/listing/food/thumb_detail_4.jpg';
import image5 from '../../../assets/images/listing/food/thumb_detail_2.jpg';
import image6 from '../../../assets/images/listing/food/thumb_detail_3.jpg';

const rows = [
    { image: image1, Item: '5. Cheese Quesadilla', Price: 225},
    { image: image2, Item: '6. Chorizo & Cheese', Price: 130},
    { image: image3, Item: '7. Beef Taco', Price: 135 },
    { image: image4, Item: '8. Minced Beef Double Layer', Price: 355},
    { image: image5, Item: '9. Piri Piri Chicken', Price: 255},
    { image: image6, Item: '10. Burrito Al Pastor', Price: 155}
  ];

function MainCourseTab() {
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
                <TableCell>< AddCircleOutlineIcon style={{color: '#e54750', cursor: 'pointer', fontSize: '28px'}} /></TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default MainCourseTab
