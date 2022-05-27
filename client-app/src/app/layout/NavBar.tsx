import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useStore } from '../stores/store';





export default function NavBar(){

  const {activityStore} = useStore();
    return (
        
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" color="secondary">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 31 }}>
              Anodyne
            </Typography>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 10 }}>
              Reactivities
            </Typography>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 10 }}>
              Activities
            </Typography>
            <Button onClick={()=>activityStore.openForm()} variant="contained" color="success" >Create Activity</Button>
          </Toolbar>
        </AppBar>
        
      </Box>
    );
};