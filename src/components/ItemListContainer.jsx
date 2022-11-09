import * as React from "react";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import { misProductos } from "./productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Container } from "@mui/material";


export default function ItemListContainer() {

  const { idcategoria } = useParams();
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const productosPromise = new Promise((res, rej) => {
			setTimeout(() => {
				res(misProductos);
			}, 2000);
		});
		productosPromise.then((res) => {
			if (idcategoria) {
				setProductos(res.filter((item) => idcategoria === item.categoria));
			} else {
				setProductos(res);
			}
		});
	});

    return (
        <Container
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box padding="3rem" sx={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0px 0px 10px #999"}}>
            <ItemList productos={productos} />
        </Box>
      </Container>
    );
}