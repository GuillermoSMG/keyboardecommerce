import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
	return (
		<Box
			sx={{
				margin: "10px",
				boxShadow: "0px 5px 20px #666",
				display: "flex"
			}}>
			{!productos.length && "Cargando"}
			{productos.map((item) => (
				<Item item={item} />
			))}
		</Box>
	);
}