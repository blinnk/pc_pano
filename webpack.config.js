const path = require('path');

module.exports = {
	entry: {
		index: './index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

};