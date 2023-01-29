import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import cartSlice from './redux/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const store = configureStore({
	reducer: cartSlice
})

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;