import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Field, useField } from 'formik';
import { TextArea } from 'gestalt';
import React from 'react';
import { Form } from 'react-bootstrap';
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
        
        
           
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            
            <label >{props.label}</label>
            <Form.Control as="textarea"  {...field} {...props} />
            {meta.touched && meta.error ? (
                <label  >{meta.error}</label>
             ): null}
             </Form.Group>

    )

}