import React, { Component } from 'react'
import './GameBoard.css'

import Paddle from './Paddle'

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paddlePosition: 0,
		}
	}

	render(){
		const { paddlePosition } = this.state;
		return (
			<div className="gameBoard" onMouseMove={this.handleMouseMove}>
				<Paddle leftPosition={paddlePosition} />
			</div>
		)
	}

	handleMouseMove = (event) => {
		this.setState({
			paddlePosition: event.nativeEvent.offsetX,
		});
	}
}

export default GameBoard