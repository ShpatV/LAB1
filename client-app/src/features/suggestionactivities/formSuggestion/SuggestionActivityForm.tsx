import React, { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import {v4 as uuid} from 'uuid';
import { Formik, Form } from 'formik';
import { Paper, Typography } from '@mui/material';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from './SuggestionMyTextArea';

import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from './SuggestionMyDateInput';
import { SuggestionActivityFormValues } from '../../../app/models/suggestionactivity';
import createImg from '../../../assets/img/create.svg';
import MySelectInput from '../../activities/form/MySelectInput';
import SuggestionMySelectInput from './SuggestionMySelectInput';
import SuggestionMyDateInput from './SuggestionMyDateInput';

export default observer( function SuggestionActivityForm(){
  const history = useHistory();
  const {suggestionActivityStore}= useStore();
  const {createSuggestionActivity,loadSuggestionActivity,loadingInitial}=suggestionActivityStore;
  const {id} = useParams<{id: string}>();

  const [suggestionActivity,setSuggestionActivity] = useState<SuggestionActivityFormValues>(new SuggestionActivityFormValues());

  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required(),
    date: Yup.string().required('Date is required').nullable(),
    venue: Yup.string().required(),
    city: Yup.string().required(),

  });




  useEffect(() =>{
    if(id) loadSuggestionActivity(id).then(suggestionActivity => setSuggestionActivity(new SuggestionActivityFormValues(suggestionActivity)))
  }, [id, loadSuggestionActivity]);

  function handleFormSubmit(suggestionActivity: SuggestionActivityFormValues){
    if (!suggestionActivity.id) {
      let newSuggestionActivity = {
        ...suggestionActivity,
        id: uuid()
      };
      createSuggestionActivity(newSuggestionActivity).then(() => history.push(`/suggestionactivities/${newSuggestionActivity.id}`))
    }
    
  }


  if(loadingInitial) return <LoadingComponent content='Loading activity...' />
  

    return(
    
      <><Box sx={{ padding: 1.4, weight:200,height: 600, maxWidth: '100%',float:'right'}}>
        <Typography sx={{ color: 'teal' }}><img src={createImg} style={{ width: 400, height: 500 }} /></Typography>
      </Box><Paper sx={{ padding: 1.4, height: 800,width:700 }}>


          <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={suggestionActivity}
            onSubmit={values => handleFormSubmit(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (


              <Form className='className="mb-3' onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='title' placeholder='Title' />
                <MyTextArea rows={3} placeholder='Description' name='description' />
                <SuggestionMySelectInput placeholder='Category' name='category' />
                <MyTextArea rows={3} placeholder='message' name='Message' />
             
                <SuggestionMyDateInput
                  placeholderText='Date'
                  name='date'
                  showTimeSelect
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa' />
                <Typography sx={{ color: 'teal' }}>Location Details</Typography>
               
                <MyTextInput placeholder='City' name='city' />
                <MyTextInput placeholder='Venue' name='venue' />
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
                  sx={{ float: 'right', margin: 1 }} type='submit' variant="contained" color="success">Submit</Button>
                <Button sx={{ float: 'right', margin: 1, color: 'grey' }} component={Link} to='/suggestionactivities' variant="contained" type='button'>Cancel</Button>

              </Form>

            )}

          </Formik>
        </Paper></>
             
   
         
      
    )
})

