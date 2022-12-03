import React from "react";
import { contextoGeneral } from "./ContextContainer";
import { useContext } from "react";
import { useEffect } from "react";
import { Button, Container, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemCarrito() {
	const { carrito, removeItem, clear } = useContext(contextoGeneral);
	useEffect(() => {}, [carrito]);

	return (
		<Container
			style={{
				display: "flex",
                alignItems: "center",
			}}>
            {!carrito.length && <Container
					style={{
						display: "flex",
						background: "rgba(0, 0, 0, 0.06)",
						margin: "2rem",
						padding: "1.3rem",
                        flexDirection: "column",
                        borderRadius: "10px",
					}}>
                        <Typography variant="h6">Su carrito se encuentra vacio</Typography>
                        </Container>}
			{carrito.map((producto) => (
				<Container
					style={{
						display: "flex",
						background: "rgba(0, 0, 0, 0.06)",
						margin: "1rem",
						padding: "1.3rem",
                        flexDirection: "column",
                        borderRadius: "10px",
					}}>
					<Typography variant="h6">Producto: {producto.nombre}</Typography>
					<Typography variant="body1">Categoria: {producto.categoria}</Typography>
                    <Typography variant="body1">Precio por unidad: ${producto.precio}</Typography>
                    <Typography variant="body1">Cantidad: {producto.quantity}</Typography>
                    <Typography variant="body1">Precio total: ${producto.precio * producto.quantity}</Typography>
                    <Button onClick={()=>removeItem(producto.id)}>Eliminar</Button>
				</Container>
			))}
            {carrito.length ? 
            <Button sx={{height: "fit-content", minWidth: "fit-content"}} variant="outlined" color="error" onClick={()=>clear()} startIcon={<DeleteIcon />}>Vaciar</Button> : 
            <Button sx={{height: "fit-content", minWidth: "fit-content"}} variant="outlined" disabled startIcon={<DeleteIcon />}>Vaciar</Button>}
		</Container>
	);
}