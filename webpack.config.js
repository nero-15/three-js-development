const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
	},
	plugins: [
		new webpack.ProvidePlugin({
			'THREE': 'three/build/three'
		}),
	]
}
