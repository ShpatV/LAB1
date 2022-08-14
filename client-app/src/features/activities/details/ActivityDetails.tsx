import React, { useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import Grid from '@mui/material/Grid';


export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity,loadActivity,loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() =>{
        if(id) loadActivity(id);
    }, [id,loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent content='Loading activity...' />;

    return(
    //     <Grid>
    //     <Grid container spacing={2} columns={16}>
    //         <Grid >
    //         <ActivityDetailedHeader />
    //         <ActivityDetailedInfo />
    //         <ActivityDetailedChat />
    //         </Grid>
          

    //     </Grid>
    //     <Grid >
    //     <Grid container spacing={2} columns={16}>
    //         <ActivityDetailedSidebar /></Grid>
    //     </Grid>
    // </Grid>
    <Grid container>
        <Grid item xs={12} sm={6} md={9}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <ActivityDetailedSidebar />
        </Grid>
        
    </Grid>

    );
})