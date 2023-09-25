import { Box } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    let docSinNorm = doc(db, 'productos', iditem);

    getDoc(docSinNorm).then(item => {
      setProducto({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    <Box
      sx={{
        margin: '10px',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ItemDetail producto={producto} />
    </Box>
  );
}
