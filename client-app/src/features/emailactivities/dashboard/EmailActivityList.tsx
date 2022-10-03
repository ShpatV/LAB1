import React, { Fragment, SyntheticEvent, useState } from 'react';
import Card from '@mui/material/Card';
import { observer } from 'mobx-react-lite';
import EmailActivityListItem from './EmailActivityListItem';
import { AppBar, makeStyles, Typography } from '@mui/material';
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
interface Props {
    emailActivity: EmailActivity
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
export default observer (function EmailActivityList({emailActivity}:Props) {
    const {emailActivityStore}= useStore();
    const  {emailActivityStore: {deleteEmailActivity, groupedEmailActivities }}= useStore();
    // const {groupedEmailActivities }= emailActivityStore;
    const [target , setTarget] = useState('');

    function handleDeletePhoto( emailActivity: EmailActivity, e: SyntheticEvent<HTMLButtonElement>) {
      setTarget(e.currentTarget.name);
      deleteEmailActivity(emailActivity);
  }
   
    
    return(
        <>
        <Typography sx={{fontSize:30,fontColor:'teal',fontFamily:'Moon' ,color:'white'  }}>Your Messages</Typography>
        <TableContainer component={Paper}>
        
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
     
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Message</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="left">Adressa</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {groupedEmailActivities.map(([group, emailActivities]) => (
            <StyledTableRow key={group}>
              <StyledTableCell component="th" scope="row">
                {group}
              </StyledTableCell>
              <StyledTableCell align="left"> {emailActivities.map(emailActivity=> (
             <Typography sx ={{textAlign:'center', textDecoration:'none',color:'black'}} component={Link} to={`/emailactivities/${emailActivity.id}`} fontFamily={'Century Gothic '}>
              {emailActivity.title} </Typography>))}</StyledTableCell>
              <StyledTableCell align="left">{emailActivities.map(emailActivity=> (
                            <Typography component={Link} to={`/emailactivities/${emailActivity.id}`} sx ={{textAlign:'center', textDecoration:'none',color:'black'}} fontFamily={'Century Gothic '}>
                            {emailActivity.description}</Typography>))}</StyledTableCell>
              <StyledTableCell align="left">{emailActivities.map(emailActivity=> (
                            <Typography component={Link} to={`/emailactivities/${emailActivity.id}`} sx ={{textAlign:'center', textDecoration:'none',color:'black'}}fontFamily={'Century Gothic '}>
                            {emailActivity.city}</Typography>))}</StyledTableCell>
              <StyledTableCell align="left">{emailActivities.map(emailActivity=> (
                            <Typography component={Link} to={`/emailactivities/${emailActivity.id}`}sx ={{textAlign:'center', textDecoration:'none',color:'black'}} fontFamily={'Century Gothic '}>
                            {emailActivity.venue} </Typography> ))}</StyledTableCell>
              <StyledTableCell align="left">{emailActivities.map(emailActivity=> (
              <Button 
              loading={target === emailActivity.id}
             
              onClick = {(e: React.SyntheticEvent<HTMLButtonElement, Event>) => handleDeletePhoto(emailActivity, e)}
           
              name ={emailActivity.id}
              sx={{width: 200}} ><DeleteIcon /></Button>))}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  
    </TableContainer>
        {/* <Grid container spacing={{xs:4,md:7}}  >
            {groupedEmailActivities.map(([group, emailActivities]) => (
                
                <Fragment key={group}>
                    <AppBar position="static" color='transparent'style={{marginTop:200}} > 
                    <Typography color='#192841'>
                        {group}
                        <Card sx={{ display: 'flex-column' } }  >
                            {emailActivities.map(emailActivity=> (
                            <EmailActivityListItem key={emailActivity.id} emailActivity = {emailActivity}/>
                            ))}
                            </Card>
                        </Typography>

                    </AppBar>

                </Fragment>
              
            ))} 



           
              </Grid> */}

               {/* {groupedActivities.map(([group, activities]) => (
                
                <Fragment key={group}>
                    <AppBar position="static" color='transparent'style={{marginTop:200}} > 
                    <Typography color='#192841'>
                        {group}
                       
                            <Card sx={{ display: 'flex-column' } }  >
                            {activities.map(activity=> (
                            <ActivityListItem key={activity.id} activity = {activity}/>
                            ))}
                            </Card>
              
                        
                        </Typography>

                    </AppBar>

                </Fragment>
              
            ))} */}
        </>
            
    )
})