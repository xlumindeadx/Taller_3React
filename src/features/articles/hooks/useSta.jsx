import { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const UseSta = () => {
  const [cantidad, setCantidad] = useState(0);

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
          mb: 1,
          letterSpacing: 1.2,
          color: "text.secondary",
          textTransform: "uppercase",
        }}
      >
        useState
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        🧢
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, color: "text.primary" }}>
      Cantidad
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <IconButton
          size="medium"
          color="black"
          onClick={() => setCantidad((c) => Math.max(0, c - 1))}
          sx={{ border: "1px solid", borderColor: "divider" }}
        >
          <RemoveIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="bold" sx={{ minWidth: 30 }}>
          {cantidad}
        </Typography>

        <IconButton
          size="medium"
          color="black"
          onClick={() => setCantidad((c) => c + 1)}
          sx={{ border: "1px solid", borderColor: "divider" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};