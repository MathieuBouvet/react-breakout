const settings = {
	templates: {
		board: {
			dynamic: {
				height: 625,
				width: 1000,
			}
		},
		paddle: {
			dynamic: {
				height: 15,
				width: 150,
				topPosition: 610,
				leftPosition: 0,
			},
		},
		ball: {
			dynamic: {
				velocity: 15,
				topPosition: 500,
				leftPosition: 800,
				size: 15,
			},
			static: {
				angle: 60,
			}
		}
	}
}

export default settings