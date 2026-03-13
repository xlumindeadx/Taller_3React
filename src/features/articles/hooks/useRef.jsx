
import React, { useRef } from "react";
import { Paper, Typography, Stack, Button } from "@mui/material";

export const UseRef = () => {
  const snapbackRef = useRef();
  const bombinRef = useRef();
  const panamaRef = useRef();
  const cascoRef = useRef();

  const flash = (ref) => {
    if (ref.current) {
      ref.current.style.transition = "all 0.3s ease";
      ref.current.style.transform = "scale(1.2)";
      ref.current.style.backgroundColor = "black";

      setTimeout(() => {
        ref.current.style.transform = "scale(1)";
        ref.current.style.backgroundColor = "";
      }, 300);
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        width: 250,
        p: 3,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        textAlign: "center",
        bgcolor: "#f9f9f9",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ mb: 2, textTransform: "uppercase", letterSpacing: 1, color: "text.secondary" }}
      >
         useRef
      </Typography>

      <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
        <Button
          ref={snapbackRef}
          variant="contained"
          color="primary"
          onClick={() => flash(snapbackRef)}
        >
          Gorras
        </Button>
        <Button
          ref={bombinRef}
          variant="contained"
          color="secondary"
          onClick={() => flash(bombinRef)}
        >
          Gorros
        </Button>
        <Button
          ref={panamaRef}
          variant="contained"
          color="success"
          onClick={() => flash(panamaRef)}
        >
        Cachuchas
        </Button>
        <Button
          ref={cascoRef}
          variant="contained"
          color="error"
          onClick={() => flash(cascoRef)}
        >
        Sombreros
        </Button>
      </Stack>
    </Paper>
  );
};