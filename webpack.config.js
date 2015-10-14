module.exports = {
    entry: './test/test.js',
    output: {
        path: "./test",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
