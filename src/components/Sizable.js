import React from "react";
import PropTypes from "prop-types";

import "./Sizable.css";

const Sizable = ({ width, height, margin, children }) => (
	<div
		className="sizable"
		style={{
			height: height + "px",
			width: width + "px",
			padding: margin + "px",
		}}
	>
		{children}
	</div>
);

Sizable.defaultProps = {
	margin: 5,
};

Sizable.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	margin: PropTypes.number,
};

export default Sizable;
