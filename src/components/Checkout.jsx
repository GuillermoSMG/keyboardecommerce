import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { contextoGeneral } from "./ContextContainer";
import ItemCarrito from "./ItemCarrito";
import { Container, Typography, Box } from "@mui/material";
import { addDoc, collection, getFirestore, doc, updateDoc, increment } from 'firebase/firestore';

export default function Checkout() {
	const { carrito, totalAPagar, clear, setPedidos } = useContext(contextoGeneral);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
    const navigate = useNavigate()

    function handleClickComprar(){
        const pedido = {
            comprador : {nombre, tel, email},
            items : carrito,
            total: totalAPagar
        }
        
        setPedidos(localStorage.setItem("pedidos", JSON.stringify(pedido)))
        const db = getFirestore()
        const pedidos = collection(db, "pedidos")
        addDoc(pedidos, pedido).then(producto => { 
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
				<TextField
					onChange={(e) => setNombre(e.target.value)}
					id="filled-basic"
					label="nombre"
					variant="filled"
					value={nombre}
				/>
				<TextField
					onChange={(e) => setTel(e.target.value)}
					id="filled-basic"
					label="tel"
					variant="filled"
					value={tel}
				/>

				<TextField
					onChange={(e) => setEmail(e.target.value)}
					id="filled-basic"
					label="email"
					variant="filled"
					value={email}
				/>
                {carrito.length ? <Button  onClick={handleClickComprar} value="Buy" variant="contained">Comprar</Button> : <Button variant="contained" disabled>Comprar</Button>}
			</Box>
		</Container>
	);
}