import React from 'react';
import {LinearProgress} from '@mui/material';

interface Props{
    inverted?: boolean;
    content: string;
}

export default function LoadingComponent(content: Props){
 

    return(
        <div>
       
          <LinearProgress/>
       
        </div>

      
        
    )
}