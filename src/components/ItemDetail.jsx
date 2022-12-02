import { Box } from "@mui/system";
import React, { useContext }  from "react";
import ItemCounter from "./ItemCounter";
import { contextoGeneral } from '../components/ContextContainer';

export default function ItemDetail({ producto }) {

	const { addItem } = useContext(contextoGeneral);
	
	function agregar(cant) {
		addItem(producto, cant);
	}
console.log(producto)
	return (
		<Box sx={{ background: "#fafafa", margin: "1rem" }}>
			{producto.id ?<Box> 
								<h3>{producto.nombre}</h3>
								<img src={producto.imgUrl}></img>
								<p>${producto.precio}</p>
								<ItemCounter stock={producto.stock} initial={1} agregar={agregar} />
							</Box>
			: <p>Cargando</p>}
		</Box>
	);
}