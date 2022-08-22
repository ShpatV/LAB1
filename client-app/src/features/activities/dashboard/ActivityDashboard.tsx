
import { Grid, List, ListItem } from '@mui/material';
import React, {useEffect}from 'react';
import ActivityList from './ActivityList';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';


  

export default observer(function ActivityDashboard(){//child i app component
        const {activityStore}= useStore();
        const {loadActivities,activityRegistry} = activityStore;
        
         useEffect(() => {
              if (activityRegistry.size <= 1) loadActivities();
            }, [activityRegistry.size, loadActivities])

        if(activityStore.loadingInitial) return <LoadingComponent content="Loading activities..."  />

    return (
     
            <Grid container spacing={{xs:4,md:2}}  >
                <Grid item xs={5} sm={12} md={6} >
                    <Grid item><ActivityList />
                    
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={4} md={6} >
                  <ActivityFilters />
                </Grid>
            </Grid>  
    )
})