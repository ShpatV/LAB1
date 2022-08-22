import { ErrorSharp } from '@mui/icons-material';
import { Alert, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ErrorMessage, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';


export default observer( function LoginForm(){
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
                setErrors({error:'Invalid email or password'}))}
        >
            {({handleSubmit, isSubmitting, errors}) => (
                <Box component="form" onSubmit={handleSubmit} autoComplete='off'>
                    <Typography variant='h2' sx={{textAlign:'center',color:'teal'}}>Login to Reactivities</Typography>
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage
                        name='error' render={()=> 
                        <Alert severity='error'>{errors.error}</Alert>}
                    
                    />
                    <Button type='submit'>Login</Button>
                    

                </Box>

             
                
            )}

        </Formik>
    )
})