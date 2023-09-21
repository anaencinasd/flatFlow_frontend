import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import AuthService from './../../../Config/Service/auth.service';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleConfig = () =>{
    navigate('#')
  }

  const handleAbout = () =>{
    navigate('#')
  }

  const handleGroupOptions =()=>{
    navigate('/yourgroups')
  }

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'primary',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            FLAT FLOW
          </Typography>
          <div>
            <IconButton
              color="inherit"
              aria-label="Cuenta"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleGroupOptions}>Tus grupos</MenuItem>
              <MenuItem onClick={handleConfig}>Configuración</MenuItem>
              <MenuItem onClick={handleAbout}>Sobre FlatFlow</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
              
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
