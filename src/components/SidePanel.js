import React from 'react'
import PropTypes from 'prop-types'

import './SidePanel.css'

const SidePanel = ({gamePaused, level, pauseHandler}) => (
	<aside className="side-panel-container">
		<div className="level-display">Niveau {level}</div>
		<button className="pause-button" onClick={() => pauseHandler()}> {gamePaused ? 'Resume' : 'pause'} </button>
	</aside>
)

SidePanel.propTypes = {
	gamePaused: PropTypes.bool.isRequired,
	level: PropTypes.number.isRequired,
	pauseHandler: PropTypes.func.isRequired,
}

export default SidePanel