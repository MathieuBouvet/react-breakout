import React from 'react'
import PropTypes from 'prop-types'

const Positionable = ({top, left, children}) => (
	<div 
		className="positionable" 
		style={{
			position: 'absolute',
			top: top+'px',
			left: left+'px',
		}}
	>
		{children}
	</div>
)

Positionable.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
}

export default Positionable

