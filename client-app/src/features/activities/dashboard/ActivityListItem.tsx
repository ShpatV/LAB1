import { Avatar, Button, Card, CardHeader, Typography, createTheme, Stack, Alert } from '@mui/material';
import {format} from 'date-fns';
import { Box } from '@mui/system';
import React  from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import {ThemeProvider} from '@mui/system';
import ActivityListItemAttendee from './ActivityListItemAttendee';
interface Props {
    activity: Activity
}

const theme = createTheme({
    palette: {
      background: {
        paper: '#708090',
      },
      text: {
     
      
        
      },
      action: {
        active: '#001E3C',
      },
      
    
    },
   
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h2',
              h2: 'h2',
              h3: 'h2',
              h4: 'h2',
              h5: 'h2',
              h6: 'h2',
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
        
    }
   
  });

 
   
export default function ActivityListItem({activity}:Props){
    return ( 
        <ThemeProvider theme={theme}>
         <Card sx={{fontSize: 16,fontFamily: 'Century Gothic'}} >
         {activity.isCancelled && 
          <Typography alignItems={'center'} sx={{display:'flex',justifyContent:'center',color:'white',textAlign:'center',backgroundColor:'red'}}>Cancelled</Typography>
            }
            
          
         {/* <Grid item xs={3}> */}
            <CardHeader  sx={{display:'flex',alignItems:'flex-start'}}
             avatar={
                <Avatar src={activity.host?.image || '/assets/user.png'} sx={{ width: 76, height: 76 ,marginBottom:3}} aria-label="recipe">
                  U
                </Avatar>
              }
              title=  {
              <Typography component={Link} to={`/activities/${activity.id}`} sx={{fontSize:25,fontWeight:'bold'}} color="white" fontFamily={'Century Gothic '}>
                {activity.title}

              </Typography>}
              subheader=  {
              
  
                <Typography component="div" sx={{color:'whitesmoke'}}>
                Host By <Link to={`profiles/${activity.hostUsername}`}> {activity.host?.displayName}</Link>
              </Typography>
              }
              
              
            >  
            </CardHeader>
             {/* </Grid> */}
            {activity.isHost && (
                 <Alert icon={false} severity="success" sx={{width:'50%',color:'orange'}}>You are hosting this activity</Alert>
              )}
                {activity.isGoing && !activity.isHost && (
                <Alert icon={false} severity="success" sx={{color:'green',wdith:'50%'}}>You are going this activity</Alert>
              )}
         
            <Card sx={{width:624, height:50,backgroundColor:'#fafafa'}} >
                <Box sx={{marginTop:1.3,marginLeft:2.5}}>
                    <AccessTimeIcon />  <Typography fontSize={15} fontFamily={'Century Gothic'} >{format(activity.date!, 'dd MMM yyyy h:mm aa')}</Typography>

                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon />{activity.venue}</Typography></Box>
               
            </Card>


            <Card sx={{
              width:624,
              height:70,
                backgroundColor:'#E5E4E2',
               
                }} >
            
            <Box> <ActivityListItemAttendee attendees={activity.attendees!}/></Box>
               
            </Card>
            <Card sx={{
                width:624,
                height:50,
                backgroundColor:'#fafafa'}}>
                <Box style={{marginTop:11}}><Typography  fontFamily={'Century Gothic'} fontSize={15} sx={{marginLeft:2,marginTop:13}}>{activity.description}</Typography>
                
            

              
                <Button color='primary'
                component={Link}
                to={`/activities/${activity.id}`}
                variant="outlined"
                size="small"
                style={{float:'right',marginRight:30}}
               
                
                >View</Button> </Box>
              
            </Card>
        </Card>
        </ThemeProvider>
        

      
    )
}
