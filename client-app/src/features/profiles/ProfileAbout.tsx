import React, {useState} from 'react';
import {useStore} from "../../app/stores/store";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileEditForm from "./ProfileEditForm";
import { observer } from 'mobx-react-lite';
import { Grid , Typography,Button, Box } from '@mui/material';

export default observer(function ProfileAbout() {
    const {profileStore} = useStore();
    const {isCurrentUser, profile} = profileStore;
    const [editMode, setEditMode] = useState(false);

    return (
        <Tabs>
            <Grid>
                <Grid sx={{flexDirection:'column'}} >
                    <Typography sx={{floated:'left',fontFamily:'Century Gothic',fontSize:20,fontWeight:'bold'}}>{`About ${profile?.displayName}`}</Typography>
                    {isCurrentUser && (
                        <Button variant="contained" sx={{float:'right',marginLeft:75,marginBottom:2}}
                            onClick={() => setEditMode(!editMode)}
                        >{editMode ? 'Cancel' : 'Edit Profile'}</Button>
                    )}
                </Grid>
                <Grid >
                    {editMode ? <ProfileEditForm setEditMode={setEditMode} /> : <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}

                </Grid>
            </Grid>
        </Tabs>
    )
})