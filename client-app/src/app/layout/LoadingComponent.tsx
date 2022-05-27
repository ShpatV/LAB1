import React from 'react';
import {LinearProgress} from '@mui/material';

interface Props{
    inverted?: boolean;
    content: string;
}

export default function LoadingComponent(){
 

    return(
        <div>
       
          <LinearProgress/>
       
        </div>

      
        
    )
}