import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        mt: 0,
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 10 },
        borderTop: "1px solid #ddd",
      }}
    >
  <Grid container spacing={4}>
      <Grid size={{xs:12 , md:3}}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            NUESTRAS POLÍTICAS
          </Typography>

    <Box sx={{ height: 2, width: "80%", backgroundColor: "white", mt: 1, mb: 2 }} />
          <Typography sx={{ mb: 1 }}>Políticas de Envío</Typography>
          <Typography sx={{ mb: 1 }}>Política de Reembolso</Typography>
          <Typography sx={{ mb: 1 }}>Términos del Servicio</Typography>
          <Typography sx={{ mb: 1 }}>Privacidad de Datos</Typography>
      </Grid>

     
      <Grid size={{xs:12 , md:3}}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>OTRA INFORMACIÓN</Typography>
    <Box sx={{ height: 2, width: "80%", backgroundColor: "white", mt: 1, mb: 2 }} />
          <Typography sx={{ mb: 1 }}>Tarjetas de Regalo</Typography>
          <Typography sx={{ mb: 1 }}>Tiendas Autorizadas</Typography>
      </Grid>

        
      <Grid size={{xs:12,md:3}}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>SÍGUENOS</Typography>
    <Box sx={{ height: 2, width: "80%", backgroundColor: "white", mt: 1, mb: 2 }} />
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <InstagramIcon sx={{ fontSize: 30 }} />
            <Typography>@store_gm_oficial</Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FacebookIcon sx={{ fontSize: 30 }} />
            <Typography>Store G&M Oficial</Typography>
    </Box>
      </Grid>

       
      <Grid size={{xs:12,md:3}}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>NUESTRA MARCA</Typography>
    <Box sx={{ height: 2, width: "70%", backgroundColor: "white", mt: 1, mb: 2 }} />
          <Typography sx={{ mb: 1 }}>
          Somos una marca 100% Colombiana, enfocada Accesorios de Cabeza.
          </Typography>

          <Typography sx={{ mb: 1 }}>
          Diseños exclusivos urbanos.
          </Typography>
      </Grid>

  </Grid>

      
      <Typography sx={{ textAlign: "center", mt: 5, fontSize: 14 }}>
        © 2026 Store G&M • Todos los derechos reservados • Actividades_SENA
      </Typography>
    </Box>
  );
};