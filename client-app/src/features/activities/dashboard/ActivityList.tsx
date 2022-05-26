import { Label, LabelImportant, LabelImportantOutlined, Segment } from '@mui/icons-material';
import React, { SyntheticEvent, useState } from 'react';
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
import { LinearProgressProps } from '@mui/material';

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id:string)=>void;
    submitting:boolean;
}

export default function ActivityList({activities,selectActivity,deleteActivity,submitting}:Props) {
    const [target,setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    const theme = useTheme();
    return(
        
             <Card sx={{ display: 'flex-column' }}>
                 {activities.map(activity=> (
                  
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
                            <Button  onClick={() => selectActivity(activity.id)} size="small">View</Button>
                            <Button name={activity.id} onClick={(e) => handleActivityDelete(e,activity.id)} size="small">Delete</Button>
                            
                            <Typography>{activity.category}</Typography>
                            
                        </CardActions>
                        </CardContent>
                    </Card>
                  </Box>
                
                ))}
            </Card>
              
 
            
       

    )
}