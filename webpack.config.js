const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: './app.js',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
	},
	plugins: [
		new webpack.ProvidePlugin({
			'THREE': 'three/build/three'
		}),
	]
}
