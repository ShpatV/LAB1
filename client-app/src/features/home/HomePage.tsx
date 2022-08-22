import { Box, Typography ,Button} from '@mui/material';
import { Container } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {Link} from "react-router-dom"
import NavBar from '../../app/layout/NavBar';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

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
            <Typography>Reactivities</Typography>
            {userStore.isLoggedIn ? (
                <>
                <Typography>Welcome to Reactivities</Typography>
                <Button component={Link} to='/activities'>Go to Activities!</Button>
                </>
                

            ) : (
                <>
                 <Button onClick={() => modalStore.openModal(<LoginForm />)}>Login!</Button>
                <Button onClick={() => modalStore.openModal(<RegisterForm />)}>Register!</Button>

                
                </>
               
            )}
            
           
            
            </>

           
        
    )
})