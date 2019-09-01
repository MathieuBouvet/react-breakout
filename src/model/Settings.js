const settings = {
	board: {
		dynamic: {
			height: 625,
			width: 1000,
		}
	},
	paddle: {
		dynamic: {
			height: 10,
			width: 150,
			topPosition: 610,
			leftPosition: 0,
		},
	},
	ball: {
		dynamic: {
			velocity: 10,
			topPosition: 150,
			leftPosition: 150,
			size: 20,
		},
		static: {
			angle: 90,
		}
	}
}

export default settings