import React from "react";
import {
  Card, CardMedia, CardContent, Typography,
  Button, Chip, Box, IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid from '@mui/material/Grid';
import { useCart } from "../../../shared/carrito";

const Articles = () => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();

  const products = [
    { name: "Gorra Nike ", price: 45000, img: "./img/b1.png" },
    { name: "Gorra Converse ", price: 50000, img: "./img/b2.png" },
    { name: "Gorra Adidas ", price: 42000, img: "./img/b3.png" },
    { name: "Gorra NewYork ", price: 55000, img: "./img/b4.png" },
    { name: "Gorra Nike", price: 40000, img: "./img/n1.png" },
    { name: "Gorra Converse", price: 50000, img: "./img/n2.png" },
    { name: "Gorra Adidas", price: 29000, img: "./img/n3.png" },
    { name: "Gorra NewYork", price: 45000, img: "./img/n4.png" },
  ];

  const destacados = products.slice(0, 4);
  const nuevos = products.slice(4, 8);

  const renderProducts = (list) =>
    list.map((product, index) => (
      <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Card sx={{ border: "1px solid black", height: "100%", display: "flex", flexDirection: "column", borderRadius: 2, boxShadow: 4 }}>
          <Box sx={{ height: 250, display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <CardMedia
              component="img"
              image={`${import.meta.env.BASE_URL}${product.img}`}
              alt={product.name}
              sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
            />
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              COP ${product.price.toLocaleString("es-CO")}
            </Typography>
            <Chip label="Disponible" color="success" size="small" sx={{ mt: 1, mb: 1 }} />

            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => addToCart(product)}
                sx={{ flexGrow: 1, backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "#333" } }}
              >
                Agregar al carrito
              </Button>

              <IconButton
                onClick={() => toggleFavorite(product)}
                sx={{
                  border: "1px solid",
                  borderColor: isFavorite(product.name) ? "#e53935" : "#ccc",
                  borderRadius: 1,
                  color: isFavorite(product.name) ? "#e53935" : "#aaa",
                  "&:hover": { backgroundColor: "#fdecea" },
                }}
              >
                {isFavorite(product.name) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ));

  return (
    <Box
      sx={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/fondo.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        py: 4,
      }}
    >
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>Catálogo de Gorras</Typography>
        <Typography sx={{ mt: 1, color: "white" }}>Conoce algunos de nuestros mejores estilos — modernas, clásicas y urbanas.</Typography>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: "white" }}>Gorras en Blanco</Typography>
        <Grid container spacing={3}>{renderProducts(destacados)}</Grid>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 } }}>
        <Typography variant="h6" sx={{ mb: 2, color: "white" }}>Gorras en Negro</Typography>
        <Grid container spacing={3}>{renderProducts(nuevos)}</Grid>
      </Box>
    </Box>
  );
};

export default Articles;