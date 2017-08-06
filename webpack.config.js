var path = require('path');


module.export = {
	entry: path.resolve(__dirname, 'Slider/slider.js'),
	output:{
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
};