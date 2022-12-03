import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

export default function ExitoCompra() {
  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center" mb={10}>
      <Grid item xs={11} xl={10}>
        <Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
          <Typography align="center" variant="h4" color="initial" mt={2} mb={4}>
            ORDER COMPLETE
          </Typography>
          <FileDownloadDoneIcon color="success" fontSize="large" sx={{display: "block", mx: "auto"}}/>
          <Typography mt={3} align="center" variant="h6" color="initial">
            Your purchase has been confirmed!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
