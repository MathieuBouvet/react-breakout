import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowCircleRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import './NextLevelDialog.css'

import Dialog from './Dialog'

const NextLevelDialog = (props) => (
	<Dialog title="Gagné !">
		<IconContext.Provider value={{ className: "next-level-icon" }}>
			<FaArrowCircleRight />
		</IconContext.Provider>
		<div className="next-level-label">Suivant</div>
	</Dialog>
)

NextLevelDialog.propTypes = {

}

export default NextLevelDialog