import React, { Component } from "react";
import throttle from "lodash.throttle";
import "./GameBoard.css";

import GamingArea from "./GamingArea";
import SidePanel from "./SidePanel";
import NextLevelDialog from "./NextLevelDialog";
import GameWonDialog from "./GameWonDialog";
import GameLostDialog from "./GameLostDialog";

import GameModel from "../model/GameModel";

const boardGutter = 50;

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.gameModel = new GameModel(1);
		this.state = {
			paddlePosition: 0,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		};
		// throttling and binding
		this.throttledMouseMoveHandler = throttle(this.throttledMouseMoveHandler.bind(this), 10);
		this.gameContainerRef = React.createRef();
	}

	render() {
		const { paddlePosition, ballTopPosition, ballLeftPosition } = this.state;
		return (
			<section className="App-body">
				<div ref={this.gameContainerRef} className="game-container">
					<GamingArea
						gameModelSize={{
							width: this.gameModel.width,
							height: this.gameModel.height,
							boxMargin: this.gameModel.boxMargin,
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
					life={this.gameModel.life}
					pauseHandler={this.handlePauseClick}
				/>
				{this.gameModel.isGameLevelCompleted() && <NextLevelDialog nextLevelAction={this.handleNextLevelClick} />}
				{this.gameModel.isGameWon() && <GameWonDialog gameWonAction={this.handleGameWonOrLostClick} />}
				{this.gameModel.isGameLost() && <GameLostDialog gameLostAction={this.handleGameWonOrLostClick} />}
			</section>
		);
	}

	componentDidMount() {
		this.runTheGame = setInterval(() => {
			this.gameModel.run();
			this.setState({
				ballLeftPosition: this.gameModel.ball.leftPosition,
				ballTopPosition: this.gameModel.ball.topPosition,
			});
		}, 40);
		this.resizeGame();
		window.addEventListener("resize", this.resizeGame);
	}
	componentWillUnmount() {
		clearInterval(this.runTheGame);
		window.removeEventListener("resize", this.resizeGame);
	}

	// React synthetic event are pooled, and not available asyncronously
	// So we need this trick with two functions
	handleMouseMove = (event) => {
		// we send the value, not the event, that's the trick
		if (!this.gameModel.paused) {
			this.throttledMouseMoveHandler(event.nativeEvent.offsetX);
		}
	};
	throttledMouseMoveHandler(position) {
		this.gameModel.updatePaddlePosition(position);
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
		});
		if (this.gameModel.ball.stickedToPaddle) {
			this.gameModel.ball.moveToNextPosition();
			this.setState({
				ballTopPosition: this.gameModel.ball.topPosition,
				ballLeftPosition: this.gameModel.ball.leftPosition,
			});
		}
	}

	handleClick = (event) => {
		this.gameModel.ball.unstick();
	};

	handlePauseClick = () => {
		this.gameModel.togglePause();
		console.log(this.gameModel);
	};

	handleNextLevelClick = () => {
		this.gameModel.playNextLevel();
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		});
	};

	handleGameWonOrLostClick = () => {
		this.gameModel.resetGame();
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		});
	};

	resizeGame = () => {
		this.gameModel.resizeToFit(
			this.gameContainerRef.current.offsetWidth - 2 * boardGutter,
			this.gameContainerRef.current.offsetHeight - 2 * boardGutter
		);
		this.setState({
			paddlePosition: this.gameModel.paddle.leftPosition,
			ballLeftPosition: this.gameModel.ball.leftPosition,
			ballTopPosition: this.gameModel.ball.topPosition,
		});
	};
}

export default GameBoard;
