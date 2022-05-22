import React from 'react';
import { Menu } from '@mui/material';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Activity } from '../models/activity';
import axios from 'axios';



export default function NavBar(){
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
            <Button variant="contained" color="success" >Create Activity</Button>
          </Toolbar>
        </AppBar>
        
      </Box>
    );
};