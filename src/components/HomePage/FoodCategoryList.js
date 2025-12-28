import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FoodCategoryList(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, m: '10px' }}>
          <CardMedia
            sx={{ height: 240 }}
            image={props.url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.name}
            </Typography>
          </CardContent>
          
      </Card>
    </div>
  )
}
