import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StarIcon from "@mui/icons-material/Star";

const Content = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMensaje("Por favor ingresa un correo válido.");
      return;
    }
    setMensaje("💕¡Gracias por unirte al club G&M!💕");
    setEmail("");
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", pb: 6 }}>

      {/* Baner 1*/}
      <Box
        sx={{
          width: "100%",
          height: 800,
          backgroundImage: "url('/img/inicio2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
    <Box sx={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }} />
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", zIndex: 2 }}>Store G&M</Typography>
        <Typography sx={{ mt: 1, color: "white", maxWidth: 500, zIndex: 2 }}>-2026-</Typography>
    </Box>

      {/* Baner 2*/}
      <Box
        sx={{
          width: "100%",
          height: 550,
          backgroundImage: "url('/img/baner2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box sx={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", zIndex: 2 }}>Bienvenido a Nuestra Tienda</Typography>
        <Typography sx={{ mt: 1, color: "white", maxWidth: 700, zIndex: 2 }}>
          Aquí encontrarás diseños modernos cómodos y de excelente calidad para
          complementar tu estilo en cualquier ocasión. Explora nuestro catálogo
          y descubre el accesorio perfecto para ti.
        </Typography>
      </Box>

      {/* Cuadritos info */}
      <Grid container spacing={3} sx={{ mt: 6, mb: 12, px: { xs: 2, md: 10 } }} justifyContent="center">

        <Grid size={{xs:12,md:4}}>
          <Box sx={{ border: "2px solid black", borderRadius: 3, p: 4, textAlign: "center", backgroundColor: "white", height: "100%" }}>
            <PaymentsIcon sx={{ fontSize: 40, color: "#444" }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>Paga en Cuotas con Addi</Typography>
            <Typography sx={{ mt: 1 }}>Aprobación rápida. Sin tarjeta de crédito.</Typography>
          </Box>
        </Grid>

        <Grid size={{xs:12,md:4}}>
          <Box sx={{ border: "2px solid black", borderRadius: 3, p: 4, textAlign: "center", backgroundColor: "white", height: "100%" }}>
            <CreditCardIcon sx={{ fontSize: 40, color: "#444" }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>Recibimos todas las tarjetas</Typography>
            <Typography sx={{ mt: 1 }}>Paga de manera segura con PayU y Mercado Pago.</Typography>
          </Box>
        </Grid>

        <Grid size={{xs:12,md:4}}>
          <Box sx={{ border: "2px solid black", borderRadius: 3, p: 4, textAlign: "center", backgroundColor: "white", height: "100%" }}>
            <StarIcon sx={{ fontSize: 40, color: "#444" }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>Hecho en Colombia</Typography>
            <Typography sx={{ mt: 1 }}>Diseño y confección nacional con envíos a tu casa.</Typography>
          </Box>
        </Grid>

      </Grid>

      {/* baner 3*/}
      <Box
        sx={{
          width: "100%",
          height: 600,
          backgroundImage: "url('/img/baner3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 1 }} />
      </Box>

      {/* Seccion suscripcion */}
      <Box sx={{ width: "100%", py: 8, textAlign: "center", backgroundColor: "#ffffff", color: "#000000", px: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>ÚNETE AL CLUB G&M</Typography>
        <Typography sx={{ mb: 4, fontSize: 16 }}>Conoce lanzamientos, descuentos y ofertas especiales</Typography>

    
        <Box sx={{ display: "flex", maxWidth: 600, mx: "auto" }}>
          <Box
            component="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            sx={{
              flexGrow: 1,
              p: 2,
              border: "1px solid #000",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              outline: "none",
              fontSize: 16,
            }}
          />
          <Button
            onClick={handleSubscribe}
            variant="contained"
            sx={{
              px: 4,
              borderRadius: "0 4px 4px 0",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: 16,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Únete
          </Button>
        </Box>

        <Typography sx={{ mt: 3, fontSize: 14, opacity: 0.7 }}>
          *Te estás registrando para recibir correos electrónicos; puedes darte de baja cuando lo desees.
        </Typography>

        {mensaje && (
          <Typography sx={{ mt: 3, fontSize: 16, fontWeight: "bold", color: "#000" }}>
            {mensaje}
          </Typography>
        )}
      </Box>
<Box
  sx={{
    mx: { xs: 2, md: 10 },
    my: 6,
    p: 5,
    borderRadius: 2,
    background: "linear-gradient( black 0%, #dbeafe 100%)",
    textAlign: "center",
  }}
>
  <Typography variant="h4"sx={{ fontWeight: "bold", mb: 2 ,color:"white"}}>
    Explora el código 
  </Typography>

  <Typography sx={{ mb: 4, color: "black", maxWidth: 600, mx: "auto" }}>
    Gorras & Más es un proyecto académico desarrollado en el <strong>SENA</strong> usando{" "}
    <strong>React</strong> y <strong>Material UI</strong>. Incluye hooks, carrito de compras,
    navegación y diseño responsivo. ¡Échale un vistazo al código!
  </Typography>

  <Button
    variant="contained"
    href="https://github.com/xlumindeadx/Taller_3React.git"
    target="_blank"
    sx={{
      backgroundColor: "white",
      color: "gray",
      fontWeight: "bold",
      borderRadius: 3,
      px: 4,
      py: 1.5,
      boxShadow: 2,
      "&:hover": { backgroundColor: "black" },
    }}
  >
    Ver repositorio en GitHub
  </Button>
  </Box>
  </Box>
  );
};

export default Content;