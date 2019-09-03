const settings = {
	templates: {
		board: {
			binded: {
				height: 625,
				width: 1000,
			},
			free: {
				topPosition: 0,
				leftPosition: 0,
			}
		},
		paddle: {
			binded: {
				height: 25,
				width: 160,
				topPosition: 610,
				leftPosition: 0,
			},
		},
		ball: {
			binded: {
				velocity: 15,
				topPosition: 550,
				leftPosition: 550,
				size: 15,
			},
			free: {
				angle: 135,
			}
		},
		brick: {
			binded: {
				leftPosition: 0,
				topPosition: 0,
				height: 200,
				width: 200,
			}
		}
	}
}

export default settings