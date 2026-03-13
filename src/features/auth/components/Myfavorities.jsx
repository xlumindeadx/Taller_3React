import React from "react";
import {
  Box, Typography, Grid, Card, CardMedia,
  CardContent, Chip, Button, IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../../shared/carrito";

const MyFavorites = () => {
  const { favorites, toggleFavorite, addToCart } = useCart();

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#121212", py: 4, px: { xs: 2, md: 6 } }}>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          ❤️ Mis Favoritos
        </Typography>
        <Typography variant="body1" sx={{ color: "#aaa", mt: 1 }}>
          {favorites.length} producto{favorites.length !== 1 ? "s" : ""} guardado{favorites.length !== 1 ? "s" : ""}
        </Typography>
      </Box>

      {favorites.length === 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt: 10, gap: 2 }}>
          <FavoriteBorderIcon sx={{ fontSize: 80, color: "#444" }} />
          <Typography variant="h6" sx={{ color: "#666" }}>No tienes productos favoritos aún</Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>Agrega productos desde el catálogo</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  border: "1px solid #333",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 30px rgba(0,0,0,0.7)" },
                }}
              >
                <Box sx={{ height: 220, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#2a2a2a", borderRadius: "12px 12px 0 0", p: 1, position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={`${import.meta.env.BASE_URL}${product.img}`}
                    alt={product.name}
                    sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                  <IconButton
                    onClick={() => toggleFavorite(product)}
                    sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "rgba(0,0,0,0.5)", "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" } }}
                  >
                    <FavoriteIcon sx={{ color: "#e53935" }} />
                  </IconButton>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "white" }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#aaa", mt: 0.5 }}>
                    COP ${product.price.toLocaleString("es-CO")}
                  </Typography>
                  <Chip label="Disponible" color="success" size="small" sx={{ mt: 1, mb: 2 }} />
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                    sx={{ backgroundColor: "#ffffff", color: "#000", fontWeight: "bold", "&:hover": { backgroundColor: "#e0e0e0" } }}
                  >
                    Agregar al carrito
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MyFavorites;