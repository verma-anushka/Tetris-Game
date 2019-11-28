const I = [
	[ // Initial Pattern
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[ // Pattern after first rotation
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[ // Pattern after second rotation
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[ // Pattern after third rotation
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[ // Initial Pattern
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[ // Pattern after first rotation
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[ // Pattern after second rotation
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[ // Pattern after third rotation
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[ // Initial Pattern
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[ // Pattern after first rotation
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[ // Pattern after second rotation
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[ // Pattern after third rotation
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[ // Initial Pattern
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[ // Initial Pattern
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[ // Pattern after first rotation
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[ // Pattern after second rotation
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[ // Pattern after third rotation
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[ // Initial Pattern
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[ // Pattern after first rotation
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[ // Pattern after second rotation
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[ // Pattern after third rotation
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[ // Initial Pattern
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[ // Pattern after first rotation
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[ // Pattern after second rotation
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[ // Pattern after third rotation
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];

const tetrominoPieces = [

    [Z, "#D82800"], // red
    [S, "#80D010"], // green
    [T, "#F0BC3C"], // gold
    [O, "#0070EC"], // blue
    [L, "#7F9D55"], // purple
    [I, "#FC74B4"], // pink
	[J, "#FC7460"] // orange
	
];