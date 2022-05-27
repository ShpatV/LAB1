import { FormGroup, FormLabel, TextareaAutosize } from '@mui/material';
import React, { ChangeEvent,useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer( function ActivityForm(){
  const {activityStore}= useStore();
  const {selectedActivity,closeForm,createActivity,updateActivity,loading}=activityStore;

  const initialState = selectedActivity ?? { //nese esht null skthen,selected activity qe merret nga props
    id:'',
    title:'',
    category:'',
    description:'',
    date:'',
    city:'',
    venue:''
  }
  const [activity,setActivity] = useState(initialState);

  function handleSubmit(){
    activity.id ? updateActivity(activity) : createActivity(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name,value} = event.target;
    setActivity({...activity, [name]: value})//name vendoset ku o value

  }
    return(
      // <form onSubmit={handleSubmit} autoComplete='off'>
      
         <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '36ch' },}}  onSubmit={handleSubmit} autoComplete="off"  justify-content='flex-end' align-items='flex-end'> 
                <TextField  required name='title' value={activity.title} label='title'  onChange={handleInputChange}/>
                <TextField  required name='description' value={activity.description} label='description'  onChange={handleInputChange}/>
                <TextField  required  name='category' value={activity.category} label='category'  onChange={handleInputChange}/>
                <TextField  required type='date' name='date' value={activity.date} label='date'  onChange={handleInputChange}/>
                <TextField  required name='city' value={activity.city} label='city'  onChange={handleInputChange}/>
                <TextField  required name='venue' value={activity.venue} label='venue'  onChange={handleInputChange}/>
                <div>
                <Button   type='submit' variant="contained" color="success">Submit</Button>
                <Button type='button' onClick={closeForm} >Cancel</Button>
                </div>
          </Box> 
         
      
    )
})

