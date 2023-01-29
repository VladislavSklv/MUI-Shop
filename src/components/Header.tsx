import React, { useEffect, useState } from 'react';
import { ShoppingCart, SignalWifiStatusbarConnectedNoInternet4Sharp } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { useAppSelector } from '../hooks/reduxHooks';

interface headerProps {
    setIsCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header:React.FC<headerProps> = ({setIsCartOpened}) => {
    const [fullQuantity, setFullQuantity] = useState(0);
    const {cart} = useAppSelector(state => state);

    useEffect(() => {
        let fullQ = 0;
        cart.forEach(cartItem => {
            fullQ += cartItem.quantity;
        });
        setFullQuantity(fullQ);
    }, [cart]);

    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component="h1" sx={{flexGrow: 1}}>
                    MUI Shop
                </Typography>
                <IconButton
                    size='large'
                    color="inherit"
                    onClick={() => setIsCartOpened(true)}
                >
                    <Badge badgeContent={fullQuantity} color='error'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;