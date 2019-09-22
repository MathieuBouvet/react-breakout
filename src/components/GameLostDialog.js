import React from "react";
import PropTypes from "prop-types";
import { FaUndo } from "react-icons/fa";
import { IconContext } from "react-icons";

import Dialog from "./Dialog";

import "./GameLostDialog.css";

const GameLostDialog = ({ gameLostAction }) => (
	<Dialog title="Perdu :`(" dialogAction={gameLostAction}>
		<IconContext.Provider value={{ className: "replay-lost-game-icon" }}>
			<FaUndo />
		</IconContext.Provider>
		<div className="game-lost-label">Rejouer</div>
	</Dialog>
);

GameLostDialog.propTypes = {
	gameLostAction: PropTypes.func.isRequired,
};

export default GameLostDialog;
