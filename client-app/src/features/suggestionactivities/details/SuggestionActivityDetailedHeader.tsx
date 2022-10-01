import { observer } from 'mobx-react-lite';
import React from 'react'
import { Box,Card, CardHeader, CardMedia, createTheme, makeStyles, Paper, Typography, styled, ButtonProps } from '@mui/material';
import {Activity} from "../../../app/models/activity";
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/system';
import { green, lightGreen, pink, purple, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';
import { useStore } from '../../../app/stores/store';
import { Button } from '@mantine/core';
import { SuggestionActivity } from '../../../app/models/suggestionactivity';
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


interface Props {
    suggestionActivity: SuggestionActivity
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

export default observer (function SuggestionActivityDetailedHeader({suggestionActivity}: Props) {
    const{suggestionActivityStore:{updateAttendance, loading}} = useStore();  
    const styles = {
    paperContainer: {
          backgroundImage: `url(/assets/categoryImagesSuggestion/${suggestionActivity.category}.jpg)`,
      }};
   


    return (
        <Box>
            
            <Paper style={styles.paperContainer} sx={{filter: 'brightness(100%)' ,maxWidth:945,height:400}}>

                <Typography sx={{textAlign:'left',position:'absolute',marginTop:20,marginLeft:5,fontFamily:'Century Gothic',fontSize:60,color:'white'}}>{suggestionActivity.title}
                <Typography>{format (suggestionActivity.date!,'dd MMM yyyy')}</Typography>
                <Typography>Hosted by <Link to={`/profiles/${suggestionActivity.host?.username}`}>{suggestionActivity.host?.displayName}</Link> </Typography>
                </Typography>
            </Paper>
            <Paper sx={{height:70}}>
              
                    <>
                    <Button color="red" radius="md"  component={Link} to={`/managesuggestion/${suggestionActivity.id}`}   sx={{float:'right',marginTop:2,marginRight:4.5}}>
                       Manage Event
                   </Button>
                    </>
   
            </Paper>
           
                
                
         

        </Box>
    )
})