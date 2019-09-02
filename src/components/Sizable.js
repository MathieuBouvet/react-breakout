import React from 'react'
import PropTypes from 'prop-types'

import './Sizable.css'

const Sizable = ({width, height, children}) => (
	<div 
		className="sizable"
		style={{
			height: height+'px',
			width: width+'px',
		}}>
		{children}
	</div>
)

Sizable.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Sizable