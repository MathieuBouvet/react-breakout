import React from 'react';
import './App.css';

import GameBoard from './components/GameBoard'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				React Breakout
			</header>
			
			<GameBoard />
		</div>
	);
}

export default App;
