import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, StepLabel, TextField, Typography } from '@mui/material';
import { Field, Form, useField } from 'formik';
import { Label, Text } from 'gestalt';
import React from 'react';
// import './input.css';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function MyTextInput(props: Props){
    const [field, meta] = useField(props.name);
    return (
   
        <FormControl sx={{padding:2,marginDense:15,fontFamily:'Century Gothic',borderRadius:50,color:'red'}} error={meta.touched && !!meta.error}>
            
            <label >{props.label}</label>
            <Input {...field } {...props} />
            {meta.touched && meta.error ? (
                <label >{meta.error}</label>
             ): null}
             </FormControl>

    )

}