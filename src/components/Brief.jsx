import { Container } from '@mui/system'
import React, { useContext } from "react";
import { contextoGeneral } from "./ContextContainer";

export default function Brief() {

	const { pedidos } = useContext(contextoGeneral);
console.log(pedidos)

  return (
    <Container>
    
    </Container>
  )
}
