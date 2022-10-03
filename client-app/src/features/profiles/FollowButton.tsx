import { Button } from '@mantine/core';
import {  Grid } from '@mui/material';
import Item from 'antd/lib/descriptions/Item';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';

interface Props {
    profile: Profile;

}

export default observer(function FollowButton({profile}: Props){
    const{profileStore, userStore} = useStore();
    const {updateFollowing, loading} = profileStore;


    if(userStore.user?.username === profile.username) return null;

    function handleFollow(e: SyntheticEvent, username: string) {
        e.preventDefault();
        profile.following ? updateFollowing(username, false) : updateFollowing(username, true);
    }
    return (
        <><Grid item xs={2}>
            
        </Grid><Grid item xs={6} md>

                <div><Item><Button  sx={{ width: '100%'}} color={profile.following ? 'red' : 'green'} loading={loading} onClick={(e: React.SyntheticEvent<Element, Event>) => handleFollow(e, profile.username )} >{profile.following ? 'Unfollow' : 'Follow'} </Button>
                </Item></div>
            </Grid></>
    )
})