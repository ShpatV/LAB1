import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          
          marginTop:2,
          flexGrow: 1,
          backgroundColor:'#f5f5f5'
        }}
      >
            <SearchIcon fontSize='large' sx={{width:500,height:200}}></SearchIcon>
            <Typography sx={{textAlign:'center',fontFamily:"Century Gothic",margin:2}}>Oops - we've looked everywhere and could not find this.</Typography>
            <Button variant='contained' size="small" sx={{justifyContent:"center",alignItems:'center',display:'flex',marginBottom:2}} component={Link} to='/activities'>Return to activities page</Button>


        </Paper>

    

    )
}