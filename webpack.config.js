module.exports = {
    entry: './app/main.es6.js',
    output: {
        filename: './app/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
                modules: 'amd'
            }}
        ]
    }
};
