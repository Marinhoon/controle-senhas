import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export default function ButtonAppBar({ searchValue, onSearchChange, onOpenModal }) {
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
            onClick={onOpenModal}
          >
            <AddIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'      
            }}>
            <Typography variant="h6" component="div">
              CONTROLE DE SENHAS
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Pesquisar pacientes"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{
              marginLeft: 2,
              backgroundColor: 'white',
              borderRadius: '14px',
              width: '500px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
