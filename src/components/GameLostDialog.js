import React from "react";
import PropTypes from "prop-types";

import Dialog from "./Dialog";

import "./GameLostDialog.css";

const GameLostDialog = ({ gameLostAction }) => (
	<Dialog title="Perdu :`(" dialogAction={gameLostAction}></Dialog>
);

GameLostDialog.propTypes = {
	gameLostAction: PropTypes.func.isRequired,
};

export default GameLostDialog;
