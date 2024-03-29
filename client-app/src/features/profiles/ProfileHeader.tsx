import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Avatar, CardActionArea, Grid } from '@mui/material';
import { Divider, Statistic } from 'antd';
import { Button } from '@mantine/core';
import Item from 'antd/lib/descriptions/Item';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import FollowButton from './FollowButton';


interface Props {
    profile: Profile;
}

export default observer ( function ProfileHeader({profile}: Props) {

    const theme = useTheme();
    return(
        <Card sx={{ display: 'flex' ,background: 'linear-gradient(to right bottom, #E5ECEE, #527996)'}}>
            <Avatar  src={profile.image || '/assets/user.png' } sx={{ margin:3,padding:1,width: 96, height: 96 }} sizes='large'></Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            
          <Typography sx={{marginTop:5,fontWeight:'bold',fontFamily:'Century gothic',color:'white'}} component="div" variant="h5" >
            {profile.displayName}
          </Typography>
          
        </CardContent>
        
        
        
      </Box>
      {/* <CardActionArea  sx={{display:'flex',justifyContent:'right',alignItems:'right',float:'right'}}>
      <Statistic style={{fontSize:20}} title="Followers" value={5} />
      <Statistic style={{fontSize:20}} title="Following" value={42} />
      <Divider />
      </CardActionArea> */}
   
      {/* <Button color={true ? 'red' : 'green'} >{true ? 'Unfollow' : 'Follow' }</Button> */}
      <Box  sx={{display:'flex',justifyContent:'right',alignItems:'right',marginLeft:60,backgroundColor:"#E5ECEE",width:600}}>
      
        <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 2 }} sx={{padding:2}}>
        <Grid  item xs={5}>
        <Item><Statistic style={{fontFamily:'Century Gothic',fontWeight:'bold',marginRight:70,marginLeft:40,fontSize:50,color:'orange'}}  value={profile.followersCount} title={<Typography sx={{fontSize:16,fontFamily:'Century Gothic',color:'orange'}}>Followers</Typography>} />
        
        </Item>
        </Grid>
        <Grid item xs={2} >
        <Item><Statistic style={{fontSize:50,color:'orange',fontFamily:'Century Gothic',fontWeight:'bold'}} title={<Typography sx={{fontSize:16,fontFamily:'Century Gothic',color:'orange'}}>Following</Typography>}  value={profile.followingCount} /></Item>
        </Grid>
        <Divider />
        <FollowButton profile={profile} />

       

        
        
        </Grid>
        </Box>

      
    </Card>
    
        
    )
})