import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React, { useContext } from "react";
import { contextoGeneral } from "./ContextContainer";

export default function Brief() {

	const { pedidos } = useContext(contextoGeneral);

  var check = Object.keys(pedidos).length > 0;

  return (
    <Container>
        {check &&   
                    <Box sx={{ background: "#f8f8f8", margin: "1rem",display: "flex",flexDirection:"column", alignItems: "center", padding: "1rem", borderRadius: "10px", height: "fit-content" }}>
			                <Typography variant="h5" gutterBottom>Comprador: {JSON.stringify(pedidos.comprador)}</Typography>
			                <Typography variant="body1" gutterBottom>Items: {JSON.stringify(pedidos.items[0].nombre)}</Typography>
			                <Typography variant="body1" gutterBottom>Precio: {JSON.stringify(pedidos.items[0].precio)}</Typography>
		                </Box>} 
                    {!check && <Box sx={{ background: "#f8f8f8", margin: "1rem",display: "flex",flexDirection:"column", alignItems: "center", padding: "1rem", borderRadius: "10px", height: "fit-content" }}>No se ha comprado nada
                      </Box>}
    </Container>
  )
}
