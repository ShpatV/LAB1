import React from 'react'

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Box, Typography,List, Divider, Avatar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { Notification } from '@mantine/core';
interface Props {
    activity: Activity;
}



export default observer(function ActivityDetailedSidebar ({activity: {attendees, host}}: Props) {
    if (!attendees) return null;
  
    return (
        
        <><Box sx={{
            marginLeft:2,
            width: 463,
   
            height: 60,
            background: 'linear-gradient(to right bottom, #E5ECEE, #527996)',
            marginTop:2
        }}><Typography variant="h1" align="center" sx={{fontFamily:'Century Gothic',fontSize:20,padding:2,color:'white'}}>
            {attendees.length} {attendees.length===1 ? 'Person' : 'People'} going
            </Typography></Box>
            <Box sx={{width: 463,
            marginLeft:2,
               borderRadius:2,
               height: 230,
               backgroundColor: 'white'}}> 
        
        {attendees.map(attendee => ( 
          
        <List sx={{ width: '100%', maxWidth: 463, bgcolor: 'background.paper' }} key={attendee.username}>
            {attendee.username === host?.username &&
           <Notification color="green" disallowClose title="HOST">
              
              </Notification>}
                   <ListItem alignItems="flex-start" > 
               
                   <ListItemAvatar>
                       <Avatar  src={attendee.image || 'assets/user.png'} variant="square"  sx={{ width: 56, height: 56 }}/>
                   </ListItemAvatar>
                   <ListItem alignItems="flex-start" sx={{flexDirection:'column'}} >
                    <Typography component={Link} to={`/profiles/${attendee.username}`} sx={{textDecoration: 'none',color:'#527996',fontSize:19,fontFamily:'Century Gothic'}}>{attendee.displayName}</Typography>
                    {attendee.following &&
                    <Typography sx={{color:'orange'}}>Following</Typography>}
                    </ListItem>
                       
                         
                          
               </ListItem>
               <Divider variant="inset" component="li" />
               </List>
            ))}
            
            
             
            </Box></>
          );
        }
        
         
    );
           



    // <Box sx={{position:'absolute',right:20,justifyContent:'right',float:'right',borderRadius:2,width:100,height:20,padding:0.1 ,backgroundColor: 'orange',color:'white'}}>
    //         <Typography  sx={{display:'flex',justifyContent:'center'}}>Host</Typography></Box> 