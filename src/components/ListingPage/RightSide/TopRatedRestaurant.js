import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarRateIcon from '@mui/icons-material/StarRate';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

function TopRatedRestaurant(props) {
  return (
    <div className='topRatedRestaurantDiv' style={{width: '31%',  margin: '10px 5px'}}>
        <Card>
        <CardHeader
        avatar={
          <IconButton aria-label="settings">
          {props.dishName}
        </IconButton>
        }
        action={
          <Avatar sx={{ bgcolor: red[500], fontSize: '12px', }}  aria-label="recipe">
           {props.restaurantOffers}
          </Avatar>
        }
        />
        <CardMedia
            sx={{ height: 140 }}
            image = {props.url}
            title="green iguana"
        />
        <CardActions sx={{justifyContent: "space-between"}}>
            <Button size="small" sx={{fontSize: '18px', textTransform: 'capitalize'}}>{props.restaurantName}</Button>
            <Button size="small">
              <StarRateIcon style={{ fontSize: '16px', color: 'green'  }} />
              {props.restaurantRating}
            </Button>
        </CardActions>
        <CardContent>
            <Typography>
              Average Price<CurrencyRupeeIcon style={{fontSize: '16px'}} />{props.restaurantOfferPrice}
            </Typography>
        </CardContent>
        </Card>
    </div>
  )
}

export default TopRatedRestaurant
