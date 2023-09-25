import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import {
  addDoc,
  collection,
  doc,
  increment,
  updateDoc,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { db } from '../services/firebase';

import { successToast } from '../utils/toasts';
import {
  validateEmail,
  validateName,
  validateTel,
} from '../utils/validations.js';
import { contextoGeneral } from './ContextContainer';
import ItemCarrito from './ItemCarrito';
import { COLLECTIONS } from '../consts/consts';

export default function Checkout() {
  const { carrito, totalAPagar, clear, setPedidos, pedidosArr } =
    useContext(contextoGeneral);
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  let disableComprar = carrito.length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    const pedido = {
      comprador: { nombre, tel, email },
      items: carrito,
      total: totalAPagar,
    };
    if (!nombre || !email || !tel) return;
    if (!validateEmail(email) || !validateTel(tel) || !validateName(nombre))
      return;
    setPedidos([...pedidosArr, { ...pedido }]);
    localStorage.setItem('pedido', JSON.stringify(pedidosArr));
    const pedidos = collection(db, COLLECTIONS.PEDIDOS);
    addDoc(pedidos, pedido).then(({ id }) => {
      carrito.forEach(item => {
        const productos = doc(db, COLLECTIONS.PRODUCTOS, item.id);
        updateDoc(productos, { stock: increment(-item.quantity) });
      });
    });
    clearInfo();
    successToast();
  }

  function clearInfo() {
    setTel('');
    setEmail('');
    setNombre('');
    clear();
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box style={{ display: 'flex' }}>
        <ItemCarrito />
      </Box>
      <Typography>Total a pagar: ${totalAPagar} </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <form action='/checkout' onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
              }}
              autoComplete='off'
            >
              <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={1}
              >
                <TextField
                  required
                  error={!validateName(nombre)}
                  id='nombre-input'
                  label='nombre'
                  name='nombre'
                  onKeyDown={validateName}
                  placeholder='nombre'
                  margin='normal'
                  onChange={e => setNombre(e.target.value)}
                  value={nombre}
                  type='text'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  id='email-input'
                  label='Email'
                  error={!validateEmail(email)}
                  onKeyDown={validateEmail}
                  name='email'
                  placeholder='email'
                  margin='normal'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  type='tel'
                  id='phone-input'
                  label='Tel'
                  error={!validateTel(tel)}
                  name='tel'
                  onKeyDown={validateTel}
                  placeholder='123456789'
                  margin='normal'
                  onChange={e => setTel(e.target.value)}
                  value={tel}
                  inputProps={{ maxLength: 12, minLength: 5 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  type='submit'
                  variant='outlined'
                  color='success'
                  disabled={!disableComprar}
                  startIcon={<AttachMoneyIcon />}
                >
                  Comprar
                </Button>
              </Stack>
            </Box>
          </FormControl>
        </form>
      </Box>
      <Toaster />
    </Container>
  );
}
