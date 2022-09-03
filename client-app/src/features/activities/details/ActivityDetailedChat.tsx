
import { Button, Loader } from '@mantine/core';
import { Box, Typography , ListItem, ListItemAvatar, Divider, List,ListItemText, TextareaAutosize,Avatar} from '@mui/material';
import { Formik, Form, Field, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import MyTextArea from '../form/MyTextArea';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import {  Comment, Tooltip } from 'antd';
import moment from 'moment';

import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns';


interface Props {
    activityId: string;
}



export default observer(function ActivityDetailedChat({activityId}: Props) {
    const {commentStore} = useStore();

    useEffect(() => {
        if(activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
        }
    },[commentStore, activityId]);

   
      
    
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
 
            backgroundColor: 'white'}}>
          <Formik onSubmit={(values, { resetForm}) => 
            commentStore.addComment(values).then(() => resetForm())}
                        initialValues={{body: ''}}
                        validationSchema={Yup.object({
                            body: Yup.string().required()
                        })}    
                    >
                        {({ isSubmitting, isValid, handleSubmit}) => (
                        <Form className='mb-3 '>
           
                            <Field name ='body'>
                                {(props: FieldProps) => (
                                    <div style={{position: 'relative'}}>
                                      
                                        <textarea
                                        style={{width:800,height:200}}
                                            placeholder='Enter yout comment'
                                            rows={2}
                                            {...props.field}
                                            onKeyPress={e => {
                                                if(e.key === 'Enter' && e.shiftKey) {
                                                    return;
                                                }
                                                if(e.key === 'Enter' && !e.shiftKey){
                                                    e.preventDefault();
                                                    isValid && handleSubmit();
                                                }
                                            }}
                                        />
                                    </div>
                                )}
                            </Field>
                            </Form>
                        )}
                    </Formik>       
               
      
        
        <List sx={{ width: '100%', maxWidth: 830, bgcolor: 'background.paper' }}>
        {commentStore.comments.map(comment => (
            <>
             
            <ListItem key={comment.id} alignItems="flex-start">
            
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={comment.image || '/assets/user.png'} />
                </ListItemAvatar>
                <ListItemText
                

                    // primary={comment.displayName}
                    primary={<React.Fragment>
                        <Typography

                            component={Link} to={`/profiles/${comment.username}`}

                            sx={{ display: 'inline',fontFamily:'Century Gothic',fontWeight:'bold',fontSize:16,textDecoration:'none' }}

                            variant="body2"
                            color="text.primary"
                            
                        >
                            {comment.displayName}
                 
                        </Typography>
                        
                      
                        <Typography
                        component="div"


                            sx={{ display: 'inline',justifyContent:'space-between',marginLeft:0.5,fontFamily:'Century Gothic',fontSize:'10',color:'#adadad' }}

                            variant="body2"
                            color="text.primary"
                            >
                            {formatDistanceToNow(comment.createdAt)}
                            </Typography>
                        
                        <div>
                        <Typography
                        component="div"


                            sx={{ display: 'inline' }}

                            variant="body2"
                            color="text.primary"
                            >
                            {comment.body}
                            </Typography>
                            </div>
                        
                           

                       

                    </React.Fragment>} />
                  
                   
              
            </ListItem></>
           
       
           
                    ))}
       
                 
                    </List>   </Box>
             </>
      
                  
    )});
