import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { IGoodInCart, removeGood } from '../redux/cartSlice';

interface cartItemProps {
    good: IGoodInCart;
}

const CartItem: React.FC<cartItemProps> = ({good}) => {
    const dispatch = useAppDispatch();

    return (
        <ListItem
            sx={{width: '300px', color: 'text.primary'}}
        >
            <Typography variant='body2'>{good.name}, <Typography variant='body2' sx={{color: 'text.secondary', display: 'inline-block'}}>{good.price}₽ x {good.quantity}</Typography></Typography> 
            <IconButton
                size='small'
                onClick={() => dispatch(removeGood(good.id))}
            >
                <Close sx={{fontSize: 20}}/>
            </IconButton>
        </ListItem>
    );
};

export default CartItem;