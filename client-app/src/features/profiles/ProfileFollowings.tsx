import { Box, Card, Grid, Tabs, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';
import PersonIcon from '@mui/icons-material/Person';
import ProfileCard from './ProfileCard';
export default observer(function ProfileFollowings(){
    const {profileStore} = useStore();
    const{profile, followings, loadFollowings, loadingFollowings, activeTab} = profileStore;

    useEffect(() => {
        loadFollowings('following');
    }, [loadFollowings])//depedency
    return (
        <Tabs>
             <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid sx={{flexDirection:'column',width:10}}>
                <Typography sx={{floated:'left'}}><PersonIcon />{activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following`}</Typography>
                </Grid>
                <Grid sx={{flexDirection:'column'}}>
                <Grid item xs={12}>
                        {followings.map(profile => (
                            <ProfileCard  key={profile.username} profile={profile} />
                        ))}
                    
                </Grid>
                
            </Grid>
            </Grid>

        </Tabs>
    )
})