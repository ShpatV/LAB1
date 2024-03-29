import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
// import './features/home/App.css';
import App from './app/layout/App';
import '@mui/material';
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './app/stores/store';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
       <App />
    </Router>
    
  </StoreContext.Provider>
    
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
