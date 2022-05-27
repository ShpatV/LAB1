import React from 'react';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import {
  BrowserRouter,
  Routes,
}from "react-router-dom";
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  return (
      <>
        <NavBar />
        <Container style={{marginTop: '7em'}}>
          <Routes>
              <Route path='/' element={ <HomePage/>} />
              <Route path='/activities' element={<ActivityDashboard/>} />
              <Route path='/activities/:id' element={<ActivityDetails/>} />
              <Route path={['/createActivity', '/manage/:id']} element={<ActivityForm/>} />
           </Routes>
        </Container>
      </>
  );
}

export default observer (App);
