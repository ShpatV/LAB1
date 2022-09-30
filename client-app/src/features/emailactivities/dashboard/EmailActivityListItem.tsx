import { Avatar, Button, Card, CardHeader, Typography, createTheme, Stack, Alert } from '@mui/material';
import {format} from 'date-fns';
import { Box } from '@mui/system';
import React  from 'react';
import { Link } from 'react-router-dom';
import { EmailActivity } from '../../../app/models/emailactivity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import {ThemeProvider} from '@mui/system';
import ActivityListItemAttendee from './EmailActivityListItemAttendee';
interface Props {
    emailActivity: EmailActivity
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

 
   
export default function EmailActivityListItem({emailActivity}:Props){
    return ( 
        <ThemeProvider theme={theme}>
         
         {/* {activity.isCancelled && 
          <Typography alignItems={'center'} sx={{display:'flex',justifyContent:'center',color:'white',textAlign:'center',backgroundColor:'red'}}>Cancelled</Typography>
            } */}
            
          
         {/* <Grid item xs={3}> */}
           
          
             
              <Typography component={Link} to={`/emailactivities/${emailActivity.id}`} sx={{fontSize:25,fontWeight:'bold'}} color="white" fontFamily={'Century Gothic '}>
                {emailActivity.title}

              </Typography>
            
              
  
                <Typography component="div" sx={{color:'whitesmoke'}}>
                {/* Host By <Link to={`profiles/${activity.hostUsername}`}> {activity.host?.displayName}</Link> */}
              </Typography>
              
              
              
            
           
             {/* </Grid> */}
            {/* {activity.isHost && (
                 <Alert icon={false} severity="success" sx={{width:'50%',color:'orange'}}>You are hosting this activity</Alert>
              )}
                {activity.isGoing && !activity.isHost && (
                <Alert icon={false} severity="success" sx={{color:'green',wdith:'50%'}}>You are going this activity</Alert>
              )} */}
         
             <Typography fontSize={15} fontFamily={'Century Gothic'} >{format(emailActivity.date!, 'dd MMM yyyy h:mm aa')}</Typography>

                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    {emailActivity.venue}</Typography>
               
       


           
            <Typography  fontFamily={'Century Gothic'} fontSize={15} sx={{marginLeft:2,marginTop:13}}>{emailActivity.description}</Typography>
                
            

              
              
           
        </ThemeProvider>
        

      
    )
}
