const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	resolve: {
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.ProvidePlugin({
			'THREE': 'three/build/three'
		}),
		new HtmlWebpackPlugin({
			title: 'My first three.js app',
		}),
	]
}
