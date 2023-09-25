import { Box } from '@mui/system';
import React, { useContext } from 'react';
import ItemCounter from './ItemCounter';
import { contextoGeneral } from '../components/ContextContainer';
import { CardMedia, Typography } from '@mui/material';

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(contextoGeneral);

  function agregar(cant) {
    addItem(producto, cant);
  }

  return (
    <Box
      sx={{
        background: '#f8f8f8',
        margin: '1rem',
        width: '300px',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px #afafaf',
        height: 'fit-content',
      }}
    >
      {producto.id ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5' gutterBottom>
            {producto.nombre}
          </Typography>
          <CardMedia component='img' height='194' image={producto.imgUrl} />
          <Typography variant='body1' gutterBottom>
            Stock:{producto.stock}
          </Typography>
          <Typography variant='body1' gutterBottom>
            ${producto.precio}
          </Typography>
          <ItemCounter stock={producto.stock} initial={1} agregar={agregar} />
        </Box>
      ) : (
        <Typography variant='body1' gutterBottom>
          Cargando...
        </Typography>
      )}
    </Box>
  );
}
