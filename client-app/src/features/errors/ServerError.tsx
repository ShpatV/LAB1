import { Box, Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from '../../app/stores/store'

export default observer( function ServerError() {
    const { commonStore } = useStore();
    return (
        <><Box><Typography sx={{fontSize:40}}>Server Error</Typography>
        <Typography sx={{color:'red',marginBottom:4}}>{commonStore.error?.message}</Typography>
        {commonStore.error?.details && 
        <Paper sx={{backgroundColor:'white',padding:2}}>
            <Typography sx={{color:'teal'}}>Stack trace</Typography>
            <code style={{marginTop:'10px',fontSize:15}}>{commonStore.error.details}</code>
        </Paper>
        
        }
        </Box>
        </>
    )
})