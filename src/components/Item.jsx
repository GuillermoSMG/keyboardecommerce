import { Box, CardMedia, Typography } from "@mui/material";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { contextoGeneral } from '../components/ContextContainer';


export default function Item({ item }) {

	const { addItem } = useContext(contextoGeneral);
	
	function agregar(cant) {
		addItem(item, cant);
	}

	return (
		<Box sx={{ background: "#f8f8f8", margin: "1rem",display: "flex",flexDirection:"column", alignItems: "center", padding: "1rem", borderRadius: "10px", height: "fit-content" }} key={item.id}>
			<Typography variant="h5" gutterBottom>{item.nombre}</Typography>
			<CardMedia component="img" height="194" image={item.imgUrl} />
			<Typography variant="body1" gutterBottom>${item.precio}</Typography>
			<Link to={"/item/" + item.id}>Ir al item</Link>
            <ItemCounter stock={item.stock} initial={1} agregar={agregar} />
		</Box>
	);
}