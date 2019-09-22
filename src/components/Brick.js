import React from "react";
import PropTypes from "prop-types";

import Positionable from "./Positionable";
import Sizable from "./Sizable";

import { BrickTypes } from "../model/Settings";

import "./Brick.css";

function generateClassName(display, type, life) {
	let base = "brick";
	if (!display) {
		base += " hide";
	}
	if (type === BrickTypes.RESISTANT) {
		return `${base} resistant${life}`;
	}
	if (type === BrickTypes.UNBREAKABLE) {
		return `${base} unbreakable`;
	}
	return base;
}

const Brick = ({ top, left, height, width, margin, display, type, life }) => (
	<Positionable top={top} left={left}>
		<Sizable width={width} height={height} margin={margin}>
			<div className={generateClassName(display, type, life)}></div>
		</Sizable>
	</Positionable>
);

Brick.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	margin: PropTypes.number.isRequired,
	display: PropTypes.bool.isRequired,
	type: PropTypes.number.isRequired,
	life: PropTypes.number.isRequired,
};

export default Brick;
