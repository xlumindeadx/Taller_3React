
import React, { useReducer } from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";

// Estado inicial
const initialState = {
  cart: { gorra: 0 },
  mensaje: ""
};

// Reducer 
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GORRA":
      const newCart = { gorra: state.cart.gorra + 1 };
      let msg = "";
      if (newCart.gorra >= 4) {
        msg = `¡Combo especial! 4+ gorra tienen 30% de descuento 🎉`;
      }
      return { cart: newCart, mensaje: msg };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        sx={{ mb: 2, textTransform: "uppercase", letterSpacing: 1, color: "text.secondary" }}
      >
        useReducer
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, color: "black", fontStyle: "italic" }}>
        {state.mensaje || "Agrega gorras y consigue descuentos"}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Gorra: {state.cart.gorra}
      </Typography>

      <Stack spacing={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "ADD_GORRA" })}
        >
          Agregar Gorra
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Resetear
        </Button>
      </Stack>
    </Paper>
  );
};