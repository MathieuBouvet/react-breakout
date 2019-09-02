const settings = {
	templates: {
		board: {
			binded: {
				height: 625,
				width: 1000,
			},
		},
		paddle: {
			binded: {
				height: 15,
				width: 150,
				topPosition: 610,
				leftPosition: 0,
			},
		},
		ball: {
			binded: {
				velocity: 15,
				topPosition: 500,
				leftPosition: 800,
				size: 15,
			},
			free: {
				angle: 60,
			}
		}
	}
}

export default settings