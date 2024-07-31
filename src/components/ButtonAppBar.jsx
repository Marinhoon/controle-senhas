// src/components/ButtonAppBar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

export default function ButtonAppBar({ onSearch, searchValue, onSearchChange }) {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6" component="div">
              Controle de Senha
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Pesquisar pacientes"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ marginLeft: 2 }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}