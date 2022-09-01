import { Box, ButtonGroup, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Photo, Profile } from '../../app/models/profile';
import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid } from '@mantine/core';
import { fontWeight } from '@mui/system';
import { useStore } from '../../app/stores/store';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';
import { Button } from '@mantine/core';
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
    profile: Profile;
}

export default observer (function ProfilePhotos({profile}: Props) {
    const {profileStore: {isCurrentUser, uploadPhoto, uploading, loading, setMainPhoto,deletePhoto}} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target , setTarget] = useState('');

    function handlePhotoUpload(file: Blob) {
        uploadPhoto(file).then(() => setAddPhotoMode (false));
    }

    function handleSetMainPhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>){
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);

    }

    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

    return(
     
            <><Grid>
            <Typography sx={{ fontFamily: 'Century Gothic', fontWeight: 'Bold', float: 'left' }}><AutoAwesomeMosaicIcon />Photos</Typography>
            {isCurrentUser && (
                <Button sx={{ display: 'fl', justifyContent: 'right', float: 'right', alignItems: 'center' }} onClick={() => setAddPhotoMode(!addPhotoMode)}>{addPhotoMode ? 'Cancel' : 'Add Photo'}</Button>
            )}
        </Grid>

                <Grid sx={{display:'flex' ,flexDirection:'column'}}>
                    {addPhotoMode ? (
                       <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                            ) : (
                            <SimpleGrid cols={4}>
                                {profile.photos?.map((photo) => (
                                    <Box>
                                    <Image src={photo.url} key={photo.id} radius="sm" />
                                    {isCurrentUser && (
                                        <ButtonGroup sx={{width: 190}}>
                                            <Button sx={{width: 200}} color={'green'}
                                            name={ 'main' + photo.id} 
                                            disabled={photo.isMain}
                                            loading={target === 'main' + photo.id && loading} 
                                            onClick={(e: React.SyntheticEvent<HTMLButtonElement, Event>) => handleSetMainPhoto(photo, e) }
                                            >Main</Button>
                                            <Button 
                                            loading={target === photo.id && loading}
                                            onClick = {(e: React.SyntheticEvent<HTMLButtonElement, Event>) => handleDeletePhoto(photo, e)}
                                            disabled={photo.isMain}
                                            name ={photo.id}
                                            sx={{width: 200}}  color={'red'}><DeleteIcon /></Button>
                                        </ButtonGroup>
                                    )}
                                    </Box>

                                    
                                ))}
                            </SimpleGrid>

                            )}
                      </Grid>
                        





                </>
 
  
      
  );
})




