import React, { ChangeEvent,useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';

import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import {v4 as uuid} from 'uuid';
import { Formik, Form, ErrorMessage, Field,  } from 'formik';
import { Alert, FormControl, FormControlLabel, FormLabel, Paper, styled, TextField, Typography } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from './MyTextArea';
import MySelectInput from './MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from './MyDateInput';
import { ActivityFormValues } from '../../../app/models/activity';


export default observer( function ActivityForm(){
  const history = useHistory();
  const {activityStore}= useStore();
  const {createActivity,updateActivity,loadActivity,loadingInitial}=activityStore;
  const {id} = useParams<{id: string}>();

  const [activity,setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required(),
    date: Yup.string().required('Date is required').nullable(),
    venue: Yup.string().required(),
    city: Yup.string().required(),

  });




  useEffect(() =>{
    if(id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
  }, [id, loadActivity]);

  function handleFormSubmit(activity: ActivityFormValues){
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
    }else {
      updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
    }
  }


  if(loadingInitial) return <LoadingComponent content='Loading activity...' />
  

    return(
      // <form onSubmit={handleSubmit} autoComplete='off'>
      
          <Paper sx={{padding:1.4,height:600,maxWidth:'100%'}}>
            <Typography sx={{color:'teal'}}>Activity Details</Typography>
            <Formik 
            validationSchema={validationSchema}
            enableReinitialize
             initialValues={activity}
              onSubmit={values => handleFormSubmit(values)}>
              {({handleSubmit, isValid, isSubmitting ,dirty}) => (
               
                 <Box component="form"  sx={{margin:2,flexDirection:'column',display:'flex',maxWidth:'100%',height:400,color:'blue'}}  onSubmit={handleSubmit} autoComplete="off" > 
                  <MyTextInput  name='title' placeholder='Title' />
                   
                   <MyTextArea rows={3} placeholder='Description' name='description' />
                   <MySelectInput  />
                   <MyDateInput 
                    placeholderText='Date'
                    name='date'
                    showTimeSelect
                    timeCaption='time'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    />
                   <Typography sx={{color:'teal'}}>Location Details</Typography>
                   <MyTextInput placeholder='City' name='city' />
                   <MyTextInput placeholder='Venue' name='venue' />
              <Button 
              disabled={isSubmitting || !dirty || !isValid}
              sx={{float:'right',margin:1}} type='submit' variant="contained" color="success">Submit</Button>
              <Button sx={{float:'right',margin:1,color:'grey'}}  component={Link} to='/activities'  variant="contained" type='button'>Cancel</Button>
          
            </Box> 

              )}

            </Formik>
            </Paper>
             
   
         
      
    )
})

