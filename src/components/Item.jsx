import { Box, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import { contextoGeneral } from '../components/ContextContainer';

export default function Item({ item }) {
  const { addItem, carrito } = useContext(contextoGeneral);

  function agregar(cant) {
    addItem(item, cant);
  }

  const cantidad = carrito
    .filter(cart => cart.id === item.id)
    .map(cart => cart.quantity);

  return (
    <Box
      sx={{
        background: '#f8f8f8',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        padding: '1rem',
        borderRadius: '10px',
        height: 'fit-content',
      }}
      key={item.id}
    >
      <Link
        style={{ textDecoration: 'none' }}
        to={`/item/${item.id}`}
      >
        <Typography
          variant='h5'
          gutterBottom
          sx={{ color: '#000' }}
        >
          {item.nombre}
        </Typography>
      </Link>
      <Link to={`/item/${item.id}`}>
        <CardMedia
          component='img'
          height='194'
          image={item.imgUrl}
        />
      </Link>
      <Typography
        variant='body1'
        gutterBottom
      >
        ${item.precio}
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
      >
        Stock:{item.stock}
      </Typography>
      <ItemCounter
        stock={item.stock - cantidad}
        initial={1}
        agregar={agregar}
        cantidad={cantidad}
      />
    </Box>
  );
}
