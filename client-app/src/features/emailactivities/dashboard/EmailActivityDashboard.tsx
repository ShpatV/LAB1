import { CircularProgress, Grid, List, ListItem ,Box} from '@mui/material';
import React, {useEffect, useState}from 'react';
import EmailActivityList from './EmailActivityList';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

import { PagingParams } from '../../../app/models/Pagination';
import { Button } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from '../../activities/dashboard/ActivityListItemPlaceholder';
import { useStore } from '../../../app/stores/store';
import { EmailActivity } from '../../../app/models/emailactivity';
interface Props {
  emailActivity: EmailActivity
}

  

export default observer(function EmailActivityDashboard({emailActivity}:Props){//child i app component
        const { emailActivityStore }= useStore();
        // const {loadActivities,activityRegistry, setPagingParams,pagination} = activityStore;
        const { loadEmailActivities } = emailActivityStore;
        const [loadingNext, setLoadingNext] = useState(false);

        function handleGetNext() {
            setLoadingNext(true);
            // setPagingParams(new PagingParams(pagination!.currentPage + 1))
            // loadActivities().then(() => setLoadingNext(false));
        }
        
         useEffect(() => {
              loadEmailActivities();
              // if (activityRegistry.size <= 1) loadActivities();
            }, [
              // activityRegistry.size, 
              // loadActivities, 
              loadEmailActivities])

      

    return (
     
          
                      <Box>
                      {emailActivityStore.loadingInitial && !loadingNext ? (
                        <>
                        <ActivityListItemPlaceholder />
                        <ActivityListItemPlaceholder />
                        </>
                      ) : (
                        <InfiniteScroll 
                        pageStart={0}
                        loadMore={handleGetNext}
                        // hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                        initialLoad={false}><EmailActivityList   emailActivity={emailActivity}  /></InfiniteScroll>

                      )}
                    {/* <Button onClick={handleGetNext} loading={loadingNext} disabled={pagination?.totalPages === pagination?.currentPage}>More...</Button> */}
                   
                    </Box>
                 
    )
})