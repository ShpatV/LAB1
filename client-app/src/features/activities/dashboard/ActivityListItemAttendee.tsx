import { Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, Popover, Popper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Profile } from '../../../app/models/profile';
import { Link } from "react-router-dom";
import ProfileCard from '../../profiles/ProfileCard';

interface Props{
    attendees: Profile[];
}

export default observer( function ActivityListItemAttendee({attendees}: Props) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
    return(
      
        <List sx={{display:'inline-flex',alignItems: "flex-start"}}>
            {attendees.map(attendee => (
              
                 <><ListItem aria-owns={open ? 'mouse-over-popover' : undefined}
                 aria-haspopup="true"
                 onMouseEnter={handlePopoverOpen}
                 onMouseLeave={handlePopoverClose} alignItems="flex-start" key={attendee.username} component={Link} to={`/profiles/${attendee.username}`}>
                    <ListItemAvatar>
                        <Avatar src={attendee.image || "/assets/user.png"} />
                    </ListItemAvatar>
                </ListItem>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus

                    key={attendee.username}
                    >



                      
                        <ProfileCard profile={attendee} />
                        

                    </Popover></>
               
            ))}
         </List>
       
        
    )

})