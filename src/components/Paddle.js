import React from 'react'

import './Paddle.css'

import Positionable from './Positionable'

const Paddle = ({leftPosition, topPosition, width, height}) => (
	<Positionable top={topPosition} left={leftPosition}>
		<div 
			className="paddle"
			style={{
				width: width+'px',
				height: height+'px',
			}}>
		</div>
	</Positionable>
)

export default Paddle