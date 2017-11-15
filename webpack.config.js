var path = require("path");

module.exports = {
	entry: {
		main: "./src/index.jsx"
	},
	output: {
		path: path.join(__dirname, "/public"),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true
	},
    resolve: {
        extensions: ['.js', '.jsx' ]
    },
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
            { 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
