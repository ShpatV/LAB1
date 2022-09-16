import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Field, useField } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import { Form } from 'react-bootstrap';
// import './input.css';



export default function MyDateInput(props: Partial<ReactDatePickerProps>){//partial esht opsionale pjest ndatapicker
    const [field, meta,helpers] = useField(props.name!);
    return (
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
                
              <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value=> helpers.setValue(value)}
            
            
            />
           
            {meta.touched && meta.error ? (
                <label  >{meta.error}</label>
             ): null}
             
             </Form.Group>

    )

}