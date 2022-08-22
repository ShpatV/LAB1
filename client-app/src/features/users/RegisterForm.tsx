import { ErrorSharp } from '@mui/icons-material';
import { Alert, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ErrorMessage, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';
import * as Yup from 'yup';
import ValidationErrors from '../errors/ValidationErrors';

export default observer( function RegisterForm(){
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{dismplayName:'',username:'',email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => 
                setErrors({error}))}
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}    
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Box component="form" onSubmit={handleSubmit} autoComplete='off'>
                    <Typography variant='h2' sx={{textAlign:'center',color:'teal'}}>Sign up to Reactivities</Typography>
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextInput name='username' placeholder='Username' />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage 
                        name='error' render={()=> 
                          
                        <ValidationErrors errors={errors.error} />}
                        // <Alert severity='error'>{errors.error}</Alert>}
                    
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting } type='submit'>Login</Button>
                    

                </Box>

             
                
            )}

        </Formik>
    )
})