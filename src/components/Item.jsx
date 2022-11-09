import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";

export default function Item({ item }) {
	return (
		<Box sx={{ background: "#fafafa", margin: "1rem",display: "flex",flexDirection:"column", alignItems: "center" }} key={item.id}>
			<h4>{item.nombre}</h4>
			<p>${item.precio}</p>
			<Link to={"/item/" + item.id}>Ir al item</Link>
            <ItemCounter stock={5} initial={1} />
		</Box>
	);
}