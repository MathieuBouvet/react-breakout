import React from 'react'
import PropTypes from 'prop-types'

import './Box.css'

const Box = ({width, height, children}) => (
	<div 
		className="box-component"
		style={{
			height: height+'px',
			width: width+'px',
		}}>
		{children}
	</div>
)

Box.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Box