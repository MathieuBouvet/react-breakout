import React from 'react'
import PropTypes from 'prop-types'

import { BrickTypes } from '../model/Settings'

import Paddle from './Paddle'
import Ball from './Ball'
import Brick from './Brick'

import './GamingArea.css'

const GamingArea = ({gameModelSize, paddle, ball, bricks, mouseMoveHandler, clickHandler}) => (
	<div className="gameBoard" style={{width: gameModelSize.width+"px", height: gameModelSize.height+"px"}}>
		<div className="mouseMoveOverlay" onMouseMove={(e) => mouseMoveHandler(e)} onClick={() => clickHandler()}></div>
		<Paddle {...paddle} />
		<Ball {...ball} />
		{ bricks.map((brick) => (
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

GamingArea.propTypes = {
	gameModelSize: PropTypes.shape({
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}).isRequired,
	paddle: PropTypes.shape({
		top: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}).isRequired,
	ball: PropTypes.shape({
		top: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		size: PropTypes.number.isRequired,
	}).isRequired,
	bricks: PropTypes.arrayOf(PropTypes.shape({
		topPosition: PropTypes.number.isRequired,
		leftPosition: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		markForRemove: PropTypes.bool.isRequired,
		type: PropTypes.number.isRequired,
	})).isRequired,
	mouseMoveHandler: PropTypes.func.isRequired,
	clickHandler: PropTypes.func.isRequired,
}

export default GamingArea