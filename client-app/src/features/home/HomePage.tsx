import { Box, Typography } from '@mui/material';

import { observer } from 'mobx-react-lite';
import React from 'react';
import {Link} from "react-router-dom"
import { ErrorMessage, Formik } from 'formik';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerHome from './BannerHome';
import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import NavBar from '../../app/layout/NavBar';

import MyTextInput from '../../app/common/form/MyTextInput';


import { Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../../assets/img/user.svg'
import uiImg from '../../assets/img/login.svg';
import './Login.css';
import { Button } from '@mantine/core';
export default observer( function HomePage(){
    const {userStore, modalStore} = useStore();
    
    return (
    //    <>
    //    <NavBar />
    //    <Banner />
       
    //    </> 
    <>
            {/* //    <>
            //    <NavBar />
            //    <Banner />
            //    </>  */}
            {/* <Typography>Reactivities</Typography> */}
            {userStore.isLoggedIn ? (
                <>
                <NavBar />
                 <BannerHome />
                 <Skills />
                 <Projects />
                {/* <Typography>Welcome to Reactivities</Typography>
                <Button component={Link} to='/activities'>Go to Activities!</Button> */}
                </>
                

            ) : (
                <>
                


               
                <LoginForm />
             

                
                </>
               
            )}
            
           
            
            </>

           
        
    )
})


// //<Container className="mt-5" style={{height:500}}>
// <Row>
// <Col lg={4} md={2} sm={2} className="text-center mt-5 p-3">
//     <img className="icon-img" src={loginIcon} alt="icon"/>
//     <Formik
//         initialValues={{email: '', password: '', error: null}}
//         onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
//             setErrors({error:'Invalid email or password'}))}
//     >
//     {({handleSubmit, isSubmitting, errors}) => (
//     <Form onSubmit={handleSubmit} autoComplete='off'>
//         <Form.Group controlId="formBasicEmail">
//         <MyTextInput name='email' placeholder='Email' />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//         <MyTextInput name='password' placeholder='Password' type='password' />
//         </Form.Group>

//         <Button color="indigo" radius="xl" size="lg" loading={isSubmitting} type="submit">Login</Button>

//         <div className="text-left mt-3">
//             <a href="#"><small className="reset">Password Reset</small></a> 
//             {/* <a href="#"><small className="reset ml-2">Quick Recover</small></a> */}
//         </div>
//     </Form>
//     )}
// </Formik>
// </Col>
              
// <Col lg={8} md={6} sm={12}>
//     <img className="w-100" src={uiImg} alt=""/>
// </Col>

// </Row>
// </Container>