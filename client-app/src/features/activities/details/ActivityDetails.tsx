import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity,loadActivity,loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() =>{
        if(id) loadActivity(id);
    }, [id,loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

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
                    <Button component={Link} to={`/manage/${activity.id}`} size="small">Edit</Button>
                    <Button component={Link} to='/activities' size="small" color="error">Cancel</Button>
                </CardActions>
               
                
         </Card>

    );
})