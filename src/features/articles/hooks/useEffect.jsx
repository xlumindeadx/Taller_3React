import { useState, useEffect } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";

const gorros = [
  { nombre: "Gorra", src: "/img/hook.jpg" },
  { nombre: "Gorro", src: "/img/hook2.jpg" },
  { nombre: "Sombrerito", src: "/img/hook3.jpg" },
  { nombre: "Sombrero Pirata", src: "/img/hook4.jpg" },
];

export const UseEffect = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % gorros.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <Paper
      elevation={6}
      sx={{
        width: 250,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        m: 2,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        sx={{
          mb: 2,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          color: "text.secondary",
        }}
      >
        useEffect
        <Typography>Modelos Gatunos</Typography>
      </Typography>

      <Box
        component="img"
        src={gorros[index].src}
        alt={gorros[index].nombre}
        sx={{ width: 100, height: 100, mb: 1, objectFit: "contain" }}
      />

      <Typography variant="body1" sx={{ mb: 2, color: "text.primary" }}>
        {gorros[index].nombre}
      </Typography>

      <Chip
        label="Rotando automáticamente"
        size="small"
        sx={{ bgcolor: "text.primary", color: "background.paper" }}
      />
    </Paper>
  );
};