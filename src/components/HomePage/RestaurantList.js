import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarRateIcon from '@mui/icons-material/StarRate';
import Button from '@mui/material/Button';
import '../../assets/css/style.css';

function RestaurantList(props) {
    
  return (
        <Card sx={{ display: 'flex', height: 160, width: '48%', margin: '10px 10px'}} 
            className="restaurantNamesCard">
            <CardMedia
            component="img"
            sx={{ width: 180 }}
            image = {props.url}
            alt="Live from space album cover"
            />
            <Box sx={{ display: 'contents', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography 
                    sx={{ fontSize: 14, fontWeight: '500', fontStyle: 'italic' }} 
                    color="text.secondary" gutterBottom
                >
                    {props.restaurantCategory} 
                    <Typography style={{ position: "relative", top: "5px", right: "0px", float: 'right' }}>
                        <StarRateIcon style={{ fontSize: '16px', color: 'green'  }} />{props.restaurantRating}
                    </Typography>
                </Typography>
                
                <Typography component="div" variant="h6" sx={{fontWeight: '500'}}>
                    {props.restaurantName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.restaurantAddress}
                </Typography>
                <Typography sx={{  mt: '10px' }}>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#f3723b', position: 'inherit'}}>
                    {props.restaurantOffers}
                    </Button>  <CurrencyRupeeIcon style={{fontSize: '14px'}} />{props.restaurantOfferPrice}
                </Typography>
                
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                </Box>
            </Box>
        </Card>
        
  )
}

export default RestaurantList
