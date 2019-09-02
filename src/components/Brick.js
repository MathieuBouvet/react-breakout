import React from 'react'
import PropTypes from 'prop-types'

import Positionable from './Positionable'
import Box from './Box'

import './Brick.css'

const Brick = ({top, left, height, width}) => (
	<Positionable top={top} left={left}>
		<Box width={width} height={height}>
			<div className="brick"></div>
		</Box>
	</Positionable>
)

Brick.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Brick