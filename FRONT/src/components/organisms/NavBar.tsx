import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoImage from '../../images/logo-light-png.png';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';


export const NavBar = () => {

  return (
    <AppBar position="static" style={{ backgroundColor: '#7fb77e' }}>
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <img
            src={LogoImage}
            alt='Logo Good 2 go'
            style={{
              width: '6em',
              marginRight: '2em',
              cursor: 'pointer'
            }}
          />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" sx={{ p: 0, cursor: 'pointer' }}>
              <AccountCircleIcon />
            </Tooltip>
            <AddBusinessIcon sx={{ p: 0, cursor: 'pointer', margin: '0 0 0 1em' }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}