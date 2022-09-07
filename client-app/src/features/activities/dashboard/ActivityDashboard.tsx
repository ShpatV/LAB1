
import { CircularProgress, Grid, List, ListItem } from '@mui/material';
import React, {useEffect, useState}from 'react';
import ActivityList from './ActivityList';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';
import { PagingParams } from '../../../app/models/Pagination';
import { Button } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from './ActivityListItemPlaceholder';


  

export default observer(function ActivityDashboard(){//child i app component
        const {activityStore}= useStore();
        const {loadActivities,activityRegistry, setPagingParams,pagination} = activityStore;
        const [loadingNext, setLoadingNext] = useState(false);

        function handleGetNext() {
            setLoadingNext(true);
            setPagingParams(new PagingParams(pagination!.currentPage + 1))
            loadActivities().then(() => setLoadingNext(false));
        }
        
         useEffect(() => {
              if (activityRegistry.size <= 1) loadActivities();
            }, [activityRegistry.size, loadActivities])

      

    return (
     
            <Grid container spacing={{xs:4,md:2}}  >
                <Grid item xs={5} sm={12} md={6} >
                    <Grid item>
                      {activityStore.loadingInitial && !loadingNext ? (
                        <>
                        <ActivityListItemPlaceholder />
                        <ActivityListItemPlaceholder />
                        </>
                      ) : (
                        <InfiniteScroll 
                        pageStart={0}
                        loadMore={handleGetNext}
                        hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                        initialLoad={false}><ActivityList /></InfiniteScroll>

                      )}
                    {/* <Button onClick={handleGetNext} loading={loadingNext} disabled={pagination?.totalPages === pagination?.currentPage}>More...</Button> */}
                   
                    
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={4} md={6} >
                  <ActivityFilters />
                </Grid>
                <Grid item xs={1} sm={4} md={6} >
                  <CircularProgress variant='indeterminate' disableShrink={loadingNext} />
                </Grid>
            </Grid>  
    )
})