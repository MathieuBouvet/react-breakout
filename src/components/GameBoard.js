import React, { Component } from 'react'
import throttle from 'lodash.throttle'
import './GameBoard.css'

import Paddle from './Paddle'
import GameModel from '../model/GameModel'

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paddlePosition: 0,
		}
		this.gameModel = new GameModel(0.75);
		// throttling and binding
		this.throttledMouseMoveHandler = throttle(this.throttledMouseMoveHandler.bind(this), 10);
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

	// React synthetic event are pooled, and not available asyncronously
	// So we need this trick with two functions
	handleMouseMove = (event) => {
		// we send the value, not the event, that's the trick
		this.throttledMouseMoveHandler(event.nativeEvent.offsetX);
	}
	throttledMouseMoveHandler(position){
		this.gameModel.updatePaddlePosition(position);
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
		});
	}

}

export default GameBoard