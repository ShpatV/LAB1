import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Tab, Tabs, Tooltip } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useStore } from '../stores/store';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';



export default observer( function NavBar(){
  const {userStore: {user, logout}} = useStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              <Tab label="Errors" component={NavLink} to='/errors' style={{textDecoration:"none"}} />
            </Tabs>  
            <Button sx={{ mr: 5 }} component={NavLink} to='/createActivity' style={{textDecoration:"none"}}  variant="contained" color="success" >Create Activity</Button>
            
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                  <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem>
                    <Avatar component={Link} to={`/profile/${user?.username}`} /> {user?.displayName}
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logout} >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
       
          </Toolbar>
        </AppBar>
        
      </Box>
    )
});