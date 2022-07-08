import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import {Link} from "react-router-dom"
import { BannerContainer, BannerContent, BannerImage, Footer } from '../styles';

export default function Banner(){
    return (
        <><BannerContainer>
            <Button component={Link} to='/activities' variant='outlined' size='large' sx={{position:'absolute',marginTop:65,marginRight:120}}>Take Me To The Activities!</Button>
         
             <BannerImage src="/assets/homePage/homePage.jpg"></BannerImage>
            
            
           
            </BannerContainer>
            <BannerContent sx={{marginBottom:50}}>
              <Typography sx={{color:'white',fontFamily:'Moon',fontSize:50,padding:10,marginLeft:22}}>Top Three Books 2022</Typography>
              <Grid container spacing={7}>
                <Grid item md={4}>
                <Card sx={{ maxWidth: 345,flexDirection:'row' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="440"
                        image="/assets/categoryImages/topOne.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Candy House
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>                   
                    </CardActionArea>
                    <CardActions>
                    <Button sx={{alignItems:'center',justifyContent:'center',marginLeft:13,borderRadius:20}} variant="outlined" size="large" color="primary">
                            Read More
                            </Button>
                    </CardActions>
                    </Card>
                  
                </Grid>
                <Grid item md={4}>
                <Card sx={{ maxWidth: 345,flexDirection:'row' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="440"
                        image="/assets/categoryImages/topOne.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Candy House
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button sx={{alignItems:'center',justifyContent:'center',marginLeft:13,borderRadius:20}} variant="outlined" size="large" color="primary">
                            Read More
                            </Button>
                    </CardActions>
                    </Card>
                   
                </Grid>
                <Grid item md={4}>
                <Card sx={{ maxWidth: 345,flexDirection:'row' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="440"
                        image="/assets/categoryImages/topOne.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Candy House
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                       
                    </CardActionArea>
                    <CardActions>
                    <Button sx={{alignItems:'center',justifyContent:'center',marginLeft:13,borderRadius:20}} variant="outlined" size="large" color="primary">
                            Read More
                            </Button>
                    </CardActions>
                    </Card>
                   
                </Grid>
               
                </Grid>
            
                    
             
            </BannerContent>
            <Footer>  <Typography align="center" sx={{alignItems:'center',fontSize:30,fontFamily:'Moon',padding:2}}>Contact Us</Typography>
            <Grid container spacing={7} sx={{marginTop:10}}>
              
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
           
             </Grid>
             <Grid container spacing={7}>
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
             <Typography sx={{marginTop:2,marginLeft:50}}>
                shpati
             </Typography>
             </Grid>
            </Footer>
            
           
            </>
    )
}