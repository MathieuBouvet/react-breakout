import React from 'react'
import PropTypes from 'prop-types'

import './SidePanel.css'

const SidePanel = ({gamePaused, level, life, pauseHandler}) => (
	<aside className="side-panel-container">
		<div className="level-display">Niveau {level}</div>
		<button className="pause-button" onClick={() => pauseHandler()}> {gamePaused ? 'Resume' : 'pause'} </button>
		<div className="remaining-life"> balles : {life} </div>
	</aside>
)

SidePanel.propTypes = {
	gamePaused: PropTypes.bool.isRequired,
	level: PropTypes.number.isRequired,
	life: PropTypes.number.isRequired,
	pauseHandler: PropTypes.func.isRequired,
}

export default SidePanel