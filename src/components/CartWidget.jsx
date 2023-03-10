import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Container } from '@mui/system';

export default function CartWidget({cant}) {
    return (
        <Container sx={{display: "flex", alignItems:"center"}}>
            <ShoppingCartIcon fontSize='large' sx={{cursor: "pointer"}} />
            <Box>{cant}</Box>
        </Container>
    )
}