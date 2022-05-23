import { Label, LabelImportant, Segment } from '@mui/icons-material';
import React from 'react';
import {Activity} from '../../../app/models/activity';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({activities,selectActivity}:Props) {
    const theme = useTheme();
    return(
        
             <Card sx={{ display: 'flex-column' }}>
                 {activities.map(activity=> (
                 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Card key={activity.id}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                            {activity.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component ="div">
                            {activity.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => selectActivity(activity.id)} size="small">View</Button>
                            <Button size="small">{activity.category}</Button>
                            
                        </CardActions>
                    </Card>
                  </Box>
                
                ))}
            </Card>
              
 
            
       

    )
}