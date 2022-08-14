import { Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Field, Form, useField } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
// import './input.css';



export default function MyDateInput(props: Partial<ReactDatePickerProps>){//partial esht opsionale pjest ndatapicker
    const [field, meta,helpers] = useField(props.name!);
    return (
        
   <FormControl sx={{padding:2,marginDense:15,fontFamily:'Century Gothic',borderRadius:50,color:'red'}} error={meta.touched && !!meta.error}>
            
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value=> helpers.setValue(value)}
            
            
            />
            {meta.touched && meta.error ? (
                <label  >{meta.error}</label>
             ): null}
             </FormControl>

    )

}