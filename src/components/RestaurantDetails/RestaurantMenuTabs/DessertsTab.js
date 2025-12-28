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
import image1 from '../../../assets/images/listing/food/thumb_detail_1.jpg';
import image2 from '../../../assets/images/listing/food/thumb_detail_2.jpg';
import image3 from '../../../assets/images/listing/food/thumb_detail_3.jpg';
import image4 from '../../../assets/images/listing/food/thumb_detail_4.jpg';

const rows = [
    { image: image1, Item: '1. Mexican Enchiladas', Price: 25},
    { image: image2, Item: '2. Fajitas', Price: 30},
    { image: image3, Item: '3. Royal Fajitas', Price: 35 },
    { image: image4, Item: '4. Chicken Enchilada Wrap', Price: 55},
  ];

function DessertsTab() {
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

export default DessertsTab
