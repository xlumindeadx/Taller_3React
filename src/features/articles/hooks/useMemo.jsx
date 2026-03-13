
import React, { useMemo, useState } from "react";
import { Paper, Typography, Stack, Chip } from "@mui/material";

export const UseMemo = () => {
  const [cantidad, setCantidad] = useState(3); // cantidad de gorras seleccionadas
  const precioUnitario = 25;

  // Calcula el total con useMemo
  const total = useMemo(() => {
    console.log("🔄 Calculando total...");
    return cantidad * precioUnitario;
  }, [cantidad]);

  return (
    <Paper
      elevation={6}
      sx={{
        width: 250,
        p: 3,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        textAlign: "center",
        bgcolor: "#f9f9f9",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "text.secondary",
        }}
      >
        useMemo
      </Typography>

      <Stack spacing={1} mb={2}>
        <Chip label={`Cantidad: ${cantidad}`} color="black" />
        <Chip label={`Precio x1: $${precioUnitario}`} color="success" />
        <Chip label={`Total a pagar: $${total}`} color="secondary" />
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="center">
        <Chip
          label="+ 1 gorra"
          onClick={() => setCantidad((c) => c + 1)}
          clickable
          color="primary"
        />
        <Chip
          label="- 1 gorra"
          onClick={() => setCantidad((c) => Math.max(c - 1, 0))}
          clickable
          color="error"
        />
      </Stack>
    </Paper>
  );
};