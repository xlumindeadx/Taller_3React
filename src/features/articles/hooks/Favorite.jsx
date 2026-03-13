import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';

export const Favorite = () => {
  const [color, setColor] = useState("red");

  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        width: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        bgcolor: "background.paper",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        m: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mb: 2, color: color }}
      >
        Mi Texto es de Color: {color}!
      </Typography>

      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="primary" onClick={() => setColor("blue")}>Azul</Button>
        <Button variant="contained" color="error" onClick={() => setColor("red")}>Rojo</Button>
        <Button variant="contained" sx={{ bgcolor: "orange", "&:hover": { bgcolor: "darkorange" } }} onClick={() => setColor("orange")}>Naranja</Button>
        <Button variant="contained" color="success" onClick={() => setColor("green")}>Verde</Button>
      </Stack>
    </Paper>
  );
};