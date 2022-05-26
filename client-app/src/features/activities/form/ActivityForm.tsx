import { FormGroup, FormLabel, TextareaAutosize } from '@mui/material';
import React, { ChangeEvent,useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Activity } from '../../../app/models/activity';


interface Props{
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}


export default function ActivityForm({activity: selectedActivity, closeForm,createOrEdit,submitting}: Props){

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
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name,value} = event.target;
    setActivity({...activity, [name]: value})//name vendoset ku o value

  }
    return(
      // <form onSubmit={handleSubmit} autoComplete='off'>
      
         <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '36ch' },}}  onSubmit={handleSubmit} autoComplete="off"> 
                <TextField name='title' value={activity.title}  onChange={handleInputChange}/>
                <TextField  name='description' value={activity.description}  onChange={handleInputChange}/>
                <TextField  name='category' value={activity.category} onChange={handleInputChange}/>
                <TextField type='date' name='date' value={activity.date} onChange={handleInputChange}/>
                <TextField  name='city' value={activity.city}  onChange={handleInputChange}/>
                <TextField  name='venue' value={activity.venue}  onChange={handleInputChange}/>
                <Button  type='submit' variant="contained" color="inherit">Submit</Button>
                <Button type='button' onClick={closeForm} >Cancel</Button>
          </Box> 
         
      
    )
}

