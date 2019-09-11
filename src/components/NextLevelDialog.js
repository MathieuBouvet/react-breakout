import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowCircleRight } from 'react-icons/fa'

import './NextLevelDialog.css'

import Dialog from './Dialog'

const NextLevelDialog = (props) => (
	<Dialog title="Gagné !">
	<FaArrowCircleRight />
	</Dialog>
)

NextLevelDialog.propTypes = {

}

export default NextLevelDialog