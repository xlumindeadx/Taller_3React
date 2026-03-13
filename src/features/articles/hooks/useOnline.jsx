import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from "@mui/material";

export const StatusBar = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() { setIsOnline(true); }
    function handleOffline() { setIsOnline(false); }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
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
        Useonline
      </Typography>

      <Typography variant="h2" sx={{ mb: 2 }}>
        🛜
      </Typography>

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: isOnline ? "success.main" : "error.main" }}
      >
        {isOnline ? "✅ En línea" : "❌ Desconectado"}
      </Typography>
    </Paper>
  );
};