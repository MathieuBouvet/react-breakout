import React from 'react'
import Positionable from './Positionable'

import './Ball.css'

const Ball = ({topPosition, leftPosition, size}) => (
	<Positionable top={topPosition} left={leftPosition}>
		<div className="ball" style={{
			height: size,
			width: size,
		}}></div>
	</Positionable>
)

export default Ball