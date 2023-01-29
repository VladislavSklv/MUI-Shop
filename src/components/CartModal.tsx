import { KeyboardArrowRight} from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListSubheader, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import CartItem from './CartItem';

interface cartModalProps {
    isCartOpened: boolean;
    setIsCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal:React.FC<cartModalProps> = ({isCartOpened, setIsCartOpened}) => {
    const { cart } = useAppSelector(state => state);
    
    return (
        <Drawer
            anchor='right'
            open={isCartOpened}
            onClose={() => setIsCartOpened(false)}
        >
            <List>
                <ListSubheader sx={{color: 'text.primary', pl: 0}}>
                    <Typography variant='h6'>
                        <IconButton
                            onClick={() => setIsCartOpened(false)}
                        >
                            <KeyboardArrowRight sx={{color: 'text.primary', pb: '3px'}} />
                        </IconButton> 
                        Корзина
                    </Typography>
                </ListSubheader>
                <Divider/>
                {!cart.length 
                ?
                    <Typography sx={{pl: 2, pr: 2, pt: 1, width: '300px', boxSizing: 'border-box'}}>Корзина пуста!</Typography>
                :
                    cart.map(cartItem => (
                        <CartItem key={cartItem.id} good={cartItem}/>
                    ))
                }
            </List>
        </Drawer>
    );
};

export default CartModal;