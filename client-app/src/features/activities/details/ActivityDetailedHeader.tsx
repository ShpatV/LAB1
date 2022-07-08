import { observer } from 'mobx-react-lite';
import React from 'react'
import { Box, Card, CardHeader, CardMedia, createTheme, makeStyles, Paper, Typography,Button, styled, ButtonProps } from '@mui/material';
import {Activity} from "../../../app/models/activity";
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/system';
import { green, lightGreen, pink, purple, red } from '@mui/material/colors';
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
    activity: Activity
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

export default observer (function ActivityDetailedHeader({activity}: Props) {
    const styles = {
    paperContainer: {
        
        backgroundImage: `url(/assets/categoryImages/${activity.category}.jpg)`,
     
    }
    
};
    return (
        <Box>
            <Paper style={styles.paperContainer} sx={{filter: 'brightness(100%)' ,maxWidth:945,height:400}}>
                <Typography sx={{textAlign:'left',position:'absolute',marginTop:20,marginLeft:5,fontFamily:'Century Gothic',fontSize:60,color:'white'}}>{activity.title}
                <Typography>{activity.date}</Typography>
                <Typography>Hosted by shpati</Typography>
                </Typography>
            </Paper>
            <Paper sx={{height:70}}>
                <Button variant="outlined"  sx={{marginTop:2,marginLeft:4.5}}>Join Activity</Button>
                <Button variant="outlined" color="error" sx={{marginTop:2,marginLeft:1.5}}>Cancel attendance</Button>
                 <Button variant="contained" sx={{float:'right',marginTop:2,marginRight:4.5}}>
                    Manage Event
                </Button>
               
            </Paper>
           
                
                
         

        </Box>
    )
})