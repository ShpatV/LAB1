import React from 'react';
import {Backdrop, LinearProgress} from '@mui/material';
import {CircularProgress} from '@mui/material';
interface Props{
    inverted?: boolean;
    content: string;
}

export default function LoadingComponent({inverted= true,content='Loading...'}: Props){
 

    return(
        <div>
       
          <LinearProgress/>
       
        </div>

      
        
    )
}