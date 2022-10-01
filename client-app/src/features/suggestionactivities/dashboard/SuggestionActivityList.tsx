import React, { Fragment, SyntheticEvent, useState } from 'react';
import Card from '@mui/material/Card';
import { observer } from 'mobx-react-lite';
import SuggestionActivityListItem from './SuggestionActivityListItem';
import { AppBar, Box, makeStyles, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import { useStore } from '../../../app/stores/store';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EmailActivity } from '../../../app/models/emailactivity';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { message } from 'antd';
import { Photo } from '@mui/icons-material';
import { Button } from '@mantine/core';
import Book from '../../../photoImage/book.svg';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
  
export default observer (function SuggestionActivityList() {
    const {suggestionActivityStore}= useStore();
    const {groupedSuggestionActivities }= suggestionActivityStore;
    return(
        
        <Box sx={{ flexGrow: 3 }}>
            <Typography sx={{fontSize:30,color:'white',fontFamily:'Moon',fontWeight:'bold',marginTop:30,marginLeft:5}}><AutoStoriesOutlinedIcon fontSize="large" />  Suggestion Book</Typography>
        
        <Grid container spacing={3}>
        <img src={Book} style={{width:500,height:500,marginTop:250}}></img>
       
            {groupedSuggestionActivities.map(([group, activities]) => (
                
                <Fragment key={group}>
                      
                    <AppBar position="static" style={{marginTop:200,width:440,height:550,marginLeft:100,background: 'linear-gradient(to right bottom, #E5ECEE, #527996)',borderRadius:10}} > 
                    <Typography color='#23395d' sx={{textAlign:'center', fontFamily:'Century Gothic',fontWeight:'bold',color:'white'} }>
                    
                        {group}
                      
                           
                            {activities.map(activity=> (
                                <Grid item xs>   
                            <SuggestionActivityListItem key={activity.id} suggestionActivity = {activity}/> </Grid>
                            ))}
                           
              
                
                        </Typography>

                    </AppBar>

                </Fragment>
              
            ))}
            </Grid>
            </Box>
    
)})