import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './components/Rating/Rating';
import Submitted from './components/Submitted/Submitted';
import { Provider } from 'react-redux'
import { store } from './app/store'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App bg-black h-screen flex align-middle">
					<Routes>
						<Route path='/submitted' element={<Submitted />} />
						<Route path='/' element={<Rating />} />
						<Route path='/*' element={<Navigate to={'/'} />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
