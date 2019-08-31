import React, { Component } from 'react'
import './GameBoard.css'

import Paddle from './Paddle'
import GameModel from '../model/GameModel'

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paddlePosition: 0,
		}
		this.gameModel = new GameModel();
	}

	render(){
		const { paddlePosition } = this.state;
		return (
			<div className="gameBoard" style={{width: this.gameModel.width+"px", height: this.gameModel.height+"px"}}>
				<Paddle leftPosition={paddlePosition} />
			</div>
		)
	}

	handleMouseMove = (event) => {
		this.gameModel.updatePaddlePosition(event.nativeEvent.offsetX);
		this.setState({
			paddlePosition: this.gameModel.paddlePosition,
		});
	}
}

export default GameBoard