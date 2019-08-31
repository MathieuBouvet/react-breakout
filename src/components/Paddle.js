import React from 'react'

import './Paddle.css'

const Paddle = ({leftPosition}) => (
	<div className="paddle" style={{left: leftPosition+'px'}}></div>
)

export default Paddle