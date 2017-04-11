//webpack is based on commonJs pattern therefore we need to use module.export

module.exports = {
    entry: ['./utils.js', './app.js'],              //entry point
    output: {
        filename: 'bundle.js'           //output file
    },
    watch: true,                        //watch method, so that whenever we change anything inside our files, webpack would re-run the build

    module: {                           //it consist of loaders that are use to perform some more tasks on files
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"          //to convert es6 to es5
            }
        ]
    },

    resolve: {                                  //tells webpack for the extension to look for, while resolving the dependencies
        extensions: ["", ".js", ".es6"]
    }
};