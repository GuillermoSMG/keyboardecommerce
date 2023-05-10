import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ItemCounter({ stock, initial, agregar, cantidad }) {
  const [count, setCount] = useState(initial);

  const checkStock = stock > 0 && stock !== cantidad;

  const onMenos = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  function showToast() {
    toast.success("Added to cart.", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        width: "300px",
      },
      position: "top-center",
    });
  }

  return (
    <Container sx={{ display: "flex" }}>
      <Button onClick={onMenos}>-</Button>
      <Typography>{count}</Typography>
      <Button onClick={onAdd}>+</Button>
      <Button
        onClick={() => {
          agregar(count);
          showToast();
        }}
        disabled={!checkStock}
      >
        AGREGAR
      </Button>
      <Toaster />
    </Container>
  );
}
