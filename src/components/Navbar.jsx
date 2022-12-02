import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import { contextoGeneral } from '../components/ContextContainer';

const pages = [
	{ label: "Home", link: "/" },
	{ label: "Contacto", link: "/contacto" },
	{ label: "Mouse", link: "/categoria/Mouse" },
	{ label: "Teclado", link: "/categoria/Teclado" },
];

export default function Navbar() {

  const { carrito } = React.useContext(contextoGeneral);
  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(carrito.reduce((acc, item) => acc + item.quantity, 0));
  }, [carrito]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "#777"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: "3em"
            }}
          >
            Keyboard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                <Typography sx={{textDecoration: 'none'}} textAlign="center">
                  <Link to={page.link}>{page.label}</Link>
                </Typography>
              </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Keyboard
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  justifyContent: "end", paddingRight: "2rem"  }}>
            {pages.map((page) => (
              <Button
              key={page.label}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}>
              <Link to={page.link}>{page.label}</Link>
            </Button>
            ))}
          </Box>
          <Box>
            <CartWidget cant={cant} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
