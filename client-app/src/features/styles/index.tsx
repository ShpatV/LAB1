import { styled } from "@mui/material/styles";
import {Box, Typography} from '@mui/material';


export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '200%',
    padding: '0px 0px',
    background: 'blue'
}));

export const BannerImage = styled('img')(({src ,theme})=> ({
    src: `url(${src})`,
    width:'1902px'

}));

export const BannerContent = styled(Box)(() => ({
    display:'grid',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '600px',
    padding: '0px 0px',
 
}));
 
export const Footer = styled(Box)(() => ({

    
    fontFamily:'Moon',
    fontSize:20,
    color:'grey',
    width: '100%',
    height: '400px',
    background: 'white'
}));
    
   