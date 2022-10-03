import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { AppBar, makeStyles, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import Location from '../../../assets/img/location.svg'


export default observer (function ActivityList() {
    const {activityStore}= useStore();
    const {groupedActivities}= activityStore;
   
    
    return(
        <>
        
        <Typography sx={{fontSize:35,color:'white',fontFamily:'moon',fontWeight:'bold',marginRight:20,alignItems:'left',justifyContent:'left'}}><img src={Location} style={{width:150,height:150,marginRight:10,alignItems:'Left',justifyContent:'left'}} />Book Fairs</Typography>
        <Grid container spacing={{xs:2,md:7}}  >
            {groupedActivities.map(([group, activities]) => (
                
               
                    
                    <Typography color='white' sx={{fontFamily:'Century gothic',fontWeight:'bold',marginTop:20}}>
                    <Fragment key={group}>
                        {group}
                        <AppBar position="static" color='transparent'style={{marginTop:20,borderRadius:20}} > 
                       
                            <Card sx={{ display: 'flex-column' ,borderRadius:3,background: 'linear-gradient(to right bottom, #E5ECEE, #527996)'} }  >
                            {activities.map(activity=> (
                            <ActivityListItem key={activity.id} activity = {activity}/>
                            ))}
                            </Card>
              
                        
                 

                    </AppBar>

                </Fragment>
                </Typography>
              
            ))}
              </Grid>
        </>
            
    )
})