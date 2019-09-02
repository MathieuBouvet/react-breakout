import React from 'react'
import PropTypes from 'prop-types'

import './Paddle.css'

import Positionable from './Positionable'
import Sizable from './Sizable'

const Paddle = ({top, left, width, height}) => (
	<Positionable top={top} left={left}>
		<Sizable width={width} height={height}>
			<div className="paddle"></div>
		</Sizable>
	</Positionable>
)

Paddle.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Paddle