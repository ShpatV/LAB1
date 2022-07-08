import { Check } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import React from 'react';
import Calendar from 'react-calendar';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';



export default function ActivityFilters(){
    return(
        
        <><Paper sx={{ width: 450,height:50,color:'#8cd3ff' ,borderRadius:0,marginTop:18,marginLeft:10}} >
        <Typography align="left"sx={{fontFamily:'Century Gothic',fontSize:18,marginLeft:2,padding:1}}><FilterAltOutlinedIcon />Filters</Typography><Divider /></Paper> 
        <Paper sx={{ width: 450,marginBottom:5,marginLeft:10 }} >
            <MenuList dense >
                <MenuItem sx={{borderRadius:0}}>
                    <ListItemText sx={{marginLeft:1}}>All Activities</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText sx={{marginLeft:1}}>Im Going</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText sx={{marginLeft:1}}>Im hosting</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper><Calendar/></>

    )
}
