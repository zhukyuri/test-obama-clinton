const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

const extractSass = new ExtractTextPlugin('style.css');
const styleLoaders = ['css-loader', 'postcss-loader', 'sass-loader', 'import-glob-loader'];

const config = {
	context: path.resolve(__dirname, '../source'),
	entry: ['./js/renderClient.js'],
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'app.js',
		publicPath: NODE_ENV === 'development' ? '/build' : ''
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.(png|jpg|jpeg|eot|woff|ttf|svg|mp4|webm)$/,
				loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
			},
			{
				test: /\.scss$/,
				loaders: NODE_ENV === 'development' ? ['style-loader', ...styleLoaders] : extractSass.extract(styleLoaders),
				include: path.resolve(__dirname, '../source/scss')
			}
		]
	},
	resolve: {
		alias: {
			js: path.resolve(__dirname, '../source/js'),
			scss: path.resolve(__dirname, '../source/scss'),
			fonts: path.resolve(__dirname, '../source/fonts')
		}
	},
	plugins: [
		extractSass,
		new HtmlWebpackPlugin({
			template: 'template.pug',
			inject: NODE_ENV === 'development',
			env: NODE_ENV
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(NODE_ENV)
			}
		})
	],
	performance: {
		hints: false
	}
};

if (NODE_ENV === 'production') {
	config.plugins.unshift(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
