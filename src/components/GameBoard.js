import React, { Component } from 'react'
import throttle from 'lodash.throttle'
import './GameBoard.css'

import Paddle from './Paddle'
import Ball from './Ball'

import GameModel from '../model/GameModel'

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.gameModel = new GameModel(0.75);
		this.state = {
			paddlePosition: 0,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		}
		// throttling and binding
		this.throttledMouseMoveHandler = throttle(this.throttledMouseMoveHandler.bind(this), 10);
	}

	render(){
		const { paddlePosition, ballTopPosition, ballLeftPosition } = this.state;
		return (
			<div className="gameBoard" style={{width: this.gameModel.width+"px", height: this.gameModel.height+"px"}}>
				<div className="mouseMoveOverlay" onMouseMove={this.handleMouseMove}></div>
				<Paddle 
					leftPosition={paddlePosition}
					topPosition={this.gameModel.paddle.topPosition}
					height={this.gameModel.paddle.height}
					width={this.gameModel.paddle.width}
				/>
				<Ball
					leftPosition={ballLeftPosition}
					topPosition={ballTopPosition}
					size={this.gameModel.ball.size}
				/>
			</div>
		)
	}

	componentDidMount(){
		this.runTheGame = setInterval(() => {
			this.gameModel.run();
			this.setState({
				ballLeftPosition: this.gameModel.ball.leftPosition,
				ballTopPosition: this.gameModel.ball.topPosition,
			});
		}, 40);
	}
	componentWillUnmount(){
		clearInterval(this.runTheGame);
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