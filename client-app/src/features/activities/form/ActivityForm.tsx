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
}


export default function ActivityForm({activity: selectedActivity, closeForm,createOrEdit}: Props){

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

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name,value} = event.target;
    setActivity({...activity,[name]:value})//name vendoset ku o value

  }
    return(
     
        <Box onSubmit={handleSubmit}  component="form"sx={{'& .MuiTextField-root': { m: 2, width: '36ch' },}}
        noValidate
        autoComplete="off">
        <div>
          <TextField 
            required
            id="outlined-required"
            label="title"
            name="title"
            value={activity.title}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <TextField 
            required
            id="outlined-required"
            label="description"
            name="description"
            defaultValue=""
            value={activity.description}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <TextField 
            required
            id="outlined-required"
            label="category"
            name="dategory"
            defaultValue=""
            value={activity.category}
         
          />
          </div>
          <div>
          <TextField 
            required
            id="outlined-required"
            label="date"
            name="date"
            defaultValue=""
            value={activity.date}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <TextField 
            required
            id="outlined-required"
            label="city"
            name="city"
            defaultValue=""
            value={activity.city}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <TextField 
            required
            id="outlined-required"
            label="venue"
            name="venue"
            defaultValue=""
            value={activity.venue}
            onChange={handleInputChange}
          />
          </div>
          <Button  size="small" color="success">Submit</Button>
          <Button onClick={closeForm} size="small" color="error">Cancel</Button>
          
          
          </Box>
      
    )
}

