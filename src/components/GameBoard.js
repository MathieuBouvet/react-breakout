import React, { Component } from 'react'
import throttle from 'lodash.throttle'
import './GameBoard.css'

import Paddle from './Paddle'
import Ball from './Ball'
import Brick from './Brick'

import GameModel from '../model/GameModel'

import { BrickTypes } from '../model/Settings'

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.gameModel = new GameModel(1);
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
					top={this.gameModel.paddle.topPosition}
					left={paddlePosition}
					width={this.gameModel.paddle.width}
					height={this.gameModel.paddle.height}
				/>
				<Ball
					top={ballTopPosition}
					left={ballLeftPosition}
					size={this.gameModel.ball.size}
				/>
				{ this.gameModel.bricks.map((brick) => (
					<Brick 
						key={brick.id}
						top={brick.topPosition}
						left={brick.leftPosition}
						width={brick.width}
						height={brick.height}
						display={!brick.markForRemove}
						type={brick.type}
						life={brick.type===BrickTypes.UNBREAKABLE ? -1 : brick.life}
					/>
				)) }
				
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
		if(this.gameModel.ball.stickedToPaddle){
			this.gameModel.ball.moveToNextPosition();
			this.setState({
				ballTopPosition: this.gameModel.ball.topPosition,
				ballLeftPosition: this.gameModel.ball.leftPosition,
			});
		}
	}

}

export default GameBoard