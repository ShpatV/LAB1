import React, { SyntheticEvent, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


export default observer (function ActivityList() {
    const {activityStore}= useStore();
    const {deleteActivity,activitiesByDate,loading}= activityStore;
    const [target,setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }


    const theme = useTheme();
    return(
             <Card sx={{ display: 'flex-column' }}>
                 {activitiesByDate.map(activity=> (
                  
                 <Box key={activity.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Card>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                            {activity.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component ="div">
                            {activity.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {activity.description}
                                </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {activity.city},{activity.venue}
                            </Typography>
                       
                        <CardActions>
                            <Button component={Link} to={`/activities/${activity.id}`} size="small">View</Button>
                            <Button name={activity.id} onClick={(e) => handleActivityDelete(e,activity.id)} size="small">Delete</Button>
                            
                            <Typography>{activity.category}</Typography>
                            
                        </CardActions>
                        </CardContent>
                    </Card>
                  </Box>
                
                ))}
            </Card>
              
 
            
       

    )
})