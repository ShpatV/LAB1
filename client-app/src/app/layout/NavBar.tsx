import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export default function NavBar(){
    return (
        
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background: "#063970"}}>
          <Toolbar >
            <IconButton edge="start" color="inherit"  sx={{ mr: 5 }}>
              <LocalLibraryIcon  />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 31 }}>
              Anodyne
            </Typography>
            <Tabs textColor="inherit" sx={{ mr: 5 }}>
              <Tab label="Reactivities" component={NavLink} to='/' style={{textDecoration:"none"}} />
              <Tab label="Activities" component={NavLink} to='/activities' style={{textDecoration:"none"}} />
            </Tabs>  
            <Button sx={{ mr: 5 }} component={NavLink} to='/createActivity' style={{textDecoration:"none"}}  variant="contained" color="success" >Create Activity</Button>
          </Toolbar>
        </AppBar>
        
      </Box>
    );
};