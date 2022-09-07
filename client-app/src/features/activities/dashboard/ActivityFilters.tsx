import { Check } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import React from 'react';
import Calendar from 'react-calendar';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';



export default observer( function ActivityFilters(){
    const {activityStore: {predicate, setPredicate}} = useStore();
    return(
        
        <><Paper sx={{ width: 450,height:50,color:'#8cd3ff' ,borderRadius:0,marginTop:18,marginLeft:10}} >
        <Typography align="left"sx={{fontFamily:'Century Gothic',fontSize:18,marginLeft:2,padding:1}}><FilterAltOutlinedIcon />Filters</Typography><Divider /></Paper> 
        <Paper sx={{ width: 450,marginBottom:5,marginLeft:10 }} >
            <MenuList dense >
                <MenuItem disableGutters={predicate.has('all')} sx={{borderRadius:0}} onClick={()=>setPredicate('all','true')}>
                    <ListItemText sx={{marginLeft:1}}>All Activities</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem disableGutters={predicate.has('isGoing')} onClick={()=>setPredicate('isGoing','true')}>
                    <ListItemText sx={{marginLeft:1}}>Im Going</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem disableGutters={predicate.has('isHosting')} onClick={()=>setPredicate('isHost','true')}>
                    <ListItemText sx={{marginLeft:1}}>Im hosting</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper><Calendar 
         onChange={(date: Date) => setPredicate('startDate', date as Date)}
         value={predicate.get('startDate') || new Date()}
         /></>

    )
})
