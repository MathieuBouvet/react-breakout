import React from 'react'
import PropTypes from 'prop-types'

import Positionable from './Positionable'
import Sizable from './Sizable'

import './Brick.css'

const Brick = ({top, left, height, width, display, type, life}) => (
	<Positionable top={top} left={left}>
		<Sizable width={width} height={height}>
			<div className={`brick ${!display ? 'hide' : ''}`}></div>
		</Sizable>
	</Positionable>
)

Brick.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	display: PropTypes.bool.isRequired,
	type: PropTypes.number.isRequired,
	life: PropTypes.number.isRequired,
}

export default Brick