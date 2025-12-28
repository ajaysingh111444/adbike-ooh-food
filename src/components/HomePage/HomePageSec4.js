import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../assets/css/style.css';

function HomePageSec4() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: '4rem' }}>
        <Grid container spacing={2} className='HomePageSec4-grid'>
            <Grid item xs={12} md={7} className='HomePageSec4'>
                <Grid item xs={12} md={5}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            image={require('../../assets/images/how_1.jpg')}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Easly Order
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/images/how_2.png')}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Quick Delivery
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5} style={{alignSelf: 'center'}}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={require('../../assets/images/how_3.png')}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Enjoy Food
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
          </Grid>
          <Grid item xs={12} md={5} style={{alignSelf: 'center'}}>
            <div className='sec-4 main_title'>
              <spam><em></em></spam>
              <h1>Start Ordering Now</h1>
              <p className='OrderNow'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.
              </p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Button variant="contained">Register</Button>
            </div>
          </Grid>
      </Grid>    
      </Container>
    </div>
  )
}

export default HomePageSec4
