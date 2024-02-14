import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Cart from "./cart/Cart";
import logo from "../assets/imagenes/logo_orejano.png";
import { Link } from "react-router-dom";
import { pages } from "../config/constants";
import { CartContex } from "../contex/CartContex";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import { useEffect } from "react";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { isAuthenticated } = useAuth0();
  const { rechargeCart } = useContext(CartContex);

  useEffect(() => {
    rechargeCart();
  }, []);

  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(26, 32, 39)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "white", display: "flex" }}
          >
            <img src={logo} alt="" style={{ width: "35%" }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                paddingLeft: "3%",
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              El Orejano
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          
          <Container sx={{ display: "flex" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: 'flex-end',
                paddingRight: '4em'
              }}
            >
              {isAuthenticated ? <Logout /> : <Login />}
            </Box>
          </Container>
          <Link to="/Cart">
            <Cart />
          </Link>
        </Toolbar>        
      </Container>
    </AppBar>
  );
}
export default NavBar;
