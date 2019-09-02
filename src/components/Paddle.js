import React from 'react'
import PropTypes from 'prop-types'

import './Paddle.css'

import Positionable from './Positionable'
import Box from './Box'

const Paddle = ({top, left, width, height}) => (
	<Positionable top={top} left={left}>
		<Box width={width} height={height}>
			<div className="paddle"></div>
		</Box>
	</Positionable>
)

Paddle.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Paddle