import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const NavLinks = (
    <>
      <Link to="/" style={navLinkStyle}>
        Home
      </Link>
      <Link to="/about" style={navLinkStyle}>
        About
      </Link>
      <Link to="/contact" style={navLinkStyle}>
        Contact
      </Link>
      <Link to="/blog" style={navLinkStyle}>
        Blogs
      </Link>
      {!isLoggedIn ? (
        <>
          <Button variant="outlined" color="primary" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </>
      ) : (
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Logo */}
      <Typography
        component={Link}
        to="/"
        sx={{
          fontWeight: 'bold',
          fontSize: '24px',
          textDecoration: 'none',
          color: 'primary.main',
          '&:hover': { color: 'secondary.main' },
        }}
      >
        CropX
      </Typography>

      {/* Desktop Nav */}
      {!isMobile && (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>{NavLinks}</Box>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Menu
              </Typography>
              <Divider />
              <List>
                <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact" />
                </ListItem>
                {!isLoggedIn ? (
                  <>
                    <ListItem button onClick={() => { toggleDrawer(false)(); navigate('/login'); }}>
                      <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button onClick={() => { toggleDrawer(false)(); navigate('/signup'); }}>
                      <ListItemText primary="Sign Up" />
                    </ListItem>
                  </>
                ) : (
                  <ListItem button onClick={() => { toggleDrawer(false)(); handleLogout(); }}>
                    <ListItemText primary="Logout" />
                  </ListItem>
                )}
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

// Reusable link style
const navLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 500,
  marginRight: 16,
};

export default Navbar;
