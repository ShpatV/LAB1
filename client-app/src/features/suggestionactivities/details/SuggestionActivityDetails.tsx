import React, { useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ActivityDetailedHeader from './SuggestionActivityDetailedHeader';
import ActivityDetailedInfo from './SuggestionActivityDetailedInfo';

import ActivityDetailedSidebar from './SuggestionActivityDetailedSidebar';
import Grid from '@mui/material/Grid';
import SuggestionActivityDetailedHeader from './SuggestionActivityDetailedHeader';
import SuggestionActivityDetailedSidebar from './SuggestionActivityDetailedSidebar';


export default observer(function SuggestionActivityDetails(){
    const {suggestionActivityStore} = useStore();
    const {selectedSuggestionActivity: suggestionActivity,loadSuggestionActivity,loadingInitial, clearSelectedActivity} = suggestionActivityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() =>{
        if(id) loadSuggestionActivity(id);
        return () => clearSelectedActivity();
    }, [id,loadSuggestionActivity, clearSelectedActivity]);

    if (loadingInitial || !suggestionActivity) return <LoadingComponent content='Loading activity...' />;

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
        <SuggestionActivityDetailedHeader suggestionActivity={suggestionActivity} />
        <ActivityDetailedInfo suggestionActivity={suggestionActivity}/>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <SuggestionActivityDetailedSidebar suggestionActivity={suggestionActivity} />
        </Grid>
        
    </Grid>

    );
})