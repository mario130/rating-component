import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './components/Rating/Rating';
import Submitted from './components/Submitted/Submitted';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App bg-black h-screen flex align-middle">
				<Routes>
					<Route path='/submitted' element={<Submitted />} />
					<Route path='/' element={<Rating rating={0} />} />
					<Route path='/*' element={<Navigate to={'/'} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
