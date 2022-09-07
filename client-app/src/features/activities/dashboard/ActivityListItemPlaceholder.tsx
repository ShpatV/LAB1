
import Skeleton from '@mui/material/Skeleton';


import { Avatar, Button, Card, CardHeader, Typography, createTheme, Stack, Alert, ThemeProvider } from '@mui/material';
import {format} from 'date-fns';
import { Box } from '@mui/system';
import React  from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';

import ActivityListItemAttendee from './ActivityListItemAttendee';

export default function Variants() {
  return (
    <Stack sx={{marginTop:5}}>
            
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="circular" width={40} height={40} sx={{display:'block'}} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} >
      <Skeleton variant="circular" width={40} height={40} sx={{display:'block'}} />
  
      
         <Card sx={{fontSize: 16,fontFamily: 'Century Gothic'}} >
       
          <Typography alignItems={'center'} sx={{display:'flex',justifyContent:'center',color:'white',textAlign:'center',backgroundColor:'red'}}>Cancelled</Typography>
        
            
          
         {/* <Grid item xs={3}> */}
            <CardHeader  sx={{display:'flex',alignItems:'flex-start'}}
             avatar={
                <Avatar  sx={{ width: 76, height: 76 ,marginBottom:3}} aria-label="recipe">
                  U
                </Avatar>
              }
              title=  {
              <Typography >
             ip

              </Typography>}
              subheader=  {
              
  
                <Typography component="div" sx={{color:'whitesmoke'}}>
                Host By 
              </Typography>
              }
              
              
            >  
            </CardHeader>
             {/* </Grid> */}
          
                 <Alert icon={false} severity="success" sx={{width:'50%',color:'orange'}}>You are hosting this activity</Alert>
          
                
                <Alert icon={false} severity="success" sx={{color:'green',wdith:'50%'}}>You are going this activity</Alert>
             
         
            <Card sx={{width:624, height:50,backgroundColor:'#fafafa'}} >
                <Box sx={{marginTop:1.3,marginLeft:2.5}}>
                    <AccessTimeIcon />  <Typography fontSize={15} fontFamily={'Century Gothic'} ></Typography>

                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon /></Typography></Box>
               
            </Card>


            <Card sx={{
              width:624,
              height:70,
                backgroundColor:'#E5E4E2',
               
                }} >
            
            <Box> </Box>
               
            </Card>
            <Card sx={{
                width:624,
                height:50,
                backgroundColor:'#fafafa'}}>
                <Box style={{marginTop:11}}><Typography  fontFamily={'Century Gothic'} fontSize={15} sx={{marginLeft:2,marginTop:13}}></Typography>
                
            

              
                <Button color='primary'
             
          
                variant="outlined"
                size="small"
                style={{float:'right',marginRight:30}}
               
                
                >View</Button> </Box>
              
            </Card>
        </Card>
   
        </Skeleton>

      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} /> */}
    </Stack>
  );
}