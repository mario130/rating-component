import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './components/Rating/Rating';

function App() {
	return (
		<div className="App bg-black h-screen flex align-middle">
			<Rating rating={0} />
		</div>
	);
}

export default App;
