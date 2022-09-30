import { Box, Button, Grid } from '@mui/material';
import { Typography } from 'antd';
import React from 'react';
import { Book } from '../../app/models/book';


interface Props{
    books: Book[];
}

export default function BookList({books}: Props){
    return (
        <Grid container spacing={{xs:4,md:2}} >
            <Grid item xs={5} sm={12} md={6} >
            <Grid item>
                {books.map(book => (
                    <Grid item key={book.id}>
                        <Grid item>
                            <Typography> {book.bookName}</Typography>
                            <Typography>
                                <div>{book.publicationYear}</div>
                                <div>{book.publisher}</div>
                            </Typography><Button >View</Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </Grid>

)
}