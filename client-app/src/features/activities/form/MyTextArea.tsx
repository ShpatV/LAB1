import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Field, Form, useField } from 'formik';
import { TextArea } from 'gestalt';
import React from 'react';
// import './input.css';

interface Props {
    placeholder: string;
    name: string;
    rows:number;
    label?: string;
}

export default function MyTextArea(props: Props){
    const [field, meta] = useField(props.name);
    return (
        
        
           
            <FormControl sx={{padding:2,marginDense:15,fontFamily:'Century Gothic',borderRadius:50,color:'red'}} error={meta.touched && !!meta.error}>
            
            <label >{props.label}</label>
            <TextareaAutosize maxRows={5} {...field} {...props} />
            {meta.touched && meta.error ? (
                <label  >{meta.error}</label>
             ): null}
             </FormControl>

    )

}