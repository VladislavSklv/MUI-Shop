import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { IGood } from '../data/goods';
import { useAppDispatch } from '../hooks/reduxHooks';
import { addGood } from '../redux/cartSlice';

interface goodCardProps {
    good: IGood;
}

const GoodCard:React.FC<goodCardProps> = ({good}) => {
    const dispatch = useAppDispatch();

    return (
        <Card
            sx={{height: '100%'}}
        >
            <CardMedia
                sx={{height: 140}}
                image={good.poster}
                title={good.name}
            />
            <CardContent>
                <Typography gutterBottom variant='body1' component='h2'>
                    {good.name}
                </Typography>

                <Typography variant='body2' component='p' color='text.secondary'>
                    {good.price} ₽
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(addGood(good))} size='small'>Купить</Button>
            </CardActions>
        </Card>
    );
};

export default GoodCard;