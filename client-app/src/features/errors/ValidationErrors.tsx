import { AlertProps, AlertTitle, Typography } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface Props {
    errors: string[] | null;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
 

export default function ValidationErrors({errors}: Props ){
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
     
          <>
          {errors && (
            <Alert severity="warning" sx={{marginTop:2}}>
              {errors.map((err:any,i) => (
                <Typography sx={{fontFamily:'Century Gothic',fontSize:15,padding:0.5}}  key={i}>{err}</Typography>
              ))}

            </Alert>
           )}

           </>

       
    )
}