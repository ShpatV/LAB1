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
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Notification } from '@mantine/core';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


interface Props {
    activity: Activity
}

const theme = createTheme({
    palette: {
      background: {
        paper: '#527996',
        // paper: 'linear-gradient(to right bottom, #E5ECEE, #527996)'
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
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    return ( 
        <ThemeProvider theme={theme}>
         <Card sx={{fontSize: 16,fontFamily: 'Century Gothic',background: 'linear-gradient(to right bottom, #E5ECEE, #527996)'}} >
         {activity.isCancelled && 
            <Notification color="red"  disallowClose title={<Typography sx={{fontFamily:"Century gothic",fontSize:15,fontWeight:'bold',color:'red'}}>CANCELLED</Typography>}>
              
            </Notification>
            }
            
          
         {/* <Grid item xs={3}> */}
            <CardHeader  sx={{display:'flex',alignItems:'flex-start'}}
             avatar={
                <Avatar src={activity.host?.image || '/assets/user.png'} sx={{ width: 76, height: 76 ,marginBottom:3}} aria-label="recipe">
                  
                </Avatar>
              }
              title=  {
              <Typography component={Link} to={`/activities/${activity.id}`} sx={{fontSize:25,fontWeight:'bold'}} color="#527996" fontFamily={'Century Gothic '}>
                {activity.title}

              </Typography>}
              subheader=  {
              
  
                <Typography component="div" sx={{color:'#527996',textDecoration:'none'}}>
                Host By <Link  to={`profiles/${activity.hostUsername}`}>  <Typography sx={{color:'#527996',textDecoration:'none',fontWeight:'bold',fontFamily:'Lemon Milk'}}>{activity.host?.displayName}</Typography></Link>
              </Typography>
              }
              
              
            >  
            </CardHeader>
             {/* </Grid> */}
            {activity.isHost && (
                <Notification color="red" disallowClose title="  You Are Hosting This Fair">
              
              </Notification>
              
                //  <Alert icon={false} severity="success" sx={{width:'50%',color:'orange'}}>You are hosting this activity</Alert>
              )}
                {activity.isGoing && !activity.isHost && (
                   <Notification color="green" disallowClose title="  You Are Going To This Fair"></Notification>
               
              )}
         
            
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color:'white',fontFamily:'Century Gothic'}}>Time And Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'white',fontFamily:'Century Gothic'}}> <AccessTimeIcon sx={{marginRight:1}} />
          {format(activity.date!, 'dd MMM yyyy h:mm aa')}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{color:'white',fontFamily:'Century Gothic'}}><PushPinIcon sx={{marginRight:1}} />
          {activity.venue}
          </Typography>
        </AccordionDetails>
      </Accordion>  
               
        


            <Card sx={{
              width:624,
              height:90,
              background: 'linear-gradient(to right bottom, #E5ECEE, white)'
               
                }} >
            
            <Box> <ActivityListItemAttendee attendees={activity.attendees!}/></Box>
               
            </Card>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color:'white',fontFamily:'Century Gothic'}}>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'white',fontFamily:'Century Gothic'}}> 
          {activity.description}
          </Typography>
        </AccordionDetails>
      </Accordion>

            <Card sx={{
                width:624,
                height:50,
                backgroundColor:'#fafafa'}}>
                <Box style={{marginTop:11}}>
                
            

              
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



{/* <Typography  fontFamily={'Century Gothic'} fontSize={15} sx={{marginLeft:2,marginTop:13}}>{activity.description}</Typography> */}


{/* <Typography fontSize={15} fontFamily={'Century Gothic'} >{format(activity.date!, 'dd MMM yyyy h:mm aa')}</Typography>

                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon />{activity.venue}</Typography></Box> */}