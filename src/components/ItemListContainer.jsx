import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../services/firebase';
import { COLLECTIONS } from '../consts/consts';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const { idcategoria } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    let productos;
    if (idcategoria) {
      productos = query(
        collection(db, COLLECTIONS.PRODUCTOS),
        where('categoria', '==', idcategoria)
      );
    } else {
      productos = collection(db, COLLECTIONS.PRODUCTOS);
    }

    getDocs(productos).then(res => {
      const arrayNorm = res.docs.map(element => {
        return {
          id: element.id,
          nombre: element.data().nombre,
          categoria: element.data().categoria,
          precio: element.data().precio,
          stock: element.data().stock,
          imgUrl: element.data().imgUrl,
        };
      });
      setProductos(arrayNorm);
    });
  }, [idcategoria]);

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '80vh',
        justifyContent: 'center',
      }}
    >
      <Box
        padding='3rem'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0',
        }}
      >
        <ItemList productos={productos} />
      </Box>
    </Container>
  );
}
