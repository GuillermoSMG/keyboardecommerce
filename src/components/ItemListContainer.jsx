import React, { useEffect, useState } from "react";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import ItemCounter from "./ItemCounter";

export default function ItemListContainer({greeting}) {

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
            <Typography variant="h4">{greeting}</Typography>
            <KeyboardIcon sx={{fontSize: "5em"}}/>
            <ItemCounter stock={5} initial={1} />
        </Box>
      </Container>
    );
}