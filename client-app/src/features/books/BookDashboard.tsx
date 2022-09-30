import { Grid } from '@mui/material';
import React from 'react';
import { Book } from '../../app/models/book';


import BookList from './BookList';


interface Props {
    books: Book[];
}

export default function BookDashboard({books}:Props){
    return(
        <Grid>
            <Grid width='10'>
              <BookList books={books}/>
            </Grid>
        </Grid>
    )
}