import { Avatar, Box, Grid, Paper, styled, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Activity} from "../../../app/models/activity";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

interface Props {
    activity: Activity
}
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    maxWidth: 860,
    color: theme.palette.text.primary,
  }));

export default observer(function ActivityDetailedInfo({activity}: Props) {
    return (

        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0 }}>
        <StyledPaper
          sx={{
            my: 1,
           
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <InfoOutlinedIcon />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{activity.description}</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <CalendarMonthOutlinedIcon />
            </Grid>
            <Grid item xs>
              <Typography noWrap> {activity.date}</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
           
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
             <RoomOutlinedIcon/>
            </Grid>
            <Grid item xs>
              <Typography>{activity.venue}, {activity.city}</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
    );
  }
)  