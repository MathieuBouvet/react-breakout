import React from 'react'
import PropTypes from 'prop-types'

import './SidePanel.css'

const SidePanel = ({gamePaused, pauseHandler}) => (
	<aside className="side-panel-container">
		<button className="pause-button" onClick={() => pauseHandler()}> {gamePaused ? 'Resume' : 'pause'} </button>
	</aside>
)

SidePanel.propTypes = {
	gamePaused: PropTypes.bool.isRequired,
	pauseHandler: PropTypes.func.isRequired,
}

export default SidePanel