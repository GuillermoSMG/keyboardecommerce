import { Box } from '@mui/material';
import React from 'react';
import Item from './Item';

export default function ItemList({ productos }) {
  return (
    <Box
      sx={{
        margin: '1rem',
        display: 'grid',
        maxWidth: '300px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'center',
      }}
    >
      {!productos.length && (
        <Box
          sx={{
            background: '#f8f8f8',
            margin: '1rem',
            padding: '1rem',
            borderRadius: '10px',
            height: 'fit-content',
          }}
        >
          Cargando...
        </Box>
      )}
      {productos.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
}
