module.exports = {
    entry: './app/scripts/main.es6.js',
    output: {
        filename: './app/dist/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    devtool: "#cheap-module-source-map"
};
