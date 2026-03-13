import React from "react";
import { Box, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Mybuys = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/img/baner3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* CONTENIDO */}
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          textAlign: "center",
          px: 4,
        }}
      >
        <ShoppingBagIcon sx={{ fontSize: 90, color: "rgba(255,255,255,0.3)" }} />
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          Aún no tienes compras
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 400 }}>
          Explora nuestro catálogo y encuentra la gorra perfecta para ti.
        </Typography>
      </Box>
    </Box>
  );
};

export default Mybuys;
