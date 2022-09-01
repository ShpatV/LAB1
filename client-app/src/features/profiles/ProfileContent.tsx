import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { styled } from '@mui/material';

type TabPanelProps = {
  children: React.ReactNode;
  index: number;
  value: number;
};
interface Props {
  profile: Profile;
}
const TabPanel = styled((props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
})<TabPanelProps>();

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default observer (function ProfileContent({profile} : Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ marginTop:7,borderRadius:2,flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300,weight:700 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Photos" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
  
      </Tabs>
      <Box sx={{width:800,height:300}}>
      <TabPanel  value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel sx={{width:1040,height:300}} value={value} index={1} >
       <ProfilePhotos profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      </Box>
    </Box>
  );
})