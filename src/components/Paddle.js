import React from 'react'

import './Paddle.css'

import Positionable from './Positionable'

const Paddle = ({leftPosition}) => (
	<Positionable top={570} left={leftPosition}>
		<div className="paddle"></div>
	</Positionable>
)

export default Paddle