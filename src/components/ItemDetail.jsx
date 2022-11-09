import { Box } from "@mui/system";
import React from "react";

export default function ItemDetail({ producto }) {
	return (
		<Box sx={{ background: "#fafafa", margin: "1rem" }}>
			{producto.id ?<Box> 
								<h3>{producto.nombre}</h3>
								<p>${producto.precio}</p>
							</Box>
			: <p>Cargando</p>}
		</Box>
	);
}