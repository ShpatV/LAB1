
import { Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string)=>void;//kjo duhet te jet e selektuar
    closeForm: () => void;
    createOrEdit: (activity:Activity)=>void;
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
export default function ActivityDashboard({activities,selectedActivity,
         selectActivity,cancelSelectActivity,editMode,openForm,closeForm,createOrEdit} : Props){//child i app component
    return (
     
            <Grid container spacing={{xs:10,md:15}} >
                
           
                <Grid item xs={1} sm={4} md={6} >
                    <Item><ActivityList activities={activities} selectActivity={selectActivity}/></Item>
                </Grid>
                <Grid item xs={1} sm={4} md={6} >
                    {selectedActivity && !editMode &&
                   <ActivityDetails activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                    />}
                    {editMode &&
                   <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
                </Grid>
              
                
                                
                
             
            </Grid>
 

        
    )
}