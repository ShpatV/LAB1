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
    const{activityStore:{updateAttendance, loading,cancelActivityToggle}} = useStore();  
    const styles = {
    paperContainer: {
          backgroundImage: `url(/assets/categoryImages/${activity.category}.jpg)`,
      }};
   


    return (
        <Box>
            {activity.isCancelled && 
                <Box sx={{position:'absolute',right:20,justifyContent:'right',float:'right',borderRadius:2,width:100,height:20,padding:0.1 ,backgroundColor: 'orange',color:'white'}}>
                <Typography  sx={{display:'flex',justifyContent:'center'}}>Cancelled</Typography></Box>
            }
            <Paper style={styles.paperContainer} sx={{filter: 'brightness(100%)' ,maxWidth:945,height:400}}>

                <Typography sx={{textAlign:'left',position:'absolute',marginTop:20,marginLeft:5,fontFamily:'Century Gothic',fontSize:60,color:'white'}}>{activity.title}
                <Typography>{format (activity.date!,'dd MMM yyyy')}</Typography>
                <Typography>Hosted by <Link to={`/profiles/${activity.host?.username}`}>{activity.host?.displayName}</Link> </Typography>
                </Typography>
            </Paper>
            <Paper sx={{height:70}}>
                {activity.isHost ? (
                    <>
                
           
                    <Button sx={{alignItems:'flex-start',margin:18}} loading={loading }variant="light" color={activity.isCancelled ? 'green' : 'red'} radius="md" onClick={cancelActivityToggle}  >{activity.isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}</Button>
                    <Button color="red" radius="md" disabled={activity.isCancelled} component={Link} to={`/manage/${activity.id}`}   sx={{float:'right',marginTop:2,marginRight:4.5}}>
                       Manage Event
                   </Button>
                    </>
                       

                ) : activity.isGoing ? (
                    <Button loading={loading} variant="light" color="teal" radius="md" onClick={updateAttendance}   sx={{marginTop:2,marginLeft:1.5}}>Cancel attendance</Button>

                ) : (
                    <Button loading={loading} variant="light" color="teal" radius="md" disabled={activity.isCancelled} onClick={updateAttendance}   sx={{marginTop:2,marginLeft:4.5}}>Join Activity</Button>

                )}
   
            </Paper>
           
                
                
         

        </Box>
    )
})