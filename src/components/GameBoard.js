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
				<div className="mouseMoveOverlay" onMouseMove={this.handleMouseMove}></div>
				<Paddle 
					leftPosition={paddlePosition}
					topPosition={this.gameModel.paddle.topPosition}
					height={this.gameModel.paddle.height}
					width={this.gameModel.paddle.width}
				/>
			</div>
		)
	}

	handleMouseMove = (event) => {
		this.gameModel.updatePaddlePosition(event.nativeEvent.offsetX);
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
		});
	}
}

export default GameBoard