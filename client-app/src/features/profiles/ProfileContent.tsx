import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { styled } from '@mui/material';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';

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



export default observer (function ProfileContent({profile} : Props) {
  const [value, setValue] = React.useState(0);
  const {profileStore} = useStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ marginTop:7,borderRadius:2,flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400,weight:700 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        //(e, data) => profileStore.setActiveTab(data.activeIndex)
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      
      >
        <Tab label="About"  />
        <Tab label="Photos"  />
        <Tab label="Events" />
        <Tab label="Followers" />
        <Tab label="Following"  />
  
      </Tabs>
      <Box sx={{width:800,height:300}}>
      <TabPanel  value={value} index={0}>
        <ProfileAbout />
      </TabPanel>
      <TabPanel sx={{width:1040,height:300}} value={value} index={1} >
       <ProfilePhotos profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProfileFollowings />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ProfileFollowings />
      </TabPanel>
      </Box>
    </Box>
  );
})



// import * as React from 'react';


// import ProfilePhotos from './ProfilePhotos';
// import { Profile } from '../../app/models/profile';
// import { observer } from 'mobx-react-lite';

// import ProfileAbout from './ProfileAbout';
// import ProfileFollowings from './ProfileFollowings';
// import { useStore } from '../../app/stores/store';
// import { Box, Flex, Icon, SegmentedControl, Text } from "gestalt";
// import { Typography } from '@mui/material';




// export default observer (function ProfileContent({profile} : Props) {
//   const [itemIndex, setItemIndex] = React.useState(0);
//   const {profileStore} = useStore();

//   const items = [
//     'News',
//     'You',
//     'Messages',
//     <Icon
//       icon="pin"
//       accessibilityLabel="Pin"
//       color="default"
//     />,
//   ];

//   const content = [
//     <><ProfileAbout />
//     <ProfilePhotos profile={profile} />
//     <Typography>ssss</Typography>
//     <ProfileFollowings />
//     <ProfileFollowings />
    
//     </>
  
//   ];

//   return (
//     <Flex direction="column" >
//       <SegmentedControl
//         items={items}
//         selectedItemIndex={itemIndex}
//         onChange={(e: any, data: { activeIndex: any; }) => profileStore.setActiveTab(data.activeIndex)}
//       />

//       <Box borderStyle="shadow" padding={6} rounding={2}>
//         <Text>{content[itemIndex]}</Text>
//       </Box>
//     </Flex>
//   );
// })
