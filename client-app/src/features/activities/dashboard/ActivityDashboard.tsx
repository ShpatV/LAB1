import { GridOffOutlined } from '@mui/icons-material';
import { Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activities: Activity[];
}

export default function ActivityDashboard({activities} : Props){//child i app component
    return (
        <Grid>
            <Grid container width={10} direction="column">
              <List>
                    {activities.map(activity => (
                     <ListItem key={activity.id}>
                          {activity.title}
                        </ListItem>
                    ))}
                </List>
            </Grid>

        </Grid>
    )
}