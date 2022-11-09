import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { misProductos } from "./productos";

export default function ItemDetailContainer() {
	const { iditem } = useParams();

	const [producto, setProducto] = useState({});

	useEffect(() => {
		const productoPromise = new Promise((res, rej) => {
			setTimeout(() => {
				res(misProductos.find((item) => item.id == iditem));
			}, 2000);
		});

		productoPromise.then((res) => {
			setProducto(res);
		});
	}, [iditem]);

	return (
		<Box sx={{ margin: "10px" }}>
			<ItemDetail producto={producto} />
		</Box>
	);
}