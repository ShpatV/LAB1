
import { Grid, List, ListItem } from '@mui/material';
import React, {useEffect}from 'react';
import ActivityList from './ActivityList';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  

export default observer(function ActivityDashboard(){//child i app component
        const {activityStore}= useStore();
        
         useEffect(() => {
         activityStore.loadActivities();
            }, [activityStore])

        if(activityStore.loadingInitial) return <LoadingComponent  />

    return (
     
            <Grid container spacing={{xs:10,md:15}} >
                <Grid item xs={1} sm={4} md={6} >
                    <Item><ActivityList />
                    
                    </Item>
                </Grid>
                <Grid item xs={1} sm={4} md={6} >
                  <h2>Activity filters</h2>
                </Grid>
            </Grid>  
    )
})