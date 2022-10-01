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
import MyTextArea from './EmailMyTextArea';

import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from './EmailMyDateInput';
import { EmailActivityFormValues } from '../../../app/models/emailactivity';
import createImg from '../../../assets/img/create.svg';

export default observer( function EmailActivityForm(){
  const history = useHistory();
  const {emailActivityStore}= useStore();
  const {createEmailActivity,loadEmailActivity,loadingInitial}=emailActivityStore;
  const {id} = useParams<{id: string}>();

  const [emailActivity,setEmailActivity] = useState<EmailActivityFormValues>(new EmailActivityFormValues());

  const validationSchema = Yup.object({
    username: Yup.string().required('The activity title is required'),
    adress: Yup.string().required('The activity description is required'),
    date: Yup.string().required('Date is required').nullable(),
    message: Yup.string().required(),
    city: Yup.string().required(),

  });




  useEffect(() =>{
    if(id) loadEmailActivity(id).then(activity => setEmailActivity(new EmailActivityFormValues(emailActivity)))
  }, [id, loadEmailActivity]);

  function handleFormSubmit(emailActivity: EmailActivityFormValues){
    if (!emailActivity.id) {
      let newEmailActivity = {
        ...emailActivity,
        id: uuid()
      };
      createEmailActivity(newEmailActivity).then(() => history.push(`/emailactivities/${newEmailActivity.id}`))
    }
    
  }


  if(loadingInitial) return <LoadingComponent content='Loading activity...' />
  

    return(
    
      <><Box sx={{ padding: 1.4, weight:200,height: 600, maxWidth: '100%',float:'right'}}>
        <Typography sx={{ color: 'teal' }}><img src={createImg} style={{ width: 400, height: 500 }} /></Typography>
      </Box><Paper sx={{ padding: 1.4, height: 600,width:700 }}>


          <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={emailActivity}
            onSubmit={values => handleFormSubmit(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (


              <Form className='className="mb-3' onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='username' placeholder='Username' />
                <MyTextInput placeholder='email' name='Email' />

                <MyTextArea rows={3} placeholder='message' name='Message' />
             
                <MyDateInput
                  placeholderText='Date'
                  name='date'
                  showTimeSelect
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa' />
                <Typography sx={{ color: 'teal' }}>Location Details</Typography>
                <MyTextInput placeholder='adress' name='Adress' />
              
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
                  sx={{ float: 'right', margin: 1 }} type='submit' variant="contained" color="success">Submit</Button>
                <Button sx={{ float: 'right', margin: 1, color: 'grey' }} component={Link} to='/emailactivities' variant="contained" type='button'>Cancel</Button>

              </Form>

            )}

          </Formik>
        </Paper></>
             
   
         
      
    )
})

