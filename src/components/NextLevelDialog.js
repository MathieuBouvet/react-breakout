import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowCircleRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import './NextLevelDialog.css'

import Dialog from './Dialog'

const NextLevelDialog = ({nextLevelAction}) => (
	<Dialog title="Gagné !" dialogAction={nextLevelAction}>
		<IconContext.Provider value={{ className: "next-level-icon" }}>
			<FaArrowCircleRight />
		</IconContext.Provider>
		<div className="next-level-label">Suivant</div>
	</Dialog>
)

NextLevelDialog.propTypes = {
	nextLevelAction: PropTypes.func.isRequired,
}

export default NextLevelDialog