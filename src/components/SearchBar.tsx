import React from 'react';
import { TextField } from '@mui/material';

interface serachBarProps {
    query: string;
    handleQueryChange: (e: any) => void;
}

const SearchBar: React.FC<serachBarProps> = ({handleQueryChange, query}) => {
    return (
        <TextField fullWidth variant='standard' type='search' label='Поиск' sx={{mb: 2}} value={query} onChange={(e) => handleQueryChange(e)}></TextField>
    );
};

export default SearchBar;