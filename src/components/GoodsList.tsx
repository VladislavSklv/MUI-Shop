import React from 'react';
import { Grid } from '@mui/material';
import { IGood } from '../data/goods';
import GoodCard from './GoodCard';

interface goodsListProps {
    goods: IGood[];
}

const GoodsList:React.FC<goodsListProps> = ({goods}) => {
    return (
        <Grid container spacing={2}>
            {goods.map(good => (
                <Grid key={good.id} item xs={12} md={4}>
                    <GoodCard good={good}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default GoodsList;