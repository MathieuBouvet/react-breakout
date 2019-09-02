import React from 'react'
import PropTypes from 'prop-types'

import Positionable from './Positionable'

import './Ball.css'

const Ball = ({top, left, size}) => (
	<Positionable top={top-size/2} left={left-size/2}>
		<div className="ball" style={{
			height: size,
			width: size,
		}}></div>
	</Positionable>
)

Ball.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired,
}

export default Ball