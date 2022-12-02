import { Box } from "@mui/material";
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
		<Box sx={{ background: "#fafafa", margin: "1rem",display: "flex",flexDirection:"column", alignItems: "center" }} key={item.id}>
			<h4>{item.nombre}</h4>
			<p>${item.precio}</p>
			<Link to={"/item/" + item.id}>Ir al item</Link>
            <ItemCounter stock={item.stock} initial={1} agregar={agregar} />
		</Box>
	);
}