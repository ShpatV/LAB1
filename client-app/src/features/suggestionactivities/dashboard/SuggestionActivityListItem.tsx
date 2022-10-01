import { Avatar, Button, Card, CardHeader, Typography, createTheme, Stack, Alert, styled, ButtonProps, Paper } from '@mui/material';
import {format} from 'date-fns';
import { Box } from '@mui/system';
import React  from 'react';
import { Link } from 'react-router-dom';
import { EmailActivity } from '../../../app/models/emailactivity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import {ThemeProvider} from '@mui/system';
import ActivityListItemAttendee from './SuggestionActivityListItemAttendee';
import { SuggestionActivity } from '../../../app/models/suggestionactivity';
import { lightGreen, red } from '@mui/material/colors';
import { useStore } from '../../../app/stores/store';
interface Props {
    suggestionActivity: SuggestionActivity
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
  const activityImageStyle ={
   

  };
  const activityImageTextStyle={
      position: 'absolute',
      bottom:'5%',
      left:'5%',
      width:'100%',
      height:'auto',
      color:'white'
  }
  const stylesCard={
    stylesCard:{
        color:'white',
        font:'Lemon Milk'
    }
}
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
   
    backgroundColor: lightGreen[300],
    '&:hover': {
      backgroundColor: lightGreen[200],
    },
  }));
  const ColorButton2 = styled(Button)<ButtonProps>(({ theme }) => ({
   
   
    backgroundColor: red[400],
    '&:hover': {
      backgroundColor: red[400],
    },
  }));

   
export default function SuggestionActivityListItem({suggestionActivity}:Props){
  const{suggestionActivityStore:{updateAttendance, loading}} = useStore();  
    const styles = {
    paperContainer: {
   
          backgroundImage: `url(/assets/categoryImagesSuggestion/${suggestionActivity.category}.jpg)`,
      }};
    return ( 
    

    <Box>
            
    <Paper style={styles.paperContainer} sx={{maxWidth:445,height:200}}>

   
    </Paper>
    <Paper sx={{height:70}}>


   
      
          
          

            <Card sx={{width:440, height:150,backgroundColor:'#whtie'}} >
                   
            <Typography sx={{textAlign:'left',marginTop:3,marginLeft:5,fontFamily:'Century Gothic',fontWeight:'bold',fontSize:30,color:'#23395d'}}>{suggestionActivity.title}
        <Typography>{format (suggestionActivity.date!,'dd MMM yyyy')}</Typography>
        <Typography>Hosted by <Link to={`/profiles/${suggestionActivity.host?.username}`}>{suggestionActivity.host?.displayName}</Link> </Typography>
        </Typography>
                    
               
            </Card>
          
              <Card sx={{width:440, height:50,backgroundColor:'#fafafa'}} >
                    <Box sx={{marginTop:1.3}}>
                 

                 <Typography fontSize={20} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                 {suggestionActivity.description}</Typography></Box>
                    
               
            </Card>

          
              <Card sx={{width:440, height:50,backgroundColor:'#fafafa'}} >
                  <Box sx={{marginTop:1.3,marginLeft:2.5}}>
                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon />{suggestionActivity.venue}</Typography></Box>
                    <Box sx={{marginTop:1.3,marginLeft:2.5}}>
                    <Typography fontSize={15} fontFamily={'Century Gothic'} style={{float:'right',marginRight:50}}  >
                    <PushPinIcon />{suggestionActivity.city}</Typography></Box>
                    
               
            </Card>
            <>
            <Button    component={Link} to={`/managesuggestion/${suggestionActivity.id}`}   sx={{float:'right',marginTop:2,marginRight:4.5,color:'white'}}>
               Manage Event
           </Button>
            </>


    </Paper>
   
        
        
 

</Box>

        

      
    )
}
