import React from 'react'
import PropTypes from 'prop-types'
import { FaUndo } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import Dialog from './Dialog'

import './GameWonDialog.css'

const GameWonDialog = ({gameWonAction}) => (
	<Dialog title="Jeu Terminé !" dialogAction={gameWonAction} >
		<IconContext.Provider value={{ className: "replay-game-won-icon" }} >
			<FaUndo />
		</IconContext.Provider>
		c'est gagné !
	</Dialog>
)

GameWonDialog.propTypes = {
	gameWonAction: PropTypes.func.isRequired,
}

export default GameWonDialog