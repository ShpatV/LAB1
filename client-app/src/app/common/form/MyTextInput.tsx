import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, StepLabel, TextField, Typography } from '@mui/material';
import { Field, useField } from 'formik';
import { Label, Text } from 'gestalt';
import React from 'react';
import { Form } from 'react-bootstrap';
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
        //error={meta.touched && !!meta.error}
   
        <Form.Group className="mb-3" controlId="formBasicEmail" >
            
            <Form.Label >{props.label}</Form.Label>
            <Form.Control {...field } {...props} />
            {meta.touched && meta.error ? (
                <label >{meta.error}</label>
             ): null}
             </Form.Group>

    )

}