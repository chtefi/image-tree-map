var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

var entries = [ './index.js' ];
var src = path.join(__dirname, 'src');
var dest = path.join(__dirname, 'dest');

if (process.env.NODE_ENV === 'production') {
  // plugins.push(
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       screw_ie8: true,
  //       warnings: false
  //     }
  //   })
  // );
} else {
	entries.unshift('webpack-dev-server/client?http://0.0.0.0:3000');
	entries.unshift('webpack/hot/only-dev-server');
}

module.exports = {
	entry: entries,
	output: {
		path: dest,
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{ test: /\.js/, loaders: ['babel-loader'], exclude: /node_modules/ },
			{ test: /\.(png|jpg|css)/, loaders: ['file?name=[name].[ext]'], exclude: /node_modules/ }
		]
	},
	plugins: plugins
};
