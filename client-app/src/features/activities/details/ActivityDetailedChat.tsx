import { Box, Typography ,Avatar, ListItem, List, ListItemAvatar, Divider, ListItemText, TextareaAutosize, Button} from '@mui/material';
import { observer } from 'mobx-react-lite'
import React from 'react'

export default observer(function ActivityDetailedChat() {
    return (
        <><Box sx={{
            width: 863,
            borderRadius:2,
            height: 60,
            backgroundColor: 'primary.dark',
            marginTop:2
        }}><Typography variant="h1" align="center" sx={{fontFamily:'Century Gothic',fontSize:20,padding:2,color:'white'}}>Chat About This Event!</Typography></Box>
        <Box sx={{width: 863,
            borderRadius:2,
            height: 530,
            backgroundColor: 'white'}}>
        <List sx={{ width: '100%', maxWidth: 830, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={<React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={<React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={<React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>} />
                </ListItem>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={13}
                placeholder=""
                color="grey"
                
                style={{ width: 813 ,marginLeft:20,borderRadius:10,margin:20}}
              

                />
                <Button variant="contained" size="large" sx={{float:'right'}}>Add Reply</Button>
            </List></Box></>
          );
        }
        
         
    );
