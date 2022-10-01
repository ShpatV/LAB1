import { CircularProgress, Grid, List, ListItem ,Box, Container} from '@mui/material';
import React, {useEffect, useState}from 'react';

import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

import { PagingParams } from '../../../app/models/Pagination';
import { Button } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from '../../activities/dashboard/ActivityListItemPlaceholder';
import { useStore } from '../../../app/stores/store';
import { SuggestionActivity } from '../../../app/models/suggestionactivity';
import SuggestionActivityList from './SuggestionActivityList';
import './prov.css';

  

export default observer(function SuggestionActivityDashboard(){//child i app component
        const { suggestionActivityStore }= useStore();
        // const {loadActivities,activityRegistry, setPagingParams,pagination} = activityStore;
        const { loadSuggestionActivities } = suggestionActivityStore;
        const [loadingNext, setLoadingNext] = useState(false);

        function handleGetNext() {
            setLoadingNext(true);
            // setPagingParams(new PagingParams(pagination!.currentPage + 1))
            // loadSuggestionActivities().then(() => setLoadingNext(false));
        }
        
        useEffect(() => {
          loadSuggestionActivities();
          // if (activityRegistry.size <= 1) loadActivities();
        }, [
          // activityRegistry.size, 
          // loadActivities, 
          loadSuggestionActivities])
      

    return (
      <Container>
      
    
            {suggestionActivityStore.loadingInitial && !loadingNext ? (
              <>
              <ActivityListItemPlaceholder />
              <ActivityListItemPlaceholder />
              </>
            ) : (
              <InfiniteScroll 
              pageStart={0}
              loadMore={handleGetNext}
              // hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
              initialLoad={false}><SuggestionActivityList /></InfiniteScroll>

            )}
          {/* <Button onClick={handleGetNext} loading={loadingNext} disabled={pagination?.totalPages === pagination?.currentPage}>More...</Button> */}
         
        
         </Container>
                 
    )
})