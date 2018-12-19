const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require("glob");

function toObject(paths) {
	var ret = {};

	paths.forEach(function(path) {
		// you can define entry names mapped to [name] here
		ret[path.split("/").slice(-1)[0]] = path;
	});

	return ret;
}

var htmlConfig = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/views/index.pug'
		}),
	],
	module: {
		rules: [
			{ 
				test: /\.pug$/,
				use: ["pug-loader"]
			},
		]
	}
}

var cssConfig = {
	watch: true,
	entry: ["./src/css/main.scss"],
	output: {
		filename: "[name].css",
		path: path.resolve(__dirname, "./../dist")
	},
	stats: {
		errors: false,
		errorDetails: false
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							minimize: false
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: () => [autoprefixer()]
						}
					},
					"sass-loader"
				]
			}
		]
	}
};

var jsConfig = {
	watch: true,
	entry: ["./src/js/core.js"],
	output: {
		filename: "core.js",
		path: path.resolve(__dirname, "./../dist/")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						query: {
							presets: ["es2015"]
						}
					}
				]
			}
		]
	}
};

var imgConfig = {
	watch: true,
	entry: toObject(glob.sync("./src/img/**/*")),
	output: {
		filename: "core.js",
		path: path.resolve(__dirname, "./../dist/")
	},
	stats: {
		errors: false,
		errorDetails: false
	},
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "img/[path][name].[ext]",
							context: "src/img"
						}
					},
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 80
							},
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: 80
							},
							gifsicle: {
								optimizationLevel: 3
							}
						}
					}
				]
			}
		]
	}
};

module.exports = [imgConfig, htmlConfig, cssConfig, jsConfig];
