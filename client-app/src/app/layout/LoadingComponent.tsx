import React from 'react';
import {Backdrop, CircularProgress, LinearProgress} from '@mui/material';

interface Props{
    inverted?: boolean;
    content: string;
}

export default function LoadingComponent( content: Props){
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
 
 

    return(
        <div>
       
          <LinearProgress  />
         
       
       
        </div>

      
        
    )
}