import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { createTheme,ThemeProvider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react'
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
// import ModalContainer from '../common/modals/ModalContainer';
import ProfilePage from '../../features/profiles/ProfilePage';
import ModalContainer from '../common/modals/ModalContainer';
import BannerHome from '../../features/home/BannerHome';
import EmailActivityDashboard from '../../features/emailactivities/dashboard/EmailActivityDashboard';
import axios from 'axios';
import EmailActivityForm from '../../features/emailactivities/formEmail/EmailActivityForm';
import SuggestionActivityDashboard from '../../features/suggestionactivities/dashboard/SuggestionActivityDashboard';
import SuggestionActivityDetails from '../../features/suggestionactivities/details/SuggestionActivityDetails';
import SuggestionActivityForm from '../../features/suggestionactivities/formSuggestion/SuggestionActivityForm';
import RegisterForm from '../../features/users/RegisterForm';



function App() {
  const location = useLocation();
  const {commonStore,userStore} = useStore();





  useEffect(() => {
    if (commonStore.token){
      userStore.getUser().finally(()=>commonStore.setAppLoaded());

    }else {
      commonStore.setAppLoaded();
    }
  }, [commonStore,userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
   
      <>
      
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
       <Route exact path='/' component={HomePage} />
       <Route 
       path={'/(.+)'}
       render={()=> (
         <>
          <NavBar  />
            <Container style={{marginTop: '7em'}}>
              <Switch>
              

              
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route  path='/emailactivities' component={EmailActivityDashboard} />
                <Route  path='/suggestionactivities' component={SuggestionActivityDashboard} />
                  <Route path='/activities/:id' component={ActivityDetails} />
                  <Route path='/suggestionactivities/:id' component={SuggestionActivityDetails} />
                  {/* <BookDashboard books={books}/>
               */}

                  <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                  <Route key={location.key} path={['/createEmailActivity']} component={EmailActivityForm} />
                  <Route key={location.key} path={['/createSuggestionActivity', '/managesuggestion/:id']} component={SuggestionActivityForm} />
                  <Route path= '/profiles/:username' component={ProfilePage} />
                  <Route path= '/errors' component={TestErrors} />
                  <Route path= '/server-error' component={ServerError} />
                  <Route path= '/login' component={LoginForm} />
                  <Route path= '/register' component={RegisterForm} />
                  <Route component={NotFound} />
             </Switch>   
             </Container>
             
         
         </>
   
        )}
       /> 
       
      </>
  
  );
}

export default observer (App);
