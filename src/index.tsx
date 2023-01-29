import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import cartSlice from './redux/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const store = configureStore({
	reducer: cartSlice
});

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App/>,
	  errorElement: <ErrorPage/>
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;