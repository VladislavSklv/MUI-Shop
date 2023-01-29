import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component="h1" sx={{flexGrow: 1}}>
                    MUI Shop
                </Typography>
                <IconButton
                    size='large'
                    color="inherit"
                >
                    <ShoppingCart/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;