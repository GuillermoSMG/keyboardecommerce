import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";
import ItemCarrito from "./ItemCarrito";
import { Container, Typography, Box } from "@mui/material";


export default function Checkout() {
	const { carrito, totalAPagar } = useContext(contextoGeneral);
	const [nombresProductos, setNombresProductos] = useState([]);
	const [nombre, setNombre] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");

	function cambioDeNombre() {
		let nombres = carrito.map((item) => item.nombre);
		setNombresProductos(nombres);
	}
	useEffect(() => {
		cambioDeNombre();
	}, [carrito]);
	function botonComprar() {
		cambioDeNombre();
		alert(
			nombre +
				" quiere comprar " +
				nombresProductos +
				" total a pagar $" +
				totalAPagar
		);
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
                {carrito.length ? <Button  onClick={botonComprar} value="Buy" variant="contained">Comprar</Button> : <Button variant="contained" disabled>Comprar</Button>}
			</Box>
		</Container>
	);
}