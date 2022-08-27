import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../../app/models/profile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider } from '@mantine/core';
interface Props{
    profile: Profile
}

export default observer( function ProfileCard({profile}: Props){
    return(
        <Card component={Link}  sx={{textDecoration:'none'}}to={`/profiles/${profile.username}`}>
            <CardActionArea >
            <CardMedia  component="img"  height='350' src={profile.image || '/assets/user.png'}/>
            <CardContent sx={{backgroundColor:'whitesmoke'}}>
               
                    <Typography  sx={{fontFamily:'Century Gothic ',fontWeight:'bold',textDecoration:'none'}} gutterBottom variant="h5" component="div">{profile.displayName}</Typography>
                    <Typography  component="div"variant="body2" color="text.secondary">
                    Bios goes here
                    </Typography>
                    <Divider size="sm" />
                    <CardActionArea sx={{display:'flex',marginTop:2}}>
                        <AccountCircleIcon color="disabled" fontSize='large' />
                        <Typography sx={{fontFamily:'Century Gothic',color:'grey'}}>20 followers</Typography>
                    </CardActionArea>
                        
                        
               
                
                
            </CardContent>
            </CardActionArea>

        </Card>
    )
})