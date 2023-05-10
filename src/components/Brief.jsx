import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function Brief() {
  const [pedidosArr, setPedidosArr] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const collectionArr = collection(db, "pedidos");

    getDocs(collectionArr).then((res) => {
      const arrayNorm = res.docs.map((element) => {
        return {
          comprador: {
            email: element.data().email,
            tel: element.data().tel,
            nombre: element.data().nombre,
          },
          items: element.data().carrito,
          total: element.data().totalAPagar,
        };
      });
      setPedidosArr(arrayNorm);
    });
  }, []);

  console.log(pedidosArr);

  return (
    <Container sx={{ minHeight: "80vh" }}>
      {pedidosArr?.length ? (
        pedidosArr?.map((item) => (
          <Box
            key={item?.items?.id}
            sx={{
              background: "#f8f8f8",
              margin: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              borderRadius: "10px",
              minHeight: "fit-content",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Comprador: {item?.comprador?.nombre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {item?.comprador?.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tel: {item?.comprador?.tel}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Items: {item?.items?.map((prod) => prod?.nombre + ", ")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Precio: ${item?.total}
            </Typography>
          </Box>
        ))
      ) : (
        <Box
          sx={{
            background: "#f8f8f8",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "10px",
            minHeight: "fit-content",
          }}
        >
          No se ha comprado nada
        </Box>
      )}
    </Container>
  );
}
