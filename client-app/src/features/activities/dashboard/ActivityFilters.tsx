import { Check } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, styled, Typography ,Box} from '@mui/material';
import React from 'react';
// import Calendar from 'react-calendar';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useMantineTheme } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

 
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  

export default observer( function ActivityFilters(){
    const theme = useMantineTheme();
    const {activityStore: {predicate, setPredicate}} = useStore();
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
    return(
        
        <>
        <Box  sx={{marginTop:37,marginLeft:20,fontFamily:'Century Gothic',width:320}}>
        <Typography align="left"sx={{fontFamily:'Century Gothic',fontSize:18,marginLeft:2,padding:1,color:'white'}}><FilterAltOutlinedIcon />Control Your Fair!</Typography><Divider sx={{color:'white'}}/>
        
            <MenuList dense sx={{fontFamily:'Century Gothic',marginBottom:5,maginLeft:20}} >
                <MenuItem disableGutters={predicate.has('all')} sx={{borderRadius:0,fontFamily:'Century Gothic'}} onClick={()=>setPredicate('all','true')}>
                    <Typography  sx={{marginLeft:3,color:'white',fontFamily:'Century Gothic'}}> <ArrowRightCircle style={{marginRight:20}} size={25} />All Fairs</Typography>
                </MenuItem>
                <Divider />
                <MenuItem disableGutters={predicate.has('isGoing')} onClick={()=>setPredicate('isGoing','true')}>
                    <Typography sx={{marginLeft:1,color:'white',fontFamily:'Century Gothic'}}> <ArrowRightCircle style={{marginRight:20}} size={25} />Im Going To This Fair!</Typography>
                </MenuItem>
                <Divider />
                <MenuItem disableGutters={predicate.has('isHosting')} onClick={()=>setPredicate('isHost','true')}>
                    <Typography sx={{marginLeft:1,color:'white',fontFamily:'Century Gothic'}}> <ArrowRightCircle style={{marginRight:20}} size={25} />Im Hosting This Fair</Typography>
                </MenuItem>
            </MenuList>
           
            
            
        </Box>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{width:300,marginLeft:22}}>
         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color:'#527996',fontFamily:'Century Gothic'}}><CalendarMonthIcon />  Calendar</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Calendar sx={{color:'white',backgroundColor:'whitesmoke',borderRadius:6}}
         onChange={(date: Date) => setPredicate('startDate', date as Date)}
         value={predicate.get('startDate') || new Date()}
         
         />
      
        </AccordionDetails></Accordion></>
        
        

    )
})
