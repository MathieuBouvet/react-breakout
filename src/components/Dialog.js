import React from 'react'
import PropTypes from 'prop-types'

import './Dialog.css'

const Dialog = ({title, dialogAction, children}) => (
	<div className="dialog-overlay">
		<div className="dialog">
			<div className="dialog-header">{ title }</div>
			<div className="dialog-body" onClick={() => dialogAction()}>
				{ children }
			</div>
		</div>
	</div>
)

Dialog.propTypes = {
	title: PropTypes.string.isRequired,
	dialogAction: PropTypes.func.isRequired,
}

export default Dialog