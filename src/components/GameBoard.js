import React, { Component } from 'react'
import throttle from 'lodash.throttle'
import './GameBoard.css'

import GamingArea from './GamingArea'
import SidePanel from './SidePanel'
import NextLevelDialog from './NextLevelDialog'

import GameModel from '../model/GameModel'

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
			<section className="App-body">
				<div className="game-container">
					<GamingArea 
						gameModelSize={{
							width: this.gameModel.width,
							height: this.gameModel.height,
						}}
						paddle={{
							top: this.gameModel.paddle.topPosition,
							left: paddlePosition,
							width: this.gameModel.paddle.width,
							height: this.gameModel.paddle.height,
						}}
						ball={{
							top: ballTopPosition,
							left: ballLeftPosition,
							size: this.gameModel.ball.size,
						}}
						bricks={this.gameModel.bricks}
						mouseMoveHandler={this.handleMouseMove}
						clickHandler={this.handleClick}
					/>
				</div>
				<SidePanel
					gamePaused={this.gameModel.paused}
					level={this.gameModel.level}
					pauseHandler={this.handlePauseClick}
				/>
				{
					this.gameModel.bricksNumber <= 0 && <NextLevelDialog nextLevelAction={this.handleNextLevelClick}/>
				}
			</section>
		);
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
		if(!this.gameModel.paused){
			this.throttledMouseMoveHandler(event.nativeEvent.offsetX);
		}
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

	handleClick = (event) => {
		this.gameModel.ball.unstick();
	}

	handlePauseClick = () => {
		this.gameModel.togglePause();
	}

	handleNextLevelClick = () => {
		this.gameModel.playNextLevel();
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		});
	}

}

export default GameBoard