import { createContext, useContext, useState } from "react";
import {
  Box, Typography, Button, IconButton,
  Divider, Drawer, Badge,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) return prev.filter((item) => item.name !== product.name);
      return [...prev, product];
    });
  };

  const isFavorite = (name) => favorites.some((item) => item.name === name);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const CartDrawer = () => (
    <Drawer
      anchor="right"
      open={openCart}
      onClose={() => setOpenCart(false)}
      PaperProps={{
        sx: {
          width: 380,
          borderRadius: "16px 0 0 16px",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 3, py: 2.5, backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <ShoppingCartCheckoutIcon sx={{ color: "white", fontSize: 28 }} />
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>Mi Carrito</Typography>
        </Box>
        <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="success" sx={{ "& .MuiBadge-badge": { fontSize: 13, fontWeight: "bold" } }}>
          <Box sx={{ width: 24 }} />
        </Badge>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto", px: 2, py: 1 }}>
        {cart.length === 0 ? (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 2, py: 10 }}>
            <ShoppingCartCheckoutIcon sx={{ fontSize: 70, color: "#e0e0e0" }} />
            <Typography variant="body1" color="text.secondary" fontWeight="bold">Tu carrito está vacío</Typography>
            <Typography variant="caption" color="text.disabled">Agrega productos desde el catálogo</Typography>
          </Box>
        ) : (
          cart.map((item, i) => (
            <Box key={i}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 2, px: 1, borderRadius: 2, transition: "background 0.2s", "&:hover": { backgroundColor: "#f9f9f9" } }}>
                <Box component="img" src={`${import.meta.env.BASE_URL}${item.img}`} alt={item.name}
                  sx={{ width: 65, height: 65, objectFit: "contain", borderRadius: 2, backgroundColor: "#f5f5f5", p: 0.5, flexShrink: 0, border: "1px solid #eee" }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" fontWeight="bold" noWrap>{item.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{item.quantity} unidad{item.quantity > 1 ? "es" : ""}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 0.5 }}>
                    <Typography variant="body2" color="text.secondary">COP ${item.price.toLocaleString("es-CO")} c/u</Typography>
                    <Typography variant="body2" fontWeight="bold" color="success.main">COP ${(item.price * item.quantity).toLocaleString("es-CO")}</Typography>
                  </Box>
                </Box>
                <IconButton size="small" onClick={() => removeFromCart(item.name)} sx={{ color: "#e53935", "&:hover": { backgroundColor: "#fdecea" }, flexShrink: 0 }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Divider />
            </Box>
          ))
        )}
      </Box>

      {cart.length > 0 && (
        <Box sx={{ px: 3, py: 2.5, borderTop: "2px solid #f0f0f0", backgroundColor: "#fafafa" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
            <Typography variant="h6" fontWeight="bold">Total</Typography>
            <Typography variant="h6" fontWeight="bold" color="success.main">COP ${total.toLocaleString("es-CO")}</Typography>
          </Box>
          <Button fullWidth variant="contained"
            sx={{ backgroundColor: "#1a1a1a", color: "white", borderRadius: 2, py: 1.5, fontWeight: "bold", fontSize: "1rem", letterSpacing: 1, "&:hover": { backgroundColor: "#333" } }}>
            Finalizar compra
          </Button>
          <Button fullWidth variant="text" onClick={() => setOpenCart(false)} sx={{ mt: 1, color: "#888", fontSize: "0.85rem" }}>
            Seguir comprando
          </Button>
        </Box>
      )}
    </Drawer>
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, openCart, setOpenCart, favorites, toggleFavorite, isFavorite }}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);