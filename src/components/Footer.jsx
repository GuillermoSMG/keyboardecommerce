import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Footer() {
    return (
        <Box padding="2rem" sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#777", alignContent: "end", marginTop: "4rem"}}>
            <Box></Box>
            <Typography color="#fff" fontSize="1.125em" >© Copyright 2022</Typography>
        </Box>
    )
}