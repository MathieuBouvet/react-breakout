export const BrickTypes = {
	NORMAL: 0,
	RESISTANT: 1,
	UNBREAKABLE: 2,
}
export const GameState = {
	LOST: 0,
	LEVEL_COMPLETED: 1,
	WON: 2,
	RUNNING: 3,
	LOST_LIFE: 4,
}
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
				topPosition: 360,
				leftPosition: 550,
				size: 15,
			},
			free: {
				angle: 90,
				stickedToPaddle: true,
			}
		},
		brick: {
			binded: {
				leftPosition: 0,
				topPosition: 0,
				height: 45,
				width: 66,
			}
		}
	},
	levels: {
		level1:{
			bricks: [
				{
					type: BrickTypes.UNBREAKABLE,
					topPosition: 50,
					leftPosition: 50,
				},
				{
					type: BrickTypes.NORMAL,
					topPosition: 150,
					leftPosition: 150,
				},
			]
		},
		level2: {
			bricks: [
				{
					type: BrickTypes.NORMAL,
					topPosition: 150,
					leftPosition: 150,
				},
				{
					type: BrickTypes.RESISTANT,
					topPosition: 150,
					leftPosition: 250,
				},
			],
		}
	}
}
export default settings