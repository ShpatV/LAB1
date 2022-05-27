import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';


export default function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity,openForm,cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent />;

    return(
        <Card sx={{ maxWidth: 345  }}>

        
            <CardMedia component="img" height="140" image={`/assets/categoryImages/${activity.category}.jpg`} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {activity.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {activity.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {activity.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=> openForm(activity.id)} size="small">Edit</Button>
                    <Button onClick={cancelSelectedActivity} size="small" color="error">Cancel</Button>
                </CardActions>
               
                
         </Card>

    );
}