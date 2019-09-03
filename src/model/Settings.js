export const BrickTypes = {
	NORMAL: 0,
	RESISTANT: 1,
	UNBREAKABLE: 2,
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
				height: 35,
				width: 55,
			}
		}
	},
	levels: {
		level1:{
			bricks: [
				{
					id: "1",
					type: BrickTypes.NORMAL,
					topPosition: 50,
					leftPosition: 50,
				},
				{
					id: "2",
					type: BrickTypes.NORMAL,
					topPosition: 150,
					leftPosition: 150,
				},
				{
					id: "3",
					type: BrickTypes.NORMAL,
					topPosition: 150,
					leftPosition: 50,
				},
			]
		}
	}
}
export default settings