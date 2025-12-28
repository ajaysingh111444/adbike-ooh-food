import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function TopCategoriesImages(props) {
  return (
    <div>
        <Card sx={{ maxWidth: 400, m: '10px' }}>
            <CardMedia
            sx={{ height: 110 }}
            image={props.url}
            title="green iguana"
            />
            
        </Card>
    </div>
  )
}

export default TopCategoriesImages
