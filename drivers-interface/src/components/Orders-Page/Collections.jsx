import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import OrderDetails from './OrderDetails';
import { Popover } from '@mui/material';

const Collections = () => {
  const [orders, setOrders] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handlePopupOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popup-open' : undefined;

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" display="flex">
                {order.name}
                <Button
                  aria-describedby={id}
                  onClick={handlePopupOpen}
                  sx={{ marginLeft: 'auto', backgroundColor: '#75ba81', color: 'white' }}
                >
                  See info
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handlePopupClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <OrderDetails order={order} />
                </Popover>
              </Typography>
              <Typography variant="body2">{order.location}</Typography>
            </Paper>
          ))
        ) : (
          <Typography>No orders available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Collections;
