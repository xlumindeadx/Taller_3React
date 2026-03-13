import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Myaccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/img/count.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper sx={{ padding: 3, width: "90%", maxWidth: 350 }}>

{/* TITULOS SUPERIORES */}
  <Box sx={{ textAlign: "center", py: 2 }}>
  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
  Bienvenido/a 
  </Typography>

  <Typography sx={{ mt: 1 }}>
  ¿Aún no tienes una cuenta? Regístrate
  </Typography>
        </Box>

{/* FORMULARIO */}
  <form onSubmit={handleSubmit}>
  <TextField
    fullWidth
    placeholder="Nombre"
    name="name"
    value={formData.name}
    onChange={handleChange}
    margin="normal"
  />

  <TextField
    fullWidth
    placeholder="Correo"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    margin="normal"
  />

  <TextField
    fullWidth
    placeholder="Contraseña"
    name="password"
    type={showPassword ? "text" : "password"}
    value={formData.password}
    onChange={handleChange}
    margin="normal"
    InputProps={{
    endAdornment: (
<InputAdornment position="end">
    <IconButton onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <VisibilityOff /> : <Visibility />}
  </IconButton>
</InputAdornment>
   ),
    }}
  />

    <Button
    fullWidth
    variant="contained"
    type="submit"
    sx={{ marginTop: 2, backgroundColor: "black" }}
    >
    Crear cuenta
      </Button>
      </form>
      </Paper>
    </Box>
  );
};

export default Myaccount;