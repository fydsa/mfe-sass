module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-react', { runtime: 'automatic' }],
							'@babel/preset-typescript',
							'@babel/preset-env',
						],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
	output: {
		publicPath: '/',
	},
};
