import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { AppBar, makeStyles, Typography } from '@mui/material';
import {Grid} from '@mui/material';



export default observer (function ActivityList() {
    const {activityStore}= useStore();
    const {groupedActivities}= activityStore;
   
    
    return(
        <>
        <Grid container spacing={{xs:4,md:7}}  >
            {groupedActivities.map(([group, activities]) => (
                
                <Fragment key={group}>
                    <AppBar position="static" color='transparent'style={{marginTop:200}} > 
                    <Typography color='#192841'>
                        {group}
                       
                            <Card sx={{ display: 'flex-column' } }  >
                            {activities.map(activity=> (
                            <ActivityListItem key={activity.id} activity = {activity}/>
                            ))}
                            </Card>
              
                        
                        </Typography>

                    </AppBar>

                </Fragment>
              
            ))}
              </Grid>
        </>
            
    )
})