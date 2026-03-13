
import React, { useState, useCallback } from "react";
import { Paper, Typography, Stack, Button } from "@mui/material";

export const UseCallback = () => {
  const [favorita, setFavorita] = useState("");

  const seleccionarFavorita = useCallback((gorra) => {
    setFavorita(gorra);
  }, []);

  const gorras = ["Gorro", "Gorra"];

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
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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
        useCallback
      </Typography>

      <Stack spacing={2}>
        {gorras.map((g) => (
          <Paper
            key={g}
            elevation={3}
            sx={{
              p: 2,
              bgcolor: favorita === g ? "red" : "background.paper",
              color: favorita === g ? "#fff" : "text.primary",
              borderRadius: 2,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <Typography variant="h6">{g}</Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: favorita === g ? "#ff6666" : "primary.main",
                color: "#fff",
                "&:hover": {
                  backgroundColor: favorita === g ? "#ff4d4d" : "primary.dark",
                },
              }}
              onClick={() => seleccionarFavorita(g)}
            >
              {favorita === g ? "Favorita ❤️" : "Seleccionar favorita"}
            </Button>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
};