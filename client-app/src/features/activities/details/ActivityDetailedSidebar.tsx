import React from 'react'

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Box, Typography,List, Divider, Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export default observer(function ActivityDetailedSidebar () {
    return (
        <><Box sx={{
            marginLeft:2,
            width: 463,
   
            height: 60,
            backgroundColor: 'primary.dark',
            marginTop:2
        }}><Typography variant="h1" align="center" sx={{fontFamily:'Century Gothic',fontSize:20,padding:2,color:'white'}}>3 People Going</Typography></Box>
        <Box sx={{width: 463,
         marginLeft:2,
            borderRadius:2,
            height: 230,
            backgroundColor: 'white'}}>
        <List sx={{ width: '100%', maxWidth: 463, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square"  sx={{ width: 56, height: 56 }}/>
                    </ListItemAvatar>
                    <ListItemText sx={{marginLeft:2}}
                        primary="MOTY"
                        secondary={<React.Fragment>
                          
                            {"Following"}
                        </React.Fragment>} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"variant="square"  sx={{ width: 56, height: 56 }}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="TOM"
                        sx={{marginLeft:2}}
                        secondary={<React.Fragment>
                        
                            {"Following"}
                        </React.Fragment>} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"variant="square"  sx={{ width: 56, height: 56 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="BOB"
                        sx={{marginLeft:2}}
                        secondary={<React.Fragment>
                          
                            {'Following'}
                        </React.Fragment>} />
                </ListItem>
             
            </List></Box></>
          );
        }
        
         
    );
           



