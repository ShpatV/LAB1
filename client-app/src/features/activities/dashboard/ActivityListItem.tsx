import { Avatar, Button, Card, CardHeader, Typography, createTheme } from '@mui/material';
import {format} from 'date-fns';
import { Box } from '@mui/system';
import React  from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import {ThemeProvider} from '@mui/system';
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
         {/* <Grid item xs={3}> */}
            <CardHeader 
            
             avatar={
                <Avatar sx={{ width: 76, height: 76 }} aria-label="recipe">
                  U
                </Avatar>
              }
              title=  {
              <Typography sx={{fontSize:25}} color="white" fontFamily={'Century Gothic '}>
                {activity.title}

              </Typography>}
              subheader= "Hosted by Shpati"
              
              
            >
            
              
            </CardHeader>
            {/* </Grid> */}
               
         
            <Card sx={{width:624, height:50,backgroundColor:'#fafafa'}} >
                <Box sx={{marginTop:1.3,marginLeft:2.5}}>
                    <AccessTimeIcon />  <Typography fontSize={15} fontFamily={'Century Gothic'} >{format(activity.date!, 'dd MMM yyyy h:mm aa')}</Typography>

                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon />{activity.venue}</Typography></Box>
               
            </Card>


            <Card sx={{
              width:624,
              height:50,
                backgroundColor:'#E5E4E2',
               
                }} >
            
            <Box style={{marginTop:13}}><Typography fontFamily={'Century Gothic'} fontSize={15} sx={{marginLeft:2,marginTop:13}}> Attendees go here</Typography></Box>
               
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
