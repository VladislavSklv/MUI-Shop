import { Container } from '@mui/system';
import React, { useState } from 'react';
import GoodsList from './components/GoodsList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { allGoods } from './data/goods';

function App() {
	const [goods, setGoods] = useState(allGoods);
	const [query, setQuery] = useState('');

	const handleQueryChange = (e: any) => {
        if (!e.target.value) {
            setGoods(allGoods);
            setQuery('');
            return;
        }

        setQuery(e.target.value);
        setGoods(
            goods.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
		)
    };

	return (
		<div>
			<Header/>
			<Container sx={{mt: 10}}>
				<SearchBar handleQueryChange={handleQueryChange} query={query}/>
				<GoodsList goods={goods}/>
			</Container>
		</div>
	);
}

export default App;
