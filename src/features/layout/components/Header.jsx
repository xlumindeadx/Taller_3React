import React from "react";
import { NavLink } from "react-router-dom";
import {
  InputBase,
  Button,
  Box,
  Typography,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import { useCart } from "../../../shared/carrito";

// Iconos
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleIcon from "@mui/icons-material/Article";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("md")]: { width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const btnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  textTransform: "none",
  padding: "0px 8px",
  minWidth: 120,
  color: "#bdbdbd",
  "&.active": { color: "#fff" },
  "& svg": { fontSize: "24px", margin: "0 auto" },
  "& span": { marginTop: "2px", fontSize: "13px", textAlign: "center" },
};

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
const { cart, setOpenCart, favorites } = useCart();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar>

{/* Boton hamburg*/}
  <IconButton
     sx={{ display: { xs: "flex", md: "none" }, color: "white", mr: 2 }}
    onClick={() => setOpenDrawer(true)}
  >
  <MenuIcon />
  </IconButton>

<Typography variant="h6" noWrap sx={{ mr: 4 }}>
GORRAS_&_MAS </Typography>

  {/* Menu*/}
  <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
      <Button component={NavLink} to="/" sx={btnStyle}><HomeIcon /><span>Inicio</span></Button>
      <Button component={NavLink} to="/articles" sx={btnStyle}><ArticleIcon /><span>Artículos</span></Button>
      <Button component={NavLink} to="/offers" sx={btnStyle}><LocalOfferIcon /><span>Ofertas</span></Button>
      <Button component={NavLink} to="/myaccount" sx={btnStyle}><PersonIcon /><span>Cuenta</span></Button>
      <Button component={NavLink} to="/mybuys" sx={btnStyle}><ShoppingBagIcon /><span>Compras</span></Button>
      <Button component={NavLink} to="/myfavorites" sx={btnStyle}><Badge badgeContent={favorites.length} color="error"><FavoriteIcon /></Badge><span>Favoritos</span></Button>
  </Stack>

  <Box sx={{ flexGrow: 1 }} />

  {/* Buscador */}
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Search>
        <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
        <StyledInputBase placeholder="Buscar productos…" />
        </Search>
      </Box>

  {/* Boton carrito */}
    <Button
      variant="contained"
      color="success"
      onClick={() => setOpenCart(true)}
      sx={{ ml: 1, minWidth: 50, padding: "6px 12px" }}
    >
        <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="error">
        <ShoppingCartCheckoutIcon />
        </Badge>
        </Button>
        </Toolbar>
        </AppBar>
  <Toolbar />

      {/* Drawer*/}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <List sx={{ width: 250 }}>
      <Box sx={{ p: 2 }}>
        <Search sx={{ width: "100%", marginLeft: 0 }}>
        <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
        <StyledInputBase placeholder="Buscar productos…" />
        </Search>
      </Box>



<ListItemButton onClick={() => { setOpenCart(true); setOpenDrawer(false); }}>
  <ListItemIcon>
    <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="error">
      <ShoppingCartCheckoutIcon />
    </Badge>
  </ListItemIcon>
  <ListItemText primary="Carrito" />
</ListItemButton>
          <ListItemButton component={NavLink} to="/" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/articles" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon><ArticleIcon /></ListItemIcon>
            <ListItemText primary="Artículos" />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/offers" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary="Ofertas" />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/myaccount" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Cuenta" />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/mybuys" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
            <ListItemText primary="Compras" />
          </ListItemButton>

         <ListItemButton component={NavLink} to="/myfavorites" onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Badge badgeContent={favorites.length} color="error">
          <FavoriteIcon />
          </Badge>
          </ListItemIcon>
          <ListItemText primary="Favoritos" />
        </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;