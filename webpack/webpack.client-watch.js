const webpack = require('webpack');
const config = require('./webpack.client');

config.cache = true;
config.devtool = 'cheap-module-eval-source-map';
config.entry.unshift(
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
);
config.output.publicPath = 'http://localhost:8080/build';
config.devServer = {
	publicPath: 'http://localhost:8080/build',
	contentBase: 'build',
	hot: true,
	noInfo: false,
	quiet: false,
	stats: { colors: true },
	historyApiFallback: {
		index: '/build',
		rewrites: [
			{ from: /^\/$/, to: '/build' }
		],
	},
};
config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
]);

module.exports = config;
