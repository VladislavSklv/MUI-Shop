import { Grid, Typography } from '@mui/material';
import React from 'react';

const ErrorPage:React.FC = () => {
    return (
        <Grid 
            container
            justifyContent='center'
            alignItems='center'
            sx={{position: 'absolute', top: '40%'}}
        >
            <Grid item>
                <Typography
                    variant='h4'
                    component='h1'
                    sx={{textAlign: 'center', fontWeight: 'bold', mb: 4}}
                >Oops!</Typography> 

                <Typography
                    variant='body1'
                    component='h2'
                    sx={{textAlign: 'center',  mb: 3, fontWeight: 500}}
                >Sorry, an unexpected error has occured.</Typography>

                <Typography
                    variant='body1'
                    component='p'
                    sx={{textAlign: 'center', fontStyle: 'italic', color: 'text.secondary', fontWeight: 500}}
                >Not Found</Typography> 
            </Grid>
        </Grid>
    );
};

export default ErrorPage;