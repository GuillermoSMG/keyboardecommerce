import { Button, FormControl, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { contextoGeneral } from "./ContextContainer";
import ItemCarrito from "./ItemCarrito";
import { Container, Typography, Box } from "@mui/material";
import { addDoc, collection, getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { Stack } from "@mui/system";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Checkout() {
	const { carrito, totalAPagar, clear, setPedidos, pedidosArr } = useContext(contextoGeneral);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
  const navigate = useNavigate()

  let disableComprar = carrito.length > 0;

	function validateEmail(email) {
		let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	function validateTel(tel) {
		let re = /^\d+$/;
		if(re.test(tel) == false || tel.length < 5){
			return false
		} else {
			return true
		}
	}

	function validateNombre(nombre) {
		let re = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		return re.test(nombre);
	}

    function handleSubmit(e){
		e.preventDefault();
        const pedido = {
            comprador : {nombre, tel, email},
            items : carrito,
            total: totalAPagar
        }
		if(!nombre || !email || !tel){
			return
		}
        if(!validateEmail(email) || !validateTel(tel) || !validateNombre(nombre)){
			return
		}
		setPedidos([...pedidosArr, {...pedido}])
		localStorage.setItem("pedido", JSON.stringify(pedidosArr))
        const db = getFirestore()
        const pedidos = collection(db, "pedidos")
        addDoc(pedidos, pedido).then(({ id }) => {
            carrito.forEach((item) => {
            const productos = doc(db, "productos", item.id);
            updateDoc(productos, { stock: increment(-item.quantity) });
        })}
        );
        clearInfo()
        success()
    }

    function success(){
        navigate("/GraciasPorSuCompra")
        setTimeout(()=>{
            navigate("/")
        },2500)
    }

    function clearInfo(){
        setTel("")
        setEmail("")
        setNombre("")
        clear()
    }

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Box style={{ display: "flex" }}>
				<ItemCarrito />
			</Box>
			<Typography>Total a pagar: ${totalAPagar} </Typography>
			<Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
			<form action="/checkout" onSubmit={handleSubmit}>
              <FormControl fullWidth>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                  }}
                  autoComplete="off"
                >
                  <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
                    <TextField
                      required
					            error={!validateNombre(nombre)}
                      id="nombre-input"
                      label="nombre"
                      name="nombre"
					            onKeyDown={validateNombre}
                      placeholder="nombre"
                      margin="normal"
                      onChange={(e) => setNombre(e.target.value)}
                      value={nombre}
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      id="email-input"
                      label="Email"
					            error={!validateEmail(email)}
					            onKeyDown={validateEmail}
                      name="email"
                      placeholder="email"
                      margin="normal"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      type="tel"
                      id="phone-input"
                      label="Tel"
					            error={!validateTel(tel)}
                      name="tel"
					            onKeyDown={validateTel}
                      placeholder="123456789"
                      margin="normal"
                      onChange={(e) => setTel(e.target.value)}
                      value={tel}
                      inputProps={{ maxLength: 12, minLength: 5 }}
                      InputLabelProps={{ shrink: true }}
                    />
					          <Button type="submit" variant="outlined" color="success" disabled={!disableComprar} startIcon={<AttachMoneyIcon />}>Comprar</Button>
                  </Stack>
                </Box>
              </FormControl>
            </form>    
			</Box>
		</Container>
	);
}