import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function OrderDetails({ order }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Order image"
        height="140"
        image={order.order_image} // Replace this with your actual image source
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {order.name}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Address: 
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {order.location}
          </Typography>
        </Typography>
        
      </CardContent>
      <CardActions>
        <Link to="/track-order">
          <Button size="small" sx={{ backgroundColor: '#75ba81', color: 'white' }}>Track</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
