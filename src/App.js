import React from 'react';
import './App.css';

import GameBoard from './components/GameBoard'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				React Breakout
			</header>
			<section className="App-body">
				<div className="game-container">
					<GameBoard />
				</div>
				<aside className="side-panel-container"></aside>
			</section>
		</div>
	);
}

export default App;
