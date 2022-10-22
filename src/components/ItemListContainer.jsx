import React from "react";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ItemListContainer({greeting}) {
    return (
        <Box padding="3rem" sx={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0px 0px 10px #999"}}>
            <Typography variant="h4">{greeting}</Typography>
            <KeyboardIcon sx={{fontSize: "5em"}}/>
        </Box>
    );
}