// import * as React from 'react';
// import { Theme, useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Drinks',
//   'Culture',
//   'Film',
//   'Food',
//   'Music',
//   'Travel',
// ];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MySelectInput() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState<string[]>([]);

//   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Category</em>;
//             }

//             return selected.join(', ');
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem disabled value="">
//             <em>Category</em>
//           </MenuItem>
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


// import { Select } from '@mantine/core';
// import { useField } from 'formik';
// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { Label, Text } from 'gestalt';
// interface Props {
//   placeholder: string;
//   name: string;
//   options: any;
//   label?: string;
// }


// export default function MySelectInput(props: Props) {
//   const [field, meta, helpers] = useField(props.name); 
//   const [value, setValue] = useState<string | null>(null);
//   return (
//     <Form.Group className="mb-3" controlId="formBasicEmail" >
//        <Form.Label >{props.label}</Form.Label>
//        {/* <Form.Select aria-label="Default select example"
//        value={field.value || null}
//       //  onChange={(e: any, d: { value: any; }) => helpers.setValue(d.value)}
//       options
//        >
      
   
//     </Form.Select> */}

//     <Select
//       label="Your favorite framework/library"
//       placeholder="Pick one"
//       value={field.value || null}
//       onChange={(e: any, d: { value: any; }) => helpers.setValue(d.value)}
      
//       data={props.options}
//     />
//     {meta.touched && meta.error ? (
//                 <label>{meta.error}</label>
//             ) : null}
//     </Form.Group>
//   );
// }

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

export default function SuggestionMySelectInput(props: Props){
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